import { TRenderProps } from '@/types/commonPropTypes';

import Content from './Content';
import Footer from './Footer';
import { Header } from './Header';
import { MobileNav } from './MobileNav';

export const Layout = ({ children }: TRenderProps) => {
  return (
    <>
      <Header />
      <Content>
        {children}
        <Footer />
      </Content>
      <MobileNav />
    </>
  );
};
