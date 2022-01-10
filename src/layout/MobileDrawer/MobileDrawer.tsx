import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import routes from '@constants/routes'
import { HEAD_TITLE } from '@constants/seo'
import socialAccounts from '@constants/socialAccounts'

export function MobileDrawer(): JSX.Element {
  const { isOpen, onClose, onToggle } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Box bottom={0} d={{ md: 'none' }} p={5} pos="fixed" right={0} zIndex={1}>
        <IconButton
          aria-label="Open menu"
          colorScheme="red"
          icon={<Icon as={isOpen ? FaTimes : FaBars} />}
          isRound
          onClick={onToggle}
          ref={btnRef}
          size="lg"
        />
      </Box>

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader p={8}>
              <NextLink href="/">
                <Link href="/" onClick={onClose} variant="link">
                  {HEAD_TITLE}
                </Link>
              </NextLink>
            </DrawerHeader>

            <DrawerBody as={Stack} fontSize="lg" justify="center" p={8} spacing={4}>
              {routes.map(({ text, href, isExternal = false }) => (
                <React.Fragment key={href}>
                  {isExternal ? (
                    <Link href={href} isExternal onClick={onClose}>
                      {text}
                    </Link>
                  ) : (
                    <NextLink href={href} key={href}>
                      <Link href={href} onClick={onClose}>
                        {text}
                      </Link>
                    </NextLink>
                  )}
                </React.Fragment>
              ))}
            </DrawerBody>

            <DrawerFooter justifyContent="flex-start" px={4} py={8}>
              {socialAccounts.map((socialAccount, index) => (
                <IconButton
                  as="a"
                  aria-label={socialAccount.href}
                  color="currentColor"
                  href={socialAccount.href}
                  icon={<Icon as={socialAccount.icon} boxSize={6} />}
                  key={String(index)}
                  size="lg"
                  variant="link"
                />
              ))}
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
