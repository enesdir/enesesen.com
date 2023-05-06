import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error }: FallbackProps) => {
  const errorModal = useDisclosure();
  return (
    <Box p="4" m="auto">
      <Alert status="error" borderRadius="md">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>An unexpected error has occurred.</AlertTitle>
          <AlertDescription display="block" lineHeight="1.4">
            <Button
              variant="link"
              size="sm"
              textDecoration="underline"
              onClick={errorModal.onOpen}
              color="red.800"
              _dark={{ color: 'red.100' }}
            >
              Show Details
            </Button>
            <Modal isOpen={errorModal.isOpen} onClose={errorModal.onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>An unexpected error has occurred.</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box fontFamily="monospace">{error.message}</Box>
                </ModalBody>
              </ModalContent>
            </Modal>
          </AlertDescription>
        </Box>
      </Alert>
    </Box>
  );
};

export const ErrorBoundary: FC<React.PropsWithChildren<unknown>> = (props) => {
  return <ReactErrorBoundary FallbackComponent={ErrorFallback} {...props} />;
};
