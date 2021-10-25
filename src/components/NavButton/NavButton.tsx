import { Button, Link, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { NextButtonLink } from '@components/NextButtonLink'
import { navButtonType } from '@interfaces/navButton'

function NavButton({ text, href }: navButtonType): JSX.Element {
  const color = useColorModeValue('primary.light', 'primary.dark')
  const { asPath } = useRouter()
  const isLast = asPath === href

  return (
    <NextButtonLink
      href={href}
      isActive={isLast}
      aria-label={`${text} Link Button`}
      mx="4px"
      minW="80px"
      variant="ghost"
      _active={{ color: 'primary.hover' }}
      _hover={{ color: 'primary.hover' }}
    >
      {text}
    </NextButtonLink>
  )
}
export default NavButton
