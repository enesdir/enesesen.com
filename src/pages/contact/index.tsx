import Contact from '@components/ContactForm'
import PageTitle from '@components/PageTitle'

const ContactPage = () => (
  <Contact>
    <PageTitle title="Get In Touch" />
    <Contact.Form />
    <Contact.Other />
  </Contact>
)

export default ContactPage
