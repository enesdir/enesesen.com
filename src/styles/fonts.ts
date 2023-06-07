import type { DeepPartial, Theme } from '@chakra-ui/react'
import { Figtree } from 'next/font/google'

const figTree = Figtree({
	weight: ['400', '700'],
	subsets: ['latin'],
	fallback: ['system-ui', 'sans-serif'],
})
export const fonts: DeepPartial<Theme['fonts']> = {
	heading: figTree.style.fontFamily,
	body: figTree.style.fontFamily,
}
