import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { useQuery } from '@apollo/client';
import { Search, Heart, PlusCircle, UserCircle2 } from 'lucide-react';
import { GET_USER_PICTURE } from '../../api/queries';
import { Link } from 'react-router-dom';

function Header() {
  const { loading, error, data } = useQuery(GET_USER_PICTURE);

    return (
    <header className='header'>
      <div className="box">
        <Link to='/'>
          <img className="logo" alt="Logo" src={logo} />
        </Link>
        <div className='input-container'>
          <input
            type="text"
            placeholder='Busque um livro'
            className='search-input'
          />
          <Search color="#9E9E9E" size={24}/>
        </div>
        <div className='container-button'>
          <button className='button-box btn-header'>
            <PlusCircle fill="#555555" size={24} color="#fff"/>
            <span className='button'>Adicionar</span>
          </button>
          <button className='button-box btn-header'>
            <Heart fill="#555555" size={20} color="#555555"/>
            <span className='button'>Favoritos</span>
          </button>
          <div className='separador'/>
          <button className='button-box profile'>
            {loading || error ? <UserCircle2 /> : <img src={data.userPicture} alt="user" />}
            <span className='button'>Jucicreide</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header