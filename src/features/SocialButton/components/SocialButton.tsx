import { Icon, Link, Tooltip, useColorModeValue } from '@chakra-ui/react'

import type { socialAccountsType } from '../types/socialButton'

export const SocialButton = ({ text, icon, href, ariaLabel }: socialAccountsType) => {
	const color = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Tooltip label={text} placement='bottom'>
			<Link href={href} aria-label={ariaLabel} target='_blank'>
				<Icon as={icon} mx='4px' size='4em' color={color} _hover={{ color: 'primary.hover' }} />
			</Link>
		</Tooltip>
	)
}
