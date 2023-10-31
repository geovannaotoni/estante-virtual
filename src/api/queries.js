import { gql } from '@apollo/client';


const GET_FAVORITE_BOOKS = gql`
  {
    favoriteBooks {
      id
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

const GET_BOOK_BY_ID = (id) => gql`
  {
    book(id: ${id}) {
      name
      description
      author {
        id
        name
      }
      cover
    }
  }
`;

const GET_ALL_BOOKS = gql`
  {
    allBooks {
      id
      name
      author {
        id
        name
      }
      cover
      category
    }
  }
`;

const GET_USER_PICTURE = gql`
  {
    userPicture
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

export { GET_FAVORITE_BOOKS, GET_FAVORITE_AUTHORS, GET_BOOK_BY_ID, GET_ALL_BOOKS, GET_USER_PICTURE };