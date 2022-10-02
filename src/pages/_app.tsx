import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';

import '@/styles/global.css';

import { Layout } from '@/features/Layout';
export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}
function App({ Component, pageProps }: AppRenderProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
