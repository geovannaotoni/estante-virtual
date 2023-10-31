import React from 'react';
import './Home.css';
import TabbedComponent from '../../components/TabbedComponent/TabbedComponent';
import Library from '../../components/Library/Library';
import MobileMenu from '../../components/MobileMenu/MobileMenu';

function Home() {
  return (
    <section className='container-home'>
      <TabbedComponent />
      <Library />
      <MobileMenu />
    </section>
  )
}

export default Home