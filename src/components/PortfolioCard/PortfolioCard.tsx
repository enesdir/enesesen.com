import { Box, Text, Flex, Icon, IconButton, useColorMode, Tag, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { IoLogoGithub, IoMdOpen } from 'react-icons/io'
import { MdFolderOpen } from 'react-icons/md'

import { IPortfolio } from '@interfaces/githubProject'

type Props = {
  portfolio: IPortfolio
}

export function PortfolioCard({ portfolio }: Props) {
  const { colorMode } = useColorMode()
  const cardBgColor = { light: 'white', dark: 'gray.900' }
  const cardColor = { light: 'gray.900', dark: 'white' }
  const openLinkInNewTab = useCallback((url: string) => {
    window.open(url, '_blank')
  }, [])
  const technologiesNode = () => (
    <HStack spacing={4}>
      {portfolio.technologies.map((technology: string, index: number) => (
        <Tag key={String(index)}>{technology}</Tag>
      ))}
    </HStack>
  )

  return (
    <Box
      bg={cardBgColor[colorMode]}
      color={cardColor[colorMode]}
      borderRadius="md"
      px={5}
      pt={5}
      pb="60px"
      position="relative"
    >
      <Flex justifyContent="space-between">
        <Icon color="green.custom" as={MdFolderOpen} boxSize={8} />{' '}
        <Text color="slate.lighter" fontSize="xl" fontWeight="bold" mt={0}>
          {portfolio.title}
        </Text>
        <Box>
          <IconButton
            variant="link"
            _hover={{
              color: 'green.custom',
            }}
            _focus={{
              borderColor: 'transparent',
            }}
            aria-label="Open github link"
            icon={<IoLogoGithub size={30} />}
            onClick={() => openLinkInNewTab(portfolio.url)}
          />
          <IconButton
            variant="link"
            _hover={{
              color: 'green.custom',
            }}
            _focus={{
              borderColor: 'transparent',
            }}
            aria-label="Open website"
            icon={<IoMdOpen size={30} />}
            onClick={() => openLinkInNewTab(portfolio.demoUrl)}
          />
        </Box>
      </Flex>

      {portfolio.imageUrl && (
        <Image src={portfolio.imageUrl} alt="pixel" width="400em" height="500em" layout="responsive" />
      )}
      <Text fontWeight="medium" mt={3}>
        {portfolio.description}
      </Text>
      <Flex alignItems="center" position="absolute" mt={3} bottom={5}>
        <Text fontWeight="medium">{portfolio.name}</Text>
        {technologiesNode()}
      </Flex>
    </Box>
  )
}
