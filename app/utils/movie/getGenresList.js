export const getGenresListEach = (index, length, name) => (index + 1 === length ? name : name + ', ')


export const getGenresList = (array) =>
	array.map((i) => i.name).join(', ')
