import React from 'react';
import './Library.css';
import { useQuery } from '@apollo/client';
import { GET_FAVORITE_AUTHORS } from '../../api/queries';
import LibraryBooks from '../LibraryBooks/LibraryBooks';

function Library() {
  const { loading, error, data } = useQuery(GET_FAVORITE_AUTHORS);

  if (loading) return <section className='library-container'>Loading...</section>;
  if (error) console.log(error.message);

  return (
    <section className='library-container'>
      <div className='title-section'>
        <h2 className='h2-title'>Autores favoritos</h2>
        <h5>ver todos</h5>
      </div>
      <div className='authors-container'>
        {data.favoriteAuthors.map((author, index) => (
          <div key={index} className='author-box'>
            <img className="author-photo" src={author.picture} alt={author.name} />
            <div>
              <h3 className='author-name'>{author.name}</h3>
              <p className='books-count'>{`${author.booksCount} livros`}</p>
            </div>
          </div>)
        )}
      </div>
      <LibraryBooks />
    </section>
  )
}

export default Library;