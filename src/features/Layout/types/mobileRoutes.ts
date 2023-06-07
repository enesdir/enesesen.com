import type { IconType } from 'react-icons/lib'

import type { routesType } from './routes'

export type mobileRoutesType = routesType & {
	icon: IconType
}
