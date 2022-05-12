import { SectionTitle } from '@components/SectionTitle'

import { Form } from './Form'
import { OtherContactMethods } from './Other'

function ContactSection() {
  return (
    <>
      <SectionTitle title="Get In Touch" />
      <Form />
      <OtherContactMethods />
    </>
  )
}

export default ContactSection
