import { Flex, Heading } from '@chakra-ui/react'

type SectionTitleProps = {
	title: string
}
export function SectionTitle({ title }: SectionTitleProps): JSX.Element {
	return (
		<Flex justify='space-between' my={4} borderBottomWidth={2}>
			<Heading size='lg' fontWeight='normal'>
				{title}
			</Heading>
		</Flex>
	)
}
