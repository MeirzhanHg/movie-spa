import { getAdminHomeUrl, getAdminUrl } from '../../../config/url.config'

export const navItems = [
	{
		title: 'Статистика',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Қолданушылар',
		link: getAdminUrl('users'),
	},
	{
		title: 'Фильмдер',
		link: getAdminUrl('movies'),
	},
	{
		title: 'Актерлар',
		link: getAdminUrl('actors'),
	},
	{
		title: 'Жанрлар',
		link: getAdminUrl('genres'),
	},
]
