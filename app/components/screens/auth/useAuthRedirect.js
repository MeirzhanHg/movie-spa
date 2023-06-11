import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '../../../hooks/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { query, push } = useRouter()

	// Бағдарламада тек тіркелген пайдаланушыға рұқсат етілетін бетке, 
	// пайдаланушы тіркелместен өткен жағдайда, тіркелу батырмасын басу арқылы жүйеге тіркеліп болғаннан кейін,
	// сол бастапқыда пайдаланушының кірген бетіне қайта бағыттау орындалады.

	const redirect = query.redirect ? String(query.redirect) : '/'

	useEffect(() => {
		if (user) {
			push(redirect)
		}
	}, [user, redirect, push])
}

// ?redirect