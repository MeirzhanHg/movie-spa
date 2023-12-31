import { getAdminUrl } from '../../../../config/url.config'
import { useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { useDebounce } from '../../../../hooks/useDebounce'

import { UserService } from '../../../../services/user.service'

import { convertMongoDate } from '../../../../utils/date/convertMongoDate'
import { toastError } from '../../../../utils/toast-error'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['user list', debouncedSearch],
		() => UserService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user) => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						items: [user.email, convertMongoDate(user.createdAt)],
					})
				),

			onError: (error) => {
				toastError(error, 'User list')
			},
		}
	)

	const handleSearch = (e) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId) => UserService.deleteUser(userId),
		{
			onError: (error) => {
				toastError(error, 'Delete user')
			},
			onSuccess: () => {
				toastr.success('Пайдаланушыны жою', 'жою сәтті аяқталды')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
