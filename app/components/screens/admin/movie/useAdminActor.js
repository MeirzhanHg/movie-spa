import { useQuery } from 'react-query'

import { ActorService } from '../../../../services/actor.service'

import { toastError } from '../../../../utils/toast-error'

export const useAdminActor = () => {
	const queryData = useQuery('List of actor', () => ActorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(actor) => ({
					label: actor.name,
					value: actor._id,
				})
			),

		onError: (error) => {
			toastError(error, 'Actor list')
		},
	})

	return queryData
}
