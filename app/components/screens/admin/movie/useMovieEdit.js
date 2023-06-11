import { getAdminUrl } from '../../../../config/url.config'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { MovieService } from '../../../../services/movie.service'

import { getKeys } from '../../../../utils/object/getKeys'
import { toastError } from '../../../../utils/toast-error'


export const useMovieEdit = (setValue) => {
	const { push, query } = useRouter()

	const movieId = String(query.id)

	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.getById(movieId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},

			onError: (error) => {
				toastError(error, 'Get movie')
			},

			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update movie',
		(data) => MovieService.update(movieId, data),
		{
			onError: (error) => {
				toastError(error, 'Update movie')
			},

			onSuccess() {
				toastr.success('Фильмді жаңарту', 'жаңарту сәтті өтті')
				push(getAdminUrl('movies'))
			},
		}
	)

	const onSubmit = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
