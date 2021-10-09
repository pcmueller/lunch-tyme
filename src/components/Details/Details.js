import React from 'react';
import Header from '../Header/Header';
import MapDisplay from '../MapDisplay/MapDisplay';

const Details = ({ selected }) => {

  return (
      <section className='details'>
        <Header />
        <MapDisplay selected={selected} />
      </section>
  )
}

export default Details;

