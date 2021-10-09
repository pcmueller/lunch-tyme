import React from 'react';
import Header from '../Header/Header';
import MapDisplay from '../MapDisplay/MapDisplay';

const Details = ({ selected, handlePaneClose }) => {

  return (
      <section className='details'>
        <Header 
          drawer={true}
          handlePaneClose={handlePaneClose}
        />
        <MapDisplay selected={selected} />
        <div className='details-banner'>
          <h2 className='name'>{selected.name}</h2>
          <h3 className='category'>{selected.category}</h3>
        </div>
      </section>
  )
}

export default Details;

