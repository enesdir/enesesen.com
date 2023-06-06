import type { IconType } from 'react-icons/lib';

import type { routesType } from '@/features/Layout/';

export type socialAccountsType = routesType & {
  ariaLabel?: string;
  icon?: IconType;
};
