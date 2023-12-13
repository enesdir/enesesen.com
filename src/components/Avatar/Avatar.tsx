import Image from 'next/image'
import Link from 'next/link'
import { IconButton } from '@chakra-ui/react'

import { appConfig } from '@/constants/appConfig'

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
				<Image
					alt={`${appConfig.avatar.name}' profile image'`}
					src={appConfig.avatar.image}
					quality={100}
					loading='lazy'
					fill
					sizes='100vw'
					style={{
						objectFit: 'cover',
						borderRadius: '50%',
					}}
				/>
			</IconButton>
		</Link>
	)
}
