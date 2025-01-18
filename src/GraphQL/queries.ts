import { useQuery } from '@apollo/client';
import { graphql } from '../generated/gql';

export const useUsers = () => {
  const { data, loading, error } = useQuery(users, {
    fetchPolicy: 'cache-and-network',
  });
  return { users: data?.users, loading, error: Boolean(error) };
};

export const users = graphql(`
  query GetUsers {
    users {
      id
      firstName
      lastName
    }
  }
`);
