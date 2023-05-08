import { Box } from '@chakra-ui/react';

import { SectionTitle } from '@/components/SectionTitle';

import { CalendlyWidget } from './CalendlyWidget';

export const WidgetContainer = () => {
  return (
    <>
      <SectionTitle title="Book a Call" />
      <Box as="div" pt="8px" pb="16px">
        <CalendlyWidget />
      </Box>
    </>
  );
};
