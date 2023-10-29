import { gql } from '@apollo/client';


const GET_BOOKS_NAME = gql`
  query MinhaQuery {
    favoriteBooks {
      name
    }
  }
`;

const GET_ALL_BOOKS_DATA = gql`
  {
    favoriteBooks {
      name
      description
      author {
        id
        name
      }
      category
      cover
    }
  }
`;

export { GET_BOOKS_NAME, GET_ALL_BOOKS_DATA };