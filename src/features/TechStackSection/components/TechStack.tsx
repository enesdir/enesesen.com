import { SimpleGrid } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import techStackItems from '../constants/techStackitems';

const TechStackSection = dynamic(() => import('./TechStackSection'), {
  suspense: true,
});
const TechStack = () => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={6}>
      <Suspense fallback="Loading..">
        {techStackItems.map((techStackItem, index) => (
          // https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
          <TechStackSection
            key={String(index)}
            title={techStackItem.title}
            stackitems={techStackItem.stackSectionItems}
          />
        ))}
      </Suspense>
    </SimpleGrid>
  );
};
export default TechStack;
