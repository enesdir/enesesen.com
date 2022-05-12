import { Image, Text, VStack } from '@chakra-ui/react'

export default function Project() {
  return (
    <VStack spacing={8} align="left">
      <VStack mx="auto" textAlign="center">
        <Image src="/images/no-items.svg" alt="No projects found!" width="240px" height="240px" />
        <Text>No projects found!</Text>
      </VStack>
    </VStack>
  )
}
