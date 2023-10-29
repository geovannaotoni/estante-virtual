import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS_NAME } from '../../api/queries';

function FavoriteBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS_NAME);
  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <div>
        {data.favoriteBooks.map((book, index) => (
          <div key={index}>
            <h2>{book.name}</h2>
          </div>))}
      </div>
    </>
  );
}

export default FavoriteBooks;