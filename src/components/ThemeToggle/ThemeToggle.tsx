import { useColorMode, IconButton } from '@chakra-ui/react'
import { FaMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

export function ThemeToggle(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      size="lg"
      isRound
      icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
      _hover={{ color: 'primary.hover' }}
      aria-label="Dark & light mode toggle button"
    />
  )
}
