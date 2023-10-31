import React, { useState } from 'react';
import './TabbedComponent.css';
import FavoriteBooks from '../FavoriteBooks/FavoriteBooks';
import BorrowedBooks from '../BorrowedBooks/BorrowedBooks';

const TabbedComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: 'Meus Livros',
      content: <FavoriteBooks />,
    },
    {
      title: 'Emprestados',
      content: <BorrowedBooks />,
    },
  ];
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className='favorite-container'>
      <ul className='tabs-container'>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <hr className='hr' />
      <div>
        {tabs[activeTab].content}
      </div>
    </div>
  );  
};

export default TabbedComponent;