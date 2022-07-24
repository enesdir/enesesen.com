import { Box } from '@chakra-ui/react';

import { Container } from '@/components/Container';

import type { TRenderProps } from '@/types/commonPropTypes';

const Content = ({ children }: TRenderProps) => {
  return (
    <Box as="main" pt={['0', '72px']} pb={['80px', '0']}>
      <Container>{children}</Container>
    </Box>
  );
};
export default Content;
