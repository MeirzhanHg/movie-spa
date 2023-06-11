import { getAdminUrl } from '../../../../config/url.config'
import { useRouter } from 'next/router'

import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ActorService } from '../../../../services/actor.service'

import { getKeys } from '../../../../utils/object/getKeys'
import { toastError } from '../../../../utils/toast-error'


export const useActorEdit = (setValue) => {
	const { push, query } = useRouter()

	const actorId = String(query.id)

	const { isLoading } = useQuery(
		['actor', actorId],
		() => ActorService.getById(actorId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})

				setValue('name', data.name)
			},

			onError: (error) => {
				toastError(error, 'Get actor')
			},

			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update actor',
		(data) => ActorService.update(actorId, data),
		{
			onError: (error) => {
				toastError(error, 'Жаңа актер')
			},

			onSuccess() {
				toastr.success('Жаңа актер', 'сәтті орындалды')
				push(getAdminUrl('actors'))
			},
		}
	)

	const onSubmit = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
