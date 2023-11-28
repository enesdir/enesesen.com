import { ContactPage } from '@/features/LandingPages'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'For more information about Enes Esen please feel free to reach out through the social media links or contact form.',
}

export default function Contact() {
	return <ContactPage />
}
