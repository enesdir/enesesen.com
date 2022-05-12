import { SimpleGrid, Button, Center, Box, Input, Text, useColorMode, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'

import { PortfolioCard } from '@components/PortfolioCard'
import { PortfolioType } from '@interfaces/PortfolioType'

type PortfolioProps = {
  portfolio: PortfolioType[]
}

export default function Portfolio({ portfolio = [] }: PortfolioProps) {
  const { colorMode } = useColorMode()
  const cardBgColor = { light: 'white', dark: 'gray.900' }
  const cardColor = { light: 'gray.900', dark: 'white' }
  const [searchQuery, setSearchQuery] = useState('')
  const sortedPortfolio = portfolio.filter((work: PortfolioType) =>
    work.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const searchNode = () => (
    <Box pt={5}>
      <Input
        bg={cardBgColor[colorMode]}
        color={cardColor[colorMode]}
        value={searchQuery}
        onChange={(e: FormEvent<HTMLInputElement>) => setSearchQuery(e.currentTarget.value)}
        placeholder="Search for an project"
      />
    </Box>
  )
  const footerNode = () => (
    <Center mt={5}>
      <Button
        size="lg"
        _hover={{}}
        _active={{}}
        _focus={{}}
        borderColor="green.custom"
        color="green.custom"
        variant="outline"
        onClick={() => window.open('https://github.com/codenuru', '_blank')}
      >
        More on GitHub
      </Button>
    </Center>
  )
  const projectsNode = () => {
    if (!sortedPortfolio.length) {
      return (
        <VStack mx="auto" textAlign="center">
          <Image src="/images/no-items.svg" alt="No projects found!" width="240px" height="240px" />
          <Text>No projects found!</Text>
        </VStack>
      )
    }

    return (
      <SimpleGrid columns={[1, null, 2]} spacing={5} mt={5} gap={8}>
        {sortedPortfolio.map((work: PortfolioType, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <PortfolioCard portfolio={work} key={index} />
        ))}
        {footerNode()}
      </SimpleGrid>
    )
  }

  return (
    <VStack spacing={8} align="left">
      {searchNode()}
      {projectsNode()}
    </VStack>
  )
}
