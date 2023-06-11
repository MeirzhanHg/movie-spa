import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { UserService } from '../../../services/user.service'

import { toastError } from '../../../utils/toast-error'


export const useProfile = (setValue) => {
	const { isLoading } = useQuery('profile', () => UserService.getProfile(), {
		onSuccess: ({ data }) => {
			setValue('email', data.email)
		},

		onError: (error) => {
			toastError(error, 'Профиль алу')
		},
	})

	const { mutateAsync } = useMutation(
		'update profile',
		(data) => UserService.updateProfile(data),
		{
			onError: (error) => {
				toastError(error, 'Профильді жаңарту')
			},

			onSuccess() {
				toastr.success('Профильді жаңарту', 'жаңарту сәтті өтті')
			},
		}
	)

	const onSubmit = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
