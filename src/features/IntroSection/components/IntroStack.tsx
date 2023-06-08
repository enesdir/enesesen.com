import { SimpleGrid } from '@chakra-ui/react'

import { IntroTile } from './IntroTile'
import introTiles from '../constants/introTiles'

export const IntroStack = () => {
	return (
		<SimpleGrid columns={[1, 3]} spacing={4}>
			{introTiles.map((introTile, index) => (
				<IntroTile key={String(index)} title={introTile.title} icon={introTile.icon} desc={introTile.desc} />
			))}
		</SimpleGrid>
	)
}
