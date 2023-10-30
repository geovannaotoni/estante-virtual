import React from 'react';
import './Home.css';
import TabbedComponent from '../../components/TabbedComponent/TabbedComponent';
import Library from '../../components/Library/Library';

function Home() {
  return (
    <section className='container-home'>
      <TabbedComponent />
      <Library />
    </section>
  )
}

export default Home