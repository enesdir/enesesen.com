import { Box, Input, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FormEvent, useState } from 'react';
import { IoLogoGithub } from 'react-icons/io';

import { NextButtonLink } from '@/components/NextButtonLink';
import { PortfolioCard } from '@/features/PortfolioSection/components/PortfolioCard';

import { PortfolioType } from '../types/PortfolioType';

type PortfolioProps = {
  portfolio: PortfolioType[];
};

export function PortfolioStack({ portfolio = [] }: PortfolioProps) {
  const cardBgColor = useColorModeValue('white', 'gray.900');
  const cardColor = useColorModeValue('gray.900', 'white');
  const [searchQuery, setSearchQuery] = useState('');
  const sortedPortfolio = portfolio.filter((work: PortfolioType) =>
    work.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const searchNode = () => (
    <Box pt={4} w="full">
      <Input
        bg={cardBgColor}
        color={cardColor}
        value={searchQuery}
        onChange={(e: FormEvent<HTMLInputElement>) => setSearchQuery(e.currentTarget.value)}
        placeholder="Search for an project"
        w="full"
      />
    </Box>
  );
  const footerNode = () => (
    <NextButtonLink
      target="_blank"
      size="lg"
      variant="outline"
      href="https://github.com/codenuru"
      leftIcon={<IoLogoGithub />}
    >
      More on GitHub
    </NextButtonLink>
  );
  const projectsNode = () => {
    if (!sortedPortfolio.length) {
      return (
        <VStack mx="auto" textAlign="center">
          <Image src="/images/no-items.svg" alt="No projects found!" width="240px" height="240px" />
          <Text>No projects found!</Text>
        </VStack>
      );
    }

    return (
      <>
        <SimpleGrid columns={[1, 2]} gap={8}>
          {sortedPortfolio.map((work: PortfolioType, index: number) => (
            <PortfolioCard portfolio={work} key={index} />
          ))}
        </SimpleGrid>
        {footerNode()}
      </>
    );
  };

  return (
    <VStack spacing={8}>
      {searchNode()}
      {projectsNode()}
    </VStack>
  );
}
