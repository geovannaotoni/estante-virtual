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
          <div className='button-box'>
            <PlusCircle fill="#555555" size={24} color="#fff"/>
            <button className='button'>Adicionar</button>
          </div>
          <div className='button-box'>
            <Heart fill="#555555" size={20} color="#555555"/>
            <button className='button'>Favoritos</button>
          </div>
          <div className='separador'/>
          <div className='button-box profile'>
            {loading || error ? <UserCircle2 /> : <img src={data.userPicture} alt="user" />}
            <button className='button'>Jucicreide</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header