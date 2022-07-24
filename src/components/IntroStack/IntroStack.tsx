import { Flex } from '@chakra-ui/react';

import introTiles from '@/constants/introTiles';

import { IntroTile } from './IntroTile';

export function IntroStack() {
  return (
    <Flex flexDir={['column', 'row']} justify="space-between" mb="16px">
      {introTiles.map((introTile, index) => (
        <IntroTile key={String(index)} title={introTile.title} icon={introTile.icon} desc={introTile.desc} />
      ))}
    </Flex>
  );
}
