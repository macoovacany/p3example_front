import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($name: String!, $description: String, $dependencies: [String]) {
    addTask(name: $name, description: $description, dependencies: $dependencies) {
      _id
    }
  }
`;

// export const ADD_TASK = gql``;
// export const COMPLETE_TASK = gql``;
// export const REMOVE_TASK = gql``;
// export const UPDATE_TASK = gql``;
