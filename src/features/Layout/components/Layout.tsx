'use client'

import type { PropsWithChildren } from 'react'

import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileNav } from './MobileNav'

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<Content>
				{children}
				<Footer />
			</Content>
			<MobileNav />
		</>
	)
}
