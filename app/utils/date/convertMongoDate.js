export const convertMongoDate = (date) => {
	return new Date(date).toLocaleDateString('ru')
}
