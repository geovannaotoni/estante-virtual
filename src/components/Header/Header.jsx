import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

function Header() {
  return (
    <header className='header'>
      <div className="box">
        <img className="logo" alt="Logo" src={logo} />
      </div>
      <div>
        <input
          type="text"
          placeholder='Busque um livro'
        />
      </div>
    </header>
  )
}

export default Header