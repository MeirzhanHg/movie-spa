import { useEffect } from 'react'
import { useMutation } from 'react-query'

import { MovieService } from '../../../services/movie.service'

export const useUpdateCountOpened = (slug) => {
	const { mutateAsync } = useMutation('update count opened', () =>
		MovieService.updateCountOpened(slug)
	)

	useEffect(() => {
		mutateAsync()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}
