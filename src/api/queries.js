import { gql } from '@apollo/client';


const GET_FAVORITE_BOOKS = gql`
  {
    favoriteBooks {
      name
      cover
      author {
        id
        name
      }
    }
  }
`;

const GET_FAVORITE_AUTHORS = gql`
  {
    favoriteAuthors {
      name
      id
      picture
      booksCount
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

export { GET_FAVORITE_BOOKS, GET_ALL_BOOKS_DATA, GET_FAVORITE_AUTHORS };