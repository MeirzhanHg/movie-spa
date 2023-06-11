import { useCallback, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

import { FileService } from '../../../../services/file.service'

import { toastError } from '../../../../utils/toast-error'


export const useUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		'upload file',
		(data) => FileService.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data[0].url)
			},
			onError: (error) => {
				toastError(error, 'Upload image')
			},
		}
	)

	const uploadFile = useCallback(
		async (e) => {
			setIsLoading(true)

			const files = e.target.files
			if (!files?.length) return

			const formData = new FormData()
			formData.append('image', files[0])

			await mutateAsync(formData)

			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		},
		[mutateAsync]
	)

	return useMemo(
		() => ({
			uploadFile,
			isLoading,
		}),
		[uploadFile, isLoading]
	)
}
