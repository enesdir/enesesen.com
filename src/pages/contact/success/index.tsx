import { PageSeo } from '@/components/PageSeo';
import { ContactSuccess } from '@/features/ContactSection';

function ContactSuccessPage() {
  return (
    <>
      <PageSeo
        templateTitle="Contact Success"
        description="For more information about Enes Esen please feel free to reach out through the social media links or contact form."
      />
      <ContactSuccess />
    </>
  );
}

export default ContactSuccessPage;
