import type { IconType } from 'react-icons/lib'

import type { RoutesType } from '@/features/Layout/'

export type SocialAccountsType = RoutesType & {
	ariaLabel?: string
	icon?: IconType
}
