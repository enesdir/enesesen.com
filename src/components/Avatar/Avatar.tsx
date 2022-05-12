import { IconButton, chakra } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export function Avatar(): JSX.Element {
  return (
    <Link href="/" passHref>
      <IconButton
        as={chakra.a}
        isRound
        bgColor="transparent"
        aria-label="Homepage navigation button"
        _hover={{ backgroundColor: 'transparent' }}
      >
        <Image
          width={32}
          height={32}
          alt="Enes ESEN profile image"
          src="/images/enes.jpg"
          style={{ borderRadius: '50%' }}
        />
      </IconButton>
    </Link>
  )
}
