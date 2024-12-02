import { FC } from 'react';
import { User } from '@/models/types';
import { Stack } from '../Stack';
import { styled } from 'styled-components';
import { Button } from '../Button';

const StyledUserListItem = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface UserListItemProps {
  user: User;
}

export const UserListItem: FC<UserListItemProps> = ({ user }) => {
  return (
    <Stack direction={'row'}>
      <StyledUserListItem>
        {user.firstName} {user.lastName}
        <Button style={'delete'}>Delete</Button>
        <Button style={'secondary'}>Edit</Button>
      </StyledUserListItem>
    </Stack>
  );
};
