import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Search, Heart, PlusCircle, UserCircle2 } from 'lucide-react';


function Header() {
  return (
    <header className='header'>
      <div className="box">
        <img className="logo" alt="Logo" src={logo} />
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
            <UserCircle2 size={24} color="#555555"/>
            <button className='button'>Jucicreide</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header