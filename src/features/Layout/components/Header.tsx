'use client'

import { Flex } from '@chakra-ui/react'

import { Avatar } from '@/components/Avatar/Avatar'
import { Container } from '@/components/Container'
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'
import routes from '@/features/Layout/constants/routes'
import { NavButton } from './NavButton'

export const Header = () => {
	const desktopRoutes = routes?.filter((route) => route.isDesktop === true)
	return (
		<Flex
			as='header'
			alignItems='center'
			w='100%'
			h='64px'
			_dark={{ bg: 'gray.800', borderBottomColor: 'gray.700' }}
			bg='gray.50'
			display={['none', 'flex']}
			pos='fixed'
			borderBottomWidth='2px'
			borderBottomColor='gray.100'
			shadow='0 0 10px 0 rgba(0,0,0, 0.035);'
			zIndex='overlay'
		>
			<Container>
				<Flex justify='space-between' alignItems='center'>
					<Avatar />
					<Flex as='nav' ml='16px'>
						{desktopRoutes.map((route, index) => (
							<NavButton key={String(index)} text={route.text} href={route.href} />
						))}
					</Flex>
					<ThemeToggle />
				</Flex>
			</Container>
		</Flex>
	)
}
