import { Button, Flex, useColorMode, useColorModeValue, Avatar } from '@chakra-ui/react'
import Link from 'next/link'
import { FaMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

import { Container } from '@components/Container'
import { NavButton } from '@components/NavButton'
import routes from '@constants/routes'

export function Header(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode()

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
          <Link href="/">
            <Flex as="a" align="center" cursor="pointer">
              <Avatar size="sm" name="Enes ESEN" src="/images/enes.jpg" />
            </Flex>
          </Link>
          <Flex as="nav" ml="16px">
            {routes.map((route, index) => (
              <NavButton key={String(index)} text={route.text} href={route.href} />
            ))}
          </Flex>
          <Button onClick={toggleColorMode} variant="ghost" _hover={{ color: 'primary.hover' }}>
            {colorMode === 'light' ? <FaMoon /> : <FiSun />}
          </Button>
        </Flex>
      </Container>
    </Flex>
  )
}
