import { SectionTitle } from '@/components/SectionTitle'
import { Form } from './Form'
import { OtherContactMethods } from './Other'

export const ContactSection = () => {
	return (
		<>
			<SectionTitle title='Get In Touch' />
			<Form />
			<OtherContactMethods />
		</>
	)
}
