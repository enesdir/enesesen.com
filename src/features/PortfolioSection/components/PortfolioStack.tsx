import { Box, Input, SimpleGrid, Text, useColorMode, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FormEvent, useState } from 'react';
import { IoLogoGithub } from 'react-icons/io';

Link;
import Link from 'next/link';

import { NextButtonLink } from '@/components/NextButtonLink';
import { PortfolioCard } from '@/features/PortfolioSection/components/PortfolioCard';

import { PortfolioType } from '../types/PortfolioType';

type PortfolioProps = {
  portfolio: PortfolioType[];
};

export default function Portfolio({ portfolio = [] }: PortfolioProps) {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: 'white', dark: 'gray.900' };
  const cardColor = { light: 'gray.900', dark: 'white' };
  const [searchQuery, setSearchQuery] = useState('');
  const sortedPortfolio = portfolio.filter((work: PortfolioType) =>
    work.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const searchNode = () => (
    <Box pt={5} w="full">
      <Input
        bg={cardBgColor[colorMode]}
        color={cardColor[colorMode]}
        value={searchQuery}
        onChange={(e: FormEvent<HTMLInputElement>) => setSearchQuery(e.currentTarget.value)}
        placeholder="Search for an project"
        w="full"
      />
    </Box>
  );
  const footerNode = () => (
    <>
      <NextButtonLink
        target="_blank"
        size="lg"
        variant="outline"
        href="https://github.com/codenuru"
        leftIcon={<IoLogoGithub />}
      >
        More on GitHub
      </NextButtonLink>
    </>
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
      <SimpleGrid w="full" h="full" columns={[1, 1, 2, 2]} gap={8}>
        {sortedPortfolio.map((work: PortfolioType, index: number) => (
          <PortfolioCard portfolio={work} key={index} />
        ))}
      </SimpleGrid>
    );
  };

  return (
    <VStack spacing={8}>
      {searchNode()}
      {projectsNode()}
      {sortedPortfolio.length && footerNode()}
    </VStack>
  );
}
