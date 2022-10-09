import { Suspense } from 'react';

import { ThemeProvider } from '@/contexts/ThemeProvider';

import type { TRenderProps } from '@/types/commonPropTypes';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import MobileNav from './MobileNav';

const Layout = ({ children }: TRenderProps) => {
  return (
    <ThemeProvider>
      <Suspense fallback="Loading...">
        <Header />
        <Content>
          {children}
          <Footer />
        </Content>
        <MobileNav />
      </Suspense>
    </ThemeProvider>
  );
};

export default Layout;