import { extendTheme } from '@chakra-ui/react'

import { components } from './components'
import { config } from './config'
import { fonts } from './fonts'
import { styles } from './styles'

export const theme = extendTheme({
	config,
	styles,
	colors: {
		primary: {
			light: '#3182ce',
			dark: '#90cdf4',
			hover: '#ff5757',
		},
	},
	components,
	fonts,
})
