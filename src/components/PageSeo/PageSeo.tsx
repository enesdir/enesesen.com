import Head from 'next/head'

import { TRenderProps } from '@typings/commonPropTypes'

interface PageSeoProps extends TRenderProps {
  title: string
  description: string
  url: string
  image?: string
  type?: 'article' | 'website'
}

export function PageSeo({ title, description, type, image, url, children }: PageSeoProps): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta property="title" content={title} key="title" />
      <meta name="description" content={description} key="description" />
      <meta name="author" content="Enes Esen" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Enes Esen's Website" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:type" content={type} key="og:type" />
      <meta property="og:url" content={url} key="og:url" />
      {image ? <meta property="og:image" content={image} key="og:image" /> : undefined}

      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta property="twitter:description" content={description} key="twitter:description" />
      <meta name="twitter:creator" content="Enes Esen" />
      <meta property="twitter:url" content={url} key="twitter:url" />
      {image ? <meta property="twitter:image" content={image} key="twitter:image" /> : undefined}

      {children}
    </Head>
  )
}
