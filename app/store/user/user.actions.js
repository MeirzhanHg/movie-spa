import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from '../../api/api.helpers'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '../../services/auth/auth.service'

import { toastError } from '../../utils/toast-error'


export const register = createAsyncThunk(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Жүйеге тіркелу', 'Сәтті аяқталды')
			return response.data
		} catch (error) {
			toastError('Сіз бұрын соңды жүйеге тіркелгенсіз', 'Қате')
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Жүйеге кіру', 'Сәтті аяқталды')
			return response.data
		} catch (error) {
			toastError('Пайдаланушы табылмады! Жүйеге тіркеліңіз.', 'Қате')
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()

			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Шығу',
					'Авторизацияңыз аяқталды, жүйеге қайта кіріңіз'
				)

				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
