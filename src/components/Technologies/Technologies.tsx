import { SimpleGrid } from '@chakra-ui/react'

import { TechnologiesNode } from './TechnologiesNode'

type TechnologiesNodeProps = {
	technologies: string[]
}

export function Technologies({ technologies }: TechnologiesNodeProps) {
	return (
		<SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={[2, 4]}>
			{technologies.map((technology: string, index: number) => (
				<TechnologiesNode key={String(index)} technology={technology} />
			))}
		</SimpleGrid>
	)
}
