import { SimpleGrid } from '@chakra-ui/react';

import TechStackSection from './TechStackSection';
import techStackItems from '../constants/techStackitems';

const TechStack = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={6}>
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
};
export default TechStack;
