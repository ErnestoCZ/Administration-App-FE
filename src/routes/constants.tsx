import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/constants')({
  component: () => <div>Hello /constants!</div>,
})
