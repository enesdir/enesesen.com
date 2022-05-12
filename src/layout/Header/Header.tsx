import { Flex, useColorModeValue } from '@chakra-ui/react'

import { Avatar } from '@components/Avatar/Avatar'
import { Container } from '@components/Container'
import { NavButton } from '@components/NavButton'
import { ThemeToggle } from '@components/ThemeToggle/ThemeToggle'
import routes from '@constants/routes'

export function Header(): JSX.Element {
  const desktopRoutes = routes?.filter((route) => route.isDesktop === true)
  return (
    <Flex
      as="header"
      alignItems="center"
      w="100%"
      h="64px"
      bg={useColorModeValue('gray.50', 'gray.800')}
      display={['none', 'flex']}
      pos="fixed"
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
      zIndex="overlay"
    >
      <Container>
        <Flex justify="space-between" alignItems="center">
          <Avatar />
          <Flex as="nav" ml="16px">
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
