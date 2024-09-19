import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/billings')({
  component: () => <div>Hello /billings!</div>,
})
