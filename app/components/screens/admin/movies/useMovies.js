import { getAdminUrl } from '../../../../config/url.config'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { useDebounce } from '../../../../hooks/useDebounce'

import { MovieService } from '../../../../services/movie.service'

import { getGenresList } from '../../../../utils/movie/getGenresList'
import { toastError } from '../../../../utils/toast-error'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['movie list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie) => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [
							movie.title,
							getGenresList(movie.genres),
							String(movie.rating),
						],
					})
				),

			onError: (error) => {
				toastError(error, 'Movie list')
			},
		}
	)

	const handleSearch = (e) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create movie',
		() => MovieService.create(),
		{
			onError: (error) => {
				toastError(error, 'Create movie')
			},
			onSuccess: ({ data: _id }) => {
				toastr.success('Фильм жасау', 'жаңа фильм қосылды')
				push(getAdminUrl(`movie/edit/${_id}`))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId) => MovieService.delete(movieId),
		{
			onError: (error) => {
				toastError(error, 'Delete movie')
			},
			onSuccess: () => {
				toastr.success('Фильмді жою', 'жою сәтті аяқталды')
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
