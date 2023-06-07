'use client'
import { Box, Flex, Icon, Link } from '@chakra-ui/react'
import { FaSignature } from 'react-icons/fa'

import { Container } from '@/components/Container'
import { socialAccounts, SocialButton } from '@/features/SocialButton'

export const Footer = () => {
	return (
		<Flex as='footer' my='16px' display={['none', 'flex']}>
			<Container>
				<Flex justify='space-between' align='center'>
					<Flex align='center'>
						<Icon as={FaSignature} mr='8px' color='red.500' />
						<Box as='span' fontSize='sm'>
							coded by
							<Link href='https://github.com/enesdir/enesesen.com' isExternal pl='4px'>
								enes esen
							</Link>
						</Box>
					</Flex>
					<Flex>
						{socialAccounts.map((socialAccount, index) => (
							<SocialButton
								key={String(index)}
								text={socialAccount.text}
								icon={socialAccount.icon}
								ariaLabel={socialAccount.ariaLabel}
								href={socialAccount.href}
							/>
						))}
					</Flex>
				</Flex>
			</Container>
		</Flex>
	)
}
