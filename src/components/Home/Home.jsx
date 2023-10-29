import React from 'react';
import './Home.css';
import TabbedComponent from '../TabbedComponent/TabbedComponent';
import Library from '../Library/Library';

function Home() {
  return (
    <section className='container-home'>
      <TabbedComponent />
      <Library />
    </section>
  )
}

export default Home