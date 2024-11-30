import { User } from '@/models/types';
import { createContext, useContext } from 'react';

export const UserContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return user;
};
