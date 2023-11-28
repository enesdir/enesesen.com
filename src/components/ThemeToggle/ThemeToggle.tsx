import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

import type { IconButtonProps } from '@chakra-ui/react'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ThemeToggle = (props: ColorModeSwitcherProps) => {
	const { toggleColorMode } = useColorMode()
	const text = useColorModeValue('dark', 'light')
	const SwitchIcon = useColorModeValue(FaMoon, FiSun)
	return (
		<IconButton
			onClick={toggleColorMode}
			variant='ghost'
			size='lg'
			isRound
			icon={<SwitchIcon />}
			_hover={{ color: 'primary.hover' }}
			aria-label={`Switch to ${text} mode`}
			{...props}
		/>
	)
}
