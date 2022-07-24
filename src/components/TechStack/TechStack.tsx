import { SimpleGrid } from '@chakra-ui/react';

import techStackItems from '@/constants/techStackitems';

import { TechStackSection } from '@/components/TechStack/TechStackSection';

export function TechStack() {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing="10px">
      {techStackItems.map((techStackItem, index) => (
        // https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
        <TechStackSection
          key={String(index)}
          title={techStackItem.title}
          stackitems={techStackItem.stackSectionItems}
        />
      ))}
    </SimpleGrid>
  );
}
