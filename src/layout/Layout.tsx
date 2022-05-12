/* eslint-disable react/jsx-no-useless-fragment */
import { TRenderProps } from '@typings/commonPropTypes'

import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileNav } from './MobileNav'

export function Layout({ children }: TRenderProps): JSX.Element {
  return <>{children}</>
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
Layout.MobileNav = MobileNav
