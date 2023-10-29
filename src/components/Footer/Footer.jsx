import React from 'react';
import logo from '../../images/white-logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className="div">
        <img className="logo" alt="Logo" src={logo} />
        <p>
          Todos os direitos reservados.
          <br />
          Studio Sol Books © 2023
        </p>
      </div>
    </footer>
  )
}

export default Footer;