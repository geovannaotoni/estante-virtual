import React from 'react';
import './TopMenu.css';
import { ArrowLeft, MoreVertical } from 'lucide-react';

function TopMenu() {
  return (
    <div className='top-menu'>
      <button>
        <ArrowLeft size={20} color="#fff" strokeWidth={3}/>
      </button>
      <button>
        <MoreVertical size={20} color="#fff" strokeWidth={3}/>
      </button>
    </div>
  )
}

export default TopMenu;