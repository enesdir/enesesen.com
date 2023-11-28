'use client'

import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileNav } from './MobileNav'

import type { PropsWithChildren } from 'react'

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
