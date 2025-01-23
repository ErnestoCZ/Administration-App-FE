import { useMutation, useQuery } from '@apollo/client';
import { graphql } from '../generated/gql';
import { CreateUserDocument, GetUsersDocument } from '@/generated/graphql';

export const useUsers = () => {
  const { data, loading, error } = useQuery(GetUsersDocument, {
    fetchPolicy: 'cache-and-network',
  });
  return { users: data?.users, loading, error: Boolean(error) };
};

export const useNewUser = () => {
  const mutation = useMutation(CreateUserDocument);
  return mutation;
};

export const users = graphql(`
  query GetUsers {
    users {
      id
      firstName
      lastName
    }
  }
  mutation createUser($userData: NewUserInput!) {
    createUser(userData: $userData) {
      firstName
      lastName
      email
    }
  }
`);
