import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      tasks {
        _id
        name
        completed
      }
    }
  }
`;

export const QUERY_TASKS = gql`
  query getTasks {
    tasks {
      name
      description
      completed
      dependencies {
        _id
        name
        description
        completed
        dependencies {
          _id
          name
        }
      }
    }
  }
`;

export const QUERY_USER_TASKS = gql`
  query getUserTasks {
    user {
      _id
      firstName
      lastName
      email
    }
    tasks {
      _id
      name
      description
      completed
      dependencies {
        _id
        name
        completed
      }
    }
  }
`;
