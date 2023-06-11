import { errorCatch } from '../api/api.helpers'
import { toastr } from 'react-redux-toastr'

export const toastError = (error, title) => {
	const message = errorCatch(error)
	toastr.error(title || 'Error request', message)
	throw message
}
