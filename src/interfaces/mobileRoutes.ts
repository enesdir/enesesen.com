import { IconType } from 'react-icons/lib'

import { routesType } from './routes'

export type mobileRoutesType = routesType & {
  icon: IconType
}
