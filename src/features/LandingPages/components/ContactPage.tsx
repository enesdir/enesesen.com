'use client'

import { Fade, Stack } from '@chakra-ui/react'

import { AboutSection } from '@/features/AboutSection'
import { WidgetContainer } from '@/features/Calendly'
import { ContactSection } from '@/features/ContactSection'

export const ContactPage = () => {
	return (
		<>
			<Fade in transition={{ enter: { duration: 1.2 } }}>
				<Stack direction={['column', 'row']} spacing='1em'>
					<div>
						<AboutSection />
						<ContactSection />
					</div>
					<WidgetContainer />
				</Stack>
			</Fade>
		</>
	)
}
