import React, { useState } from 'react';
import './FavoriteBooks.css';
import { useQuery } from '@apollo/client';
import { GET_FAVORITE_BOOKS } from '../../api/queries';

function FavoriteBooks() {
  const { loading, error, data } = useQuery(GET_FAVORITE_BOOKS);
  const [isLoading, setIsLoading] = useState(true);
  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) console.log(error.message);

  return (
    <>
      <section>
        <div className='title-section'>
          <h2>Livros favoritos</h2>
          <h5>ver todos</h5>
        </div>
        <div className='books-container'>
          {data.favoriteBooks.map((book, index) => (
            <div key={index}>
              <img className="book-cover" src={book.cover} alt={book.name} />
              <h3 className='book-name'>{book.name}</h3>
              <h4 className='book-author'>{book.author.name}</h4>
            </div>))}
        </div>
      </section>
    </>
  );
}

export default FavoriteBooks;