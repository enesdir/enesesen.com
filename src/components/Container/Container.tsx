import { Box } from '@chakra-ui/react'

import { TRenderProps } from '@/types/commonPropTypes'

export function Container({ children }: TRenderProps): JSX.Element {
	return (
		<Box w='960px' maxW='100%' px={['16px', '32px']} pt={['8px', '0']} mx='auto' transition='.5s'>
			{children}
		</Box>
	)
}
