import { Icon, MenuItem, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import type { mobileRoutesType } from '../types/mobileRoutes'

export const MobileNavItem = ({ icon, href, text }: mobileRoutesType) => {
	const primaryColor = useColorModeValue('primary.light', 'primary.dark')
	const pathname = usePathname()
	const isCurrentRoute = pathname === href
	return (
		<MenuItem
			as={NextLink}
			href={href}
			icon={<Icon as={icon} />}
			color={isCurrentRoute ? primaryColor : 'default'}
			aria-label={`${text} Link Button`}
		>
			{text}
		</MenuItem>
	)
}
