import { Box, Icon, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';

import type { TechStackIconType } from '../types/techStackIconItem';

const TechStackIcon = ({ size, icon, iconName }: TechStackIconType) => {
  const color = useColorModeValue('primary.light', 'primary.dark');
  const iconSize = size || '2em';
  return (
    <Tooltip label={iconName} placement="bottom" aria-label={iconName}>
      <Box as="span">
        <Icon as={icon} color={color} fontSize={iconSize} _hover={{ color: 'primary.hover' }} aria-label={iconName} />
        <Text fontWeight="medium" size={['xs', 'sm', 'md']}>
          {iconName}
        </Text>
      </Box>
    </Tooltip>
  );
};

export default TechStackIcon;
