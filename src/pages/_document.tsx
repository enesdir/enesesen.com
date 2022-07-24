import { ColorModeScript } from '@chakra-ui/react';
import type { DocumentContext } from 'next/document';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head />
        <body>
          <ColorModeScript initialColorMode="system" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
