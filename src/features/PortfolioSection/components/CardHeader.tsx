import { Box, chakra, Flex, IconButton, Text, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { IoMdOpen } from 'react-icons/io';
import { SiGit } from 'react-icons/si';

import { PortfolioType } from '@/interfaces/PortfolioType';

type CardHeaderProps = {
  portfolio: Pick<PortfolioType, 'title' | 'url' | 'demoUrl'>;
};

export function CardHeader({ portfolio }: CardHeaderProps) {
  return (
    <Flex justifyContent="space-between" mb={2}>
      <Text color="slate.lighter" fontSize="xl" fontWeight="bold">
        {portfolio.title}
      </Text>
      <Box>
        <Tooltip label="Open Repository Link" shouldWrapChildren>
          <Link href={portfolio.url} passHref>
            <IconButton
              as={chakra.a}
              target="_blank"
              variant="link"
              aria-label="Open Repository link"
              icon={<SiGit size={30} />}
            />
          </Link>
        </Tooltip>
        <Tooltip label="Open Website" shouldWrapChildren>
          <Link href={portfolio.demoUrl} passHref>
            <IconButton
              as={chakra.a}
              target="_blank"
              variant="link"
              aria-label="Open website"
              icon={<IoMdOpen size={30} />}
            />
          </Link>
        </Tooltip>
      </Box>
    </Flex>
  );
}
