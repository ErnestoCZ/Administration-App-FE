import { UserSelect } from '@/components/User/UserSelect';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: () => (
    <>
      <UserSelect />
    </>
  ),
});
