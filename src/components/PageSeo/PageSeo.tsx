import Head from 'next/head'

import { HEAD_TITLE } from '@constants/seo'

type PageSeoProps = {
  title: string
  description: string
  url: string
  image?: string
  type?: 'article' | 'website'
}

export function PageSeo({ title, description = 'personal website', type = 'website', image, url }: PageSeoProps) {
  return (
    <Head>
      <title>{`${HEAD_TITLE} | ${title}`}</title>
      <meta property="title" content={`${HEAD_TITLE} | ${title}`} key="title" />
      <meta name="description" content={description} key="description" />
      <meta name="author" content="Enes Esen" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Enes Esen's Website" />
      <meta property="og:title" content={`${HEAD_TITLE} | ${title}`} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:type" content={type} key="og:type" />
      <meta property="og:url" content={url} key="og:url" />
      {image ? <meta property="og:image" content={image} key="og:image" /> : undefined}

      <meta property="twitter:title" content={`${HEAD_TITLE} | ${title}`} key="twitter:title" />
      <meta property="twitter:description" content={description} key="twitter:description" />
      <meta name="twitter:creator" content="Enes Esen" />
      <meta property="twitter:url" content={url} key="twitter:url" />
      {image ? <meta property="twitter:image" content={image} key="twitter:image" /> : undefined}
    </Head>
  )
}
