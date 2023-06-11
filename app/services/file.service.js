import axios from '../api/interceptors'

export const FileService = {
	async upload(file, folder) {
		return axios.post('/files', file, {
			params: {
				folder,
			},
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
}
