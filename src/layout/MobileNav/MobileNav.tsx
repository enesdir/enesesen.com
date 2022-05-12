import { Flex, IconButton, Menu, MenuButton, MenuDivider, MenuList, useColorModeValue } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import { Avatar } from '@components/Avatar/Avatar'
import { SocialButton } from '@components/SocialButton'
import { ThemeToggle } from '@components/ThemeToggle/ThemeToggle'
import routes from '@constants/routes'
import socialAccounts from '@constants/socialAccounts'

import MobileNavItem from './MobileNavItem'

export function MobileNav() {
  return (
    <Flex
      as="footer"
      display={['flex', 'none']}
      w="calc(100% - 32px)"
      h="64px"
      basis="auto"
      pos="fixed"
      bottom={0}
      right={0}
      left={0}
      m="16px"
      bg={useColorModeValue('white', 'gray.800')}
      borderWidth="2px"
      borderTopColor={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="16px"
      zIndex="overlay"
      data-id="mobile-nav"
    >
      <Flex align="center" justify="center" w="33%">
        <ThemeToggle />
      </Flex>
      <Flex align="center" justify="center" w="33%">
        <Avatar />
      </Flex>
      <Flex as="nav" align="center" justify="center" w="33%">
        <Menu placement="auto">
          <MenuButton
            as={IconButton}
            icon={<FiMenu />}
            variant="ghost"
            size="lg"
            isRound
            aria-label="Mobile Navigation Menu"
          />
          <MenuList>
            <Flex justify="space-between" mx="2">
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
            <MenuDivider />
            {routes.map((route, index) => (
              <MobileNavItem key={String(index)} text={route.text} href={route.href} icon={route.icon} />
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}
