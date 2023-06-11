import { useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '../../../../hooks/useDebounce'

import { MovieService } from '../../../../services/movie.service.js'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	// isSuccess - поиск сәттіі болғанда данныйларды көрсету үшін!
	const { isSuccess, data } = useQuery(
		['search movie list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) => data,
			// enabled - пайдаланушы іздеу өрісіне мәлімет енгізген жағдайда жүзеге асады!
			enabled: !!debouncedSearch,
		}
	)

	const handleSearch = (e) => {
		setSearchTerm(e.target.value)
	}

	return { isSuccess, handleSearch, data, searchTerm }
}
