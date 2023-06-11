export const getMovieUrl = (slug) => `/movie/${slug}`
export const getGenreUrl = (slug) => `/genre/${slug}`
export const getActorUrl = (slug) => `/actor/${slug}`

export const getAdminUrl = (url) => `/manage/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)