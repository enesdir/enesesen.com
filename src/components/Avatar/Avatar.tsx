import { chakra, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export function Avatar(): JSX.Element {
  return (
    <Link href="/" passHref>
      <IconButton
        as={chakra.a}
        isRound
        bgColor="transparent"
        width={10}
        height={10}
        position="relative"
        aria-label="Homepage navigation button"
        _hover={{ backgroundColor: 'transparent' }}
      >
        <Image
          priority
          layout="fill"
          alt="Enes ESEN profile image"
          src="/images/enes.jpg"
          style={{ borderRadius: '50%' }}
        />
      </IconButton>
    </Link>
  );
}
