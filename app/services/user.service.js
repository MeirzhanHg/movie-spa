import axios from '../api/interceptors'
import { getUsersUrl } from '../config/api.config'

export const UserService = {
	async getAll(searchTerm) {
		return axios.get(getUsersUrl(''), {
			params: searchTerm
				? {
					searchTerm,
				}
				: {},
		})
	},

	async getProfile() {
		return axios.get(getUsersUrl('/profile'))
	},

	async getFavorites() {
		return axios.get(getUsersUrl('/profile/favorites'))
	},

	async toggleFavorite(movieId) {
		return axios.put(getUsersUrl('/profile/favorites'), { movieId })
	},

	async updateProfile(data) {
		return axios.put(getUsersUrl('/profile'), data)
	},

	async deleteUser(_id) {
		return axios.delete(getUsersUrl(`/${_id}`))
	},

	async getById(_id) {
		return axios.get(getUsersUrl(`/${_id}`))
	},

	async update(_id, data) {
		return axios.put(getUsersUrl(`/${_id}`), data)
	},
}
