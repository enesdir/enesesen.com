import { usePathname } from 'next/navigation'

import { NextButtonLink } from '@/components/NextButtonLink'

import type { navButtonType } from '../types/navButton'

export const NavButton = ({ text, href }: navButtonType) => {
	const pathname = usePathname()
	const isLast = pathname === href

	return (
		<NextButtonLink
			href={href}
			isActive={isLast}
			aria-label={`${text} Link Button`}
			mx='4px'
			minW='80px'
			variant='ghost'
			_active={{ color: 'primary.hover' }}
			_hover={{ color: 'primary.hover' }}
		>
			{text}
		</NextButtonLink>
	)
}
