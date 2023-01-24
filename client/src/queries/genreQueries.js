import { gql } from '@apollo/client';

export const ALL_GENRES = gql`
  query allGenres {
    allGenres{
      id
      name
    }
  }
`;