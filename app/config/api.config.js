export const API_URL = `${process.env.APP_URL}/api`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getAuthUrl = (string) => `/auth${string}`
export const getUsersUrl = (string) => `/users${string}`
export const getMoviesUrl = (string) => `/movies${string}`
export const getGenresUrl = (string) => `/genres${string}`
export const getActorsUrl = (string) => `/actors${string}`
export const getRatingsUrl = (string) => `/ratings${string}`
