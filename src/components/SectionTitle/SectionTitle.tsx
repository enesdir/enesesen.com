import { Flex, Heading } from '@chakra-ui/react'

import type { FC } from 'react'

type SectionTitleProps = {
	title: string
}
export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
	return (
		<Flex justify='space-between' my={4} borderBottomWidth={2}>
			<Heading size='lg' fontWeight='normal'>
				{title}
			</Heading>
		</Flex>
	)
}
