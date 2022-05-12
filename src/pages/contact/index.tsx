import { Fade } from '@chakra-ui/react'

import { AboutSection } from '@components/About/AboutSection'
import ContactSection from '@components/ContactSection'
import { PageSeo } from '@components/PageSeo'

function ContactPage() {
  return (
    <>
      <PageSeo
        title="Contact"
        description="For more information about Enes Esen please feel free to reach out through the social media links or contact form."
        url="https://enesesen.com/contact"
      />
      <Fade in transition={{ enter: { duration: 1.2 } }}>
        <AboutSection />
        <ContactSection />
      </Fade>
    </>
  )
}

export default ContactPage
