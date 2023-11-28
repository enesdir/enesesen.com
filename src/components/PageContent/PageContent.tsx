/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react'
import { Container, Flex, Spinner } from '@chakra-ui/react'

import type { PropsWithChildren } from 'react'

type PageContentProps = PropsWithChildren & {
	isLoading: boolean
}

export function PageContent({ children, isLoading }: PageContentProps) {
	const [renderAfterDelay, setRenderAfterDelay] = useState(true)

	useEffect(() => {
		if (isLoading) {
			setTimeout(() => {
				setRenderAfterDelay(true)
			}, 1000)
		}
		return () => {
			setRenderAfterDelay(false)
		}
	}, [isLoading])
	return (
		<>
			{!isLoading ? (
				children
			) : (
				<Container>
					{renderAfterDelay && (
						<Flex justify='center' my='40px'>
							<Spinner size='lg' label='Loading Spinner' speed='0.65s' />
						</Flex>
					)}
				</Container>
			)}
		</>
	)
}
