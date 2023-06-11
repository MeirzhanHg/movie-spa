import axios, { axiosClassic } from '../api/interceptors'

import { getGenresUrl } from '../config/api.config'

export const GenreService = {
	async getBySlug(slug) {
		return axiosClassic.get(getGenresUrl(`/by-slug/${slug}`))
	},

	async create() {
		return axios.post(getGenresUrl(''))
	},

	async update(_id, data) {
		return axios.put(getGenresUrl(`/${_id}`), data)
	},

	async delete(_id) {
		return axios.delete(getGenresUrl(`/${_id}`))
	},

	async getAll(searchTerm) {
		return axiosClassic.get(getGenresUrl(''), {
			params: searchTerm
				? {
					searchTerm,
				}
				: {},
		})
	},

	async getCollections() {
		return axiosClassic.get(getGenresUrl('/collections'))
	},

	async getById(_id) {
		return axios.get(getGenresUrl(`/${_id}`))
	},

	async getPopularGenres() {
		return axiosClassic.get(getGenresUrl(`/popular`))
	},
}
