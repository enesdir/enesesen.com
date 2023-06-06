import { ColorModeScript } from '@chakra-ui/react';
import type { DocumentContext } from 'next/document';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

import { Meta } from '@/components/PageSeo/';

import { theme } from '@/styles/theme';

export default class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <Meta />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
