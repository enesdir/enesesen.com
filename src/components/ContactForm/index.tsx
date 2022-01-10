import { PageSeo } from '@components/PageSeo'
import { HEAD_TITLE } from '@constants/seo'
import { TRenderProps } from '@typings/commonPropTypes'

import { Form } from './Form'
import { OtherContactMethods } from './Other'

function Contact({ children }: TRenderProps): JSX.Element {
  return (
    <>
      <PageSeo
        title={`${HEAD_TITLE} | Contact`}
        description="For more information about Enes Esen please feel free to reach out through the social media links or contact form."
        url="https://enesesen.com/contact"
      />
      {children}
    </>
  )
}

Contact.Form = Form
Contact.Other = OtherContactMethods

export default Contact
