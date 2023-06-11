import axios from '../api/interceptors'
import { getRatingsUrl } from '../config/api.config'

export const RatingService = {
	async setRating(movieId, value) {
		return axios.post(getRatingsUrl('/set-rating'), {
			movieId,
			value,
		})
	},

	async getByUserMovie(movieId) {
		return axios.get(getRatingsUrl(`/${movieId}`))
	},
}
