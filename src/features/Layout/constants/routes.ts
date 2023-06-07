import { FaCode, FaHome, FaUser } from 'react-icons/fa'
import { MdTimeline } from 'react-icons/md'

import type { mobileRoutesType } from '../types/mobileRoutes'

const routes: mobileRoutesType[] = [
	{
		text: 'Home',
		href: '/',
		isDesktop: false,
		icon: FaHome,
	},
	{
		text: 'Portfolio',
		href: '/portfolio',
		isDesktop: true,
		icon: MdTimeline,
	},
	{
		text: 'Projects',
		href: '/projects',
		isDesktop: true,
		icon: FaCode,
	},
	{
		text: 'Contact',
		href: '/contact',
		isDesktop: true,
		icon: FaUser,
	},
]

export default routes
