/* eslint-disable react/jsx-no-useless-fragment */
import { Flex, Spinner } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

import { TRenderProps } from '@typings/commonPropTypes'

interface PageContentProps extends TRenderProps {
  isLoading: boolean
}

export function PageContent({ children, isLoading }: PageContentProps): JSX.Element {
  const [renderAfterDelay, setRenderAfterDelay] = useState(true)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setRenderAfterDelay(true)
      }, 1000)
    }
    return () => {
      setRenderAfterDelay(false)
    }
  }, [isLoading])
  return (
    <>
      {!isLoading ? (
        children
      ) : (
        <>
          {renderAfterDelay && (
            <Flex justify="center" my="40px">
              <Spinner size="lg" label="Loading Spinner" speed="0.65s" />
            </Flex>
          )}
        </>
      )}
    </>
  )
}
