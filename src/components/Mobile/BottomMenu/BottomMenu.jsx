import React from 'react';
import './BottomMenu.css';
import { Search, Heart, PlusCircle, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function BottomMenu() {
  const navigate = useNavigate();

  return (
    <nav>
      <button className='btn-navbar' onClick={() =>   navigate('/')}>
        <Home fill="#A076F2" size={24} color="#fff"/>
        <span className='btn-text active-nav'>Início</span>
      </button>
      <button className='btn-navbar'>
        <PlusCircle fill="#9E9E9E" size={24} color="#fff"/>
        <span className='btn-text'>Adicionar</span>
      </button>
      <button className='btn-navbar'>
        <Search color="#9E9E9E" size={24}/>
        <span className='btn-text'>Buscar</span>
      </button>
      <button className='btn-navbar'>
        <Heart fill="#9E9E9E" size={20} color="#9E9E9E"/>
        <span className='btn-text'>Favoritos</span>
      </button>
    </nav>
  )
}

export default BottomMenu;