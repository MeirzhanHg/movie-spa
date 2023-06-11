import { getContentType } from '../../api/api.helpers'
import { axiosClassic } from '../../api/interceptors'
import { API_URL, getAuthUrl } from '../../config/api.config'
import Cookies from 'js-cookie'

import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async register(email, password) {
		const response = await axiosClassic.post(
			`${API_URL}${getAuthUrl('/register')}`,
			{ email, password }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},

	async login(email, password) {
		const response = await axiosClassic.post(
			`${API_URL}${getAuthUrl('/login')}`,
			{ email, password }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},

	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosClassic.post(
			getAuthUrl('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},
}
