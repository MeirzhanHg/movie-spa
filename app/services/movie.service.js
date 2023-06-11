import axios, { axiosClassic } from '../api/interceptors'
import { getMoviesUrl } from '../config/api.config'

export const MovieService = {
	async getBySlug(slug) {
		return axiosClassic.get(getMoviesUrl(`/by-slug/${slug}`))
	},

	async getByActor(actorId) {
		return axiosClassic.get(getMoviesUrl(`/by-actor/${actorId}`))
	},

	async getByGenres(genreIds) {
		return axiosClassic.post(getMoviesUrl(`/by-genres`), {
			genreIds,
		})
	},

	async create() {
		return axios.post(getMoviesUrl(''))
	},

	async updateCountOpened(slug) {
		return axiosClassic.put(getMoviesUrl('/update-count-opened'), {
			slug,
		})
	},

	async update(_id, data) {
		return axios.put(getMoviesUrl(`/${_id}`), data)
	},

	async delete(_id) {
		return axios.delete(getMoviesUrl(`/${_id}`))
	},

	async getAll(searchTerm) {
		return axiosClassic.get(getMoviesUrl(''), {
			params: searchTerm
				? {
					searchTerm,
				}
				: {},
		})
	},

	async getById(_id) {
		return axios.get(getMoviesUrl(`/${_id}`))
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get(
			getMoviesUrl('/most-popular')
		)

		return movies
	},
}
