import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';

import '@/styles/global.css';

import { ThemeProvider } from '@/contexts/ThemeProvider';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Viewport } from '@/components/Viewport';
import { Layout } from '@/features/Layout';
export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}
function App({ Component, pageProps }: AppRenderProps) {
  return (
    <ThemeProvider cookies={pageProps.cookies}>
      <ErrorBoundary>
        <Viewport>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Viewport>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
export { getServerSideProps } from '@/contexts/ThemeProvider';
export default App;
