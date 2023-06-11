import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { getAdminUrl } from '../../../../config/url.config'

import { useDebounce } from '../../../../hooks/useDebounce'

import { GenreService } from '../../../../services/genre.service'

import { toastError } from '../../../../utils/toast-error'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['genre list', debouncedSearch],
		() => GenreService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre) => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						items: [genre.name],
					})
				),

			onError: (error) => {
				toastError(error, 'Genre list')
			},
		}
	)

	const handleSearch = (e) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create genre',
		() => GenreService.create(),
		{
			onError: (error) => {
				toastError(error, 'Create genre')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Жанр құру', 'құру сәтті орындалды')
				push(getAdminUrl(`genre/edit/${_id}`))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete genre',
		(genreId) => GenreService.delete(genreId),
		{
			onError: (error) => {
				toastError(error, 'Жанр өшірілді')
			},
			onSuccess: () => {
				toastr.success('Жанр өшіру', 'жанр сәтті өшірілді')
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
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
