import { useQuery } from 'react-query'

import { GenreService } from '../../../../services/genre.service'

import { toastError } from '../../../../utils/toast-error'

export const useAdminGenre = () => {
	const queryData = useQuery('List of genre', () => GenreService.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre) => ({
					label: genre.name,
					value: genre._id,
				})
			),

		onError: (error) => {
			toastError(error, 'Actor list')
		},
	})

	return queryData
}
