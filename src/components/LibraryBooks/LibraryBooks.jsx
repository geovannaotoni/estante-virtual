import React, { useState } from 'react';
import './LibraryBooks.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_BOOKS } from '../../api/queries';
import { Link } from 'react-router-dom';

function LibraryBooks() {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);
  console.log(data);

  const [selectedOption, setSelectedOption] = useState(0);
  const options = ['Todos', 'Romance', 'Aventura', 'Comédia'];

  const handleClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  if (loading) return <p>Loading...</p>;
  if (error) console.log(error.message);

  return (
    <>
      <h2>Biblioteca</h2>
      <div className='options-container'>
        {options.map((option, index) => (
          <button
            key={index}
            className={selectedOption === index ? 'btn-option active' : 'btn-option'}
            onClick={() => handleClick(index)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className='books-lib-container'>
        {data.allBooks.map((book, index) => (
          <Link
            to={`/book/${book.id}`}
            key={index}
            className='book-lib-box'
          >
            <img className="book-lib-cover" src={book.cover} alt={book.name} />
            <div>
              <h3 className='book-lib-name'>{book.name}</h3>
              <h4 className='book-lib-author'>{book.author.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default LibraryBooks;