import { Tag, TagLabel } from '@chakra-ui/react'

type TechnologiesNodeProps = {
	technology: string
}

export function TechnologiesNode({ technology }: TechnologiesNodeProps) {
	return (
		<Tag size={['sm', 'md', 'lg']}>
			<TagLabel noOfLines={1}>{technology}</TagLabel>
		</Tag>
	)
}
