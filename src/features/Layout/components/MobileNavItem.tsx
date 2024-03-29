import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon, MenuItem, useColorModeValue } from '@chakra-ui/react'

import type { MobileRoutesType } from '../types/MobileRoutesType'

export const MobileNavItem = ({ icon, href, text }: MobileRoutesType) => {
	const primaryColor = useColorModeValue('primary.light', 'primary.dark')
	const pathname = usePathname()
	const isCurrentRoute = pathname === href
	return (
		<MenuItem
			as={NextLink}
			// @ts-expect-error:todo
			href={href}
			icon={<Icon as={icon} />}
			color={isCurrentRoute ? primaryColor : 'default'}
			aria-label={`${text} Link Button`}
		>
			{text}
		</MenuItem>
	)
}
