import { FaGithub, FaLinkedin } from 'react-icons/fa'

import type { SocialAccountsType } from '../types/SocialButtonType'

export const socialAccounts: SocialAccountsType[] = [
	{
		text: 'Github',
		href: 'https://github.com/enesdir',
		icon: FaGithub,
		ariaLabel: 'Github Profile Link Button',
	},
	{
		text: 'LinkedIn',
		href: 'https://www.linkedin.com/in/enesen/',
		icon: FaLinkedin,
		ariaLabel: 'LinkedIn Profile Link Button',
	},
]
