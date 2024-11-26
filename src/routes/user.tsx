import { UserInputForm } from '@/components/User/UserInputForm';
import { createFileRoute } from '@tanstack/react-router';
import { FC } from 'react';

export const Route = createFileRoute('/user')({
  component: () => <UserPage />,
});

const UserPage: FC = () => {
  return (
    <>
      <UserInputForm />
      <div></div>
    </>
  );
};
