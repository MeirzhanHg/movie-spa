import { useQuery } from 'react-query'

import { UserService } from '../../../services/user.service'
import { useAuth } from '../../../hooks/useAuth'

export const useFavorites = () => {
	const { user } = useAuth()
	const {
		isLoading,
		data: favoriteMovies,
		refetch,
	} = useQuery('Favorite movies', () => UserService.getFavorites(), {
		select: ({ data }) => {
			return data
		},
		enabled: !!user
	})

	return {
		isLoading,
		favoriteMovies,
		refetch,
	}
}
