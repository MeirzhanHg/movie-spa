import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { RatingService } from '../../../../services/rating.service'

import { toastError } from '../../../../utils/toast-error'
import { useAuth } from '../../../../hooks/useAuth'

export const useRateMovie = (movieId) => {
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)
	const { user } = useAuth()

	const { refetch } = useQuery(
		['your movie rating', movieId],
		() => RatingService.getByUserMovie(movieId),
		{
			onSuccess: ({ data }) => {
				setRating(data)
			},

			onError: (error) => {
				toastError(error, 'Get movie')
			},

			enabled: !!movieId && !!user,
		}
	)

	const { mutateAsync } = useMutation(
		'set rating movie',
		({ value }) => RatingService.setRating(movieId, value),
		{
			onError: (error) => {
				toastError(error, 'Rate movie')
			},

			onSuccess() {
				setIsSended(true)
				refetch()

				setTimeout(() => {
					setIsSended(false)
				}, 2400)
			},
		}
	)

	const handleClick = async (nextValue) => {
		setRating(nextValue)

		await mutateAsync({ value: nextValue })
	}

	return {
		isSended,
		rating,
		handleClick,
	}
}
