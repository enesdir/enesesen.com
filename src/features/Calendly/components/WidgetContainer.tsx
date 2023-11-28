import { Box } from '@chakra-ui/react'

import { SectionTitle } from '@/components/SectionTitle'
import { CalendlyWidget } from './CalendlyWidget'

export const WidgetContainer = () => {
	return (
		<>
			<Box>
				<SectionTitle title='Book a Call' />
				<CalendlyWidget />
			</Box>
		</>
	)
}
