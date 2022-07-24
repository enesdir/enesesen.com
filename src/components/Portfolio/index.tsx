import { HEAD_TITLE } from '@/constants/seo';

import { PageSeo } from '@/components/PageSeo';

import { TRenderProps } from '@/typings/commonPropTypes';

import PortfolioStack from './PortfolioStack';

export function Portfolio({ children }: TRenderProps) {
  return (
    <>
      <PageSeo title={`${HEAD_TITLE} | Portfolio`} description="Projects that i made" url="https://enesesen.com" />
      {children}
    </>
  );
}

Portfolio.PortfolioStack = PortfolioStack;
