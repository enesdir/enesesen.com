import { Flex, Heading } from '@chakra-ui/react';

import type { TRenderProps } from '@/types/commonPropTypes';

type SectionTitleProps = TRenderProps & {
  title: string;
};
export function SectionTitle({ title, children }: SectionTitleProps): JSX.Element {
  return (
    <Flex justify="space-between" my={4} borderBottomWidth={2}>
      <Heading size="lg" fontWeight="normal">
        {title}
      </Heading>
      {children}
    </Flex>
  );
}
