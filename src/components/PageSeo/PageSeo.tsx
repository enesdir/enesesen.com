import Head from 'next/head';
import { useRouter } from 'next/router';

export enum PageTypes {
  website = 'website',
  article = 'article',
}

type PageSeoProps = {
  title?: string;
  siteName?: string;
  description?: string;
  url?: string;
  type?: PageTypes;
  robots?: string;
  image?: string;
  date?: string;
  templateTitle?: string;
};

const defaultMeta = {
  title: 'Enes ESEN',
  siteName: 'EnesESEN',
  description:
    'Enes ESEN is a software developer eager to learn, share, and teach web development along with turning ideas into applications.',
  url: 'https://enesesen.com',
  type: 'website',
  robots: 'follow, index',
  image: 'https://res.cloudinary.com/enesesen/image/upload/v1658665747/banners/enesesen-banner_zf1tct.png',
};

export function PageSeo(props: PageSeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;
  return (
    <Head>
      <title>{meta.title}</title>

      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@codenuru" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta name="publish_date" property="og:publish_date" content={meta.date} />
          <meta name="author" property="article:author" content="Enes ESEN" />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'shortcut icon',
    href: '/favicon/favicon.ico',
  },
  {
    rel: 'manifest',
    href: '/favicon/site.webmanifest',
  },
];
