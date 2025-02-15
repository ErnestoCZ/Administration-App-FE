import { graphql } from '../generated/gql';

export const GET_USERS = graphql(`
  query GetUsers {
    users {
      id
      firstName
      lastName
    }
  }
`);

export const SAVE_USER = graphql(`
  mutation createUser($userData: NewUserInput!) {
    createUser(userData: $userData) {
      firstName
      lastName
      id
    }
  }
`);
