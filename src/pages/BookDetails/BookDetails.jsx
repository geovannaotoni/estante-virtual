import React from 'react';
import './BookDetails.css';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_BOOK_BY_ID } from '../../api/queries';
import { Download, Heart, Share2 } from 'lucide-react';
import MobileMenu from '../../components/MobileMenu/MobileMenu';

function BookDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BOOK_BY_ID(id));
  console.log(data)
  
  if (error) console.log(error.message);

  return (
    <section className='books-details'>
      {loading ? <p className='loading'>Carregando...</p> : (
        <>
          <div className='box-cover'>
            <img className="cover" src={data.book.cover} alt={data.book.name} />
            <button>
              <Heart fill="#555555" size={20} color="#555555"/>
              <span>Favoritar</span>
            </button>
            <button>
              <Share2 fill="#555555" size={20} color="#555555"/>
              <span>Compartilhar</span>
            </button>
            <button>
              <Download size={20} color="#555555"/>
              <span>Salvar em uma lista</span>
            </button>
          </div>
          <div className='box-details'>
            <div className='book-info'>
              <h2 className='title'>{data.book.name}</h2>
              <h3 className='author'>{data.book.author.name}</h3>
            </div>
            <p>{data.book.description}</p>
          </div>
        </>
      )}
      <MobileMenu />
    </section>
  )
}

export default BookDetails;