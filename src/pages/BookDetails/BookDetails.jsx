import React from 'react';
import './BookDetails.css';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_BOOK_BY_ID } from '../../api/queries';
import { Download, Heart, Share2 } from 'lucide-react';
import BottomMenu from '../../components/Mobile/BottomMenu/BottomMenu';
import TopMenu from '../../components/Mobile/TopMenu/TopMenu';

function BookDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BOOK_BY_ID(id));
  
  if (error) console.log(error.message);

  return (
    <section className='books-details'>
      <TopMenu />
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
              <button className='btn-fav'>
                <Heart size={20} color="#555555"/>
              </button>
              <h3 className='author'>{data.book.author.name}</h3>
            </div>
            <p>{data.book.description}</p>
          </div>
        </>
      )}
      <BottomMenu />
    </section>
  )
}

export default BookDetails;