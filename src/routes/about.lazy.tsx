import { createLazyFileRoute } from '@tanstack/react-router'
import { DeleteButton } from '../components/styles/Button.styled'

export const Route = createLazyFileRoute('/about')({
  component: () => 
    <>
      <h1>About</h1>
    </>,
})
