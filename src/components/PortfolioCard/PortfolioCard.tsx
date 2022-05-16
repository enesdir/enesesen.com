import { Box, Text, VStack, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'

import { MotionBox } from '@components/MotionBox/MotionBox'
import { PortfolioType } from '@interfaces/PortfolioType'

import { CardHeader } from './CardHeader'
import { TechnologiesNode } from './TechnologiesNode'

type PortfolioCardProps = {
  portfolio: PortfolioType
}

export function PortfolioCard({ portfolio }: PortfolioCardProps) {
  const { colorMode } = useColorMode()
  const cardBgColor = { light: 'white', dark: 'gray.900' }
  const cardColor = { light: 'gray.900', dark: 'white' }

  return (
    <MotionBox
      bg={cardBgColor[colorMode]}
      color={cardColor[colorMode]}
      borderRadius="2xl"
      px={6}
      py={4}
      minH={40}
      border="1px solid"
      borderColor="grey.300"
      boxShadow="dark-sm"
      position="relative"
      whileHover={{ scale: 1.06 }}
    >
      <CardHeader portfolio={portfolio} />
      {portfolio.imageUrl && (
        <Box
          w={[284, 340, 360, 'sm']}
          h={[284, 340, 360, 'sm']}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          display="block"
          mb="4em"
          position="relative"
        >
          <Image src={portfolio.imageUrl} alt={`${portfolio.name} image`} layout="fill" objectFit="fill" />
        </Box>
      )}
      <VStack alignItems="left" bottom={4} left={6} right={6} position="absolute">
        <Text fontWeight="medium" noOfLines={1}>
          {portfolio.description}
        </Text>
        <TechnologiesNode technologies={portfolio.technologies} />
      </VStack>
    </MotionBox>
  )
}
