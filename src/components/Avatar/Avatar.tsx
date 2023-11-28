import Image from 'next/image'
import Link from 'next/link'
import { IconButton } from '@chakra-ui/react'

import profilePic from '~/public/images/enes.jpg'

export function Avatar(): JSX.Element {
	return (
		<Link href='/' passHref legacyBehavior>
			<IconButton
				as='a'
				isRound
				bgColor='transparent'
				width={10}
				height={10}
				position='relative'
				aria-label='Homepage navigation button'
				_hover={{ backgroundColor: 'transparent' }}
			>
				<Image priority alt='Enes ESEN profile image' src={profilePic} style={{ borderRadius: '50%' }} />
			</IconButton>
		</Link>
	)
}
