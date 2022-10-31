import { ThemeProvider } from '@/contexts/ThemeProvider';

import type { TRenderProps } from '@/types/commonPropTypes';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import MobileNav from './MobileNav';

const Layout = ({ children }: TRenderProps) => {
  return (
    <ThemeProvider>
      <Header />
      <Content>
        {children}
        <Footer />
      </Content>
      <MobileNav />
    </ThemeProvider>
  );
};

export default Layout;
