import { Button } from '@/components/Button';
import { useUsers } from '@/hooks/useUsers';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/test')({
  component: () => <TestPage />,
});

export const TestPage = () => {
  const { isLoading, data: users } = useUsers();

  return (
    <div>
      <Button>Useless button</Button>
      {isLoading
        ? 'Loading users'
        : users?.map((user) => <div>{user.firstName}</div>)}
    </div>
  );
};
