import { gql } from '@apollo/client';

export const ALL_BOOKS = gql`
  query allBooks {
    allBooks{
      id
      title
      genre_id
      publisher_date
      Author {
        first_name
        last_name
      }
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $genre_id: ID!, $author_id: ID!, $publisher_date: String!){
    createBook(title: $title, genre_id: $genre_id, author_id: $author_id, publisher_date: $publisher_date){
      id
      title
      publisher_date,
      Author{
        id
      }
      Genre {
        id
      }
    }
  }
`

export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!){
    removeBook(id: $id){
      id
      title
    }
  }
`