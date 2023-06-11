import { getAdminUrl } from '../../../../config/url.config'
import { useRouter } from 'next/router'

import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { UserService } from '../../../../services/user.service'

import { toastError } from '../../../../utils/toast-error'

export const useUserEdit = (setValue) => {
	const { push, query } = useRouter()

	const userId = String(query.id)

	const { isLoading } = useQuery(
		['user', userId],
		() => UserService.getById(userId),
		{
			onSuccess: ({ data }) => {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},

			onError: (error) => {
				toastError(error, 'Пайдаланушыны алыңыз')
			},

			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update user',
		(data) => UserService.update(userId, data),
		{
			onError: (error) => {
				toastError(error, 'Пайдаланушыны жаңарту')
			},

			onSuccess() {
				toastr.success('Пайдаланушыны жаңарту', 'жаңарту сәтті өтті')
				push(getAdminUrl('users'))
			},
		}
	)

	const onSubmit = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
