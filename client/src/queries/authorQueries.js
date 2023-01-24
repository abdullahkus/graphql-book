import { gql } from '@apollo/client';

export const ALL_AUTHORS = gql`
  query allAuthors {
    allAuthors{
      id
      first_name
      last_name
    }
  }
`;