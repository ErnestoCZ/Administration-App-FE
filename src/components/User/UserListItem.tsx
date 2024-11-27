import { FC } from 'react';
import { ContentBox, FlexBox } from '../styles/Box.styled';
import { User } from '@/models/types';

interface UserListItemProps {
  user: User;
}

export const UserListItem: FC<UserListItemProps> = ({ user }) => {
  return (
    <FlexBox $direction={'row'}>
      <ContentBox>
        {user.firstName} {user.lastName}
      </ContentBox>
    </FlexBox>
  );
};
