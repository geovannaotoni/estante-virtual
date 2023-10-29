import React from 'react';
import './Library.css';
import { useQuery } from '@apollo/client';
import { GET_FAVORITE_AUTHORS } from '../../api/queries';

function Library() {
  const { loading, error, data } = useQuery(GET_FAVORITE_AUTHORS);
  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <section className='library-container'>
      <div className='title-section'>
        <h2>Artistas favoritos</h2>
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

      <h2>Biblioteca</h2>
    </section>
  )
}

export default Library;