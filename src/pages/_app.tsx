import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import '@/styles/global.css';

import { ThemeProvider } from '@/contexts/ThemeProvider';

import { PageContent } from '@/components/PageContent';

import { Layout } from '@/layout';

function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true));
    router.events.on('routeChangeComplete', () => setIsLoading(false));
    router.events.on('routeChangeError', () => setIsLoading(false));
  }, [router.events]);

  return (
    <ThemeProvider>
      <Layout>
        <Layout.Header />
        <Layout.Content>
          <PageContent isLoading={isLoading}>
            <Component {...pageProps} />
            <Layout.Footer />
          </PageContent>
        </Layout.Content>
        <Layout.MobileNav />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
