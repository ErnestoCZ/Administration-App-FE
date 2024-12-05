import { FC } from 'react';
import { User } from '@/models/types';
import { Stack } from '../Stack';
import { styled } from 'styled-components';

const StyledUserListItem = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};

  width: 100%;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  opacity: 0.8;
  margin-top: 1vh;
  padding: 1vh;
`;

interface UserListItemProps {
  user: User;
}

export const UserListItem: FC<UserListItemProps> = ({ user }) => {
  return (
    <StyledUserListItem>
      <Stack
        direction={'row'}
        gap={'10px'}
        alignItems={'center'}
        justyfyContent="flex-start"
      >
        {user.firstName} {user.lastName}
      </Stack>
    </StyledUserListItem>
  );
};
