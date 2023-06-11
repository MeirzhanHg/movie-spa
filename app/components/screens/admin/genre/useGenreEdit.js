import { getAdminUrl } from '../../../../config/url.config'
import { useRouter } from 'next/router'

import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { GenreService } from '../../../../services/genre.service'

import { getKeys } from '../../../../utils/object/getKeys'
import { toastError } from '../../../../utils/toast-error'

export const useGenreEdit = (setValue) => {
	const { push, query } = useRouter()

	const genreId = String(query.id)

	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})

				setValue('name', data.name)
			},

			onError: (error) => {
				toastError(error, 'Get genre')
			},

			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update genre',
		(data) => GenreService.update(genreId, data),
		{
			onError: (error) => {
				toastError(error, 'Жанрды жаңарту')
			},

			onSuccess() {
				toastr.success('Жанрды жаңарту', 'сәтті орындалды')
				push(getAdminUrl('genres'))
			},
		}
	)

	const onSubmit = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
