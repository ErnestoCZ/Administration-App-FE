import { Center, Spinner } from '@chakra-ui/react'
import { FC } from 'react'

export const LoaderComponent : FC = () => {
  return (
    <Center>
      <Spinner size={'xl'}/>
    </Center>
  )
}

