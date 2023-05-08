import { Icon, MenuItem, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import type { mobileRoutesType } from '../types/mobileRoutes';

const MobileNavItem = ({ icon, href, text }: mobileRoutesType) => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const { asPath } = useRouter();
  const isCurrentRoute = asPath === href;
  return (
    <MenuItem
      as={NextLink}
      href={href}
      icon={<Icon as={icon} />}
      color={isCurrentRoute ? primaryColor : 'default'}
      aria-label={`${text} Link Button`}
    >
      {text}
    </MenuItem>
  );
};
export default MobileNavItem;
