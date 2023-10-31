import React from 'react';
import './Home.css';
import TabbedComponent from '../../components/TabbedComponent/TabbedComponent';
import Library from '../../components/Library/Library';
import BottomMenu from '../../components/Mobile/BottomMenu/BottomMenu';

function Home() {
  return (
    <section className='container-home'>
      <TabbedComponent />
      <Library />
      <BottomMenu />
    </section>
  )
}

export default Home