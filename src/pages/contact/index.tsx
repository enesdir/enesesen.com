import { Fade, Stack } from '@chakra-ui/react';

import { PageSeo } from '@/components/PageSeo';
import { AboutSection } from '@/features/AboutSection';
import { WidgetContainer } from '@/features/Calendly';
import { ContactSection } from '@/features/ContactSection';

function ContactPage() {
  return (
    <>
      <PageSeo
        templateTitle="Contact"
        description="For more information about Enes Esen please feel free to reach out through the social media links or contact form."
      />
      <Fade in transition={{ enter: { duration: 1.2 } }}>
        <Stack direction={['column', 'row']} spacing="1.5em">
          <div>
            <AboutSection />
            <ContactSection />
          </div>
          <WidgetContainer />
        </Stack>
      </Fade>
    </>
  );
}

export default ContactPage;
