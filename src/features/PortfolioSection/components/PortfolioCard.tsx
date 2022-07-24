import { AspectRatio, Text, useColorMode, VStack } from '@chakra-ui/react';

import { Image } from '@/components/ImageNext/ImageNext';
import { MotionBox } from '@/components/MotionBox/MotionBox';

import { CardHeader } from './CardHeader';
import { TechnologiesNode } from './TechnologiesNode';
import { PortfolioType } from '../types/PortfolioType';

type PortfolioCardProps = {
  portfolio: PortfolioType;
};

export function PortfolioCard({ portfolio }: PortfolioCardProps) {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: 'white', dark: 'gray.900' };
  const cardColor = { light: 'gray.900', dark: 'white' };

  return (
    <MotionBox
      bg={cardBgColor[colorMode]}
      color={cardColor[colorMode]}
      borderRadius="2xl"
      p={4}
      borderWidth="1px"
      minH={40}
      w="full"
      h="full"
      border="1px solid"
      borderColor="grey.300"
      boxShadow="dark-sm"
      position="relative"
      whileHover={{ scale: 1.06 }}
    >
      <CardHeader portfolio={portfolio} />
      {portfolio.imageUrl && (
        <AspectRatio
          minH={80}
          ratio={14 / 16}
          position="relative"
          shadow="lg"
          overflow="hidden"
          rounded="lg"
          display="block"
          mb="4em"
        >
          <Image src={portfolio.imageUrl} alt={`${portfolio.name} image`} layout="fill" objectFit="fill" />
        </AspectRatio>
      )}
      <VStack alignItems="left" bottom={4} left={6} right={6} position="absolute">
        <Text fontWeight="medium" noOfLines={1}>
          {portfolio.description}
        </Text>
        <TechnologiesNode technologies={portfolio.technologies} />
      </VStack>
    </MotionBox>
  );
}
