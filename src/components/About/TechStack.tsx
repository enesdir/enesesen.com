import { Box } from '@chakra-ui/react'

import TechStackSection from '@components/TechStackSection'
import techStackItems from '@constants/techStackitems'

export const TechStack = () => (
  <Box py={['8px', '16px']}>
    {techStackItems.map((techStackItem, index) => (
      // https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
      <TechStackSection key={String(index)} title={techStackItem.title} stackitems={techStackItem.stackSectionItems} />
    ))}
  </Box>
)
