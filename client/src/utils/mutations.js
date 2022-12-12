import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
              _id
              first_name
              last_name
              email
              password
          }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($first_name: String!, $last_name: String!, $email: String!, $password: String!) {
        addUser(first_name: $first_name, last_name: $last_name, email: $email, password: $password) {
          token
          user {
              _id
              first_name
              last_name
              email
              password
          }
        }
    }
`;