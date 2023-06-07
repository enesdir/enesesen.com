import { Box } from '@chakra-ui/react'

import { env } from '@/env.mjs'

const CALENDLY_URL = env.NEXT_PUBLIC_CALENDLY_URL
// import Head from 'next/head';
export const CalendlyWidget = () => {
	return (
		<Box
			maxWidth={575}
			minWidth={400}
			minH={600}
			height={600}
			opacity={1}
			transform='translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)'
			transform-style='preverse-3d'
		>
			<iframe
				width='100%'
				height='100%'
				frameBorder='0'
				title='Calendly Scheduling Page'
				src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`}
			></iframe>
		</Box>
	)
}
