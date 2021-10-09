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
        {/* <MapDisplay selected={selected} /> */}
        <div className='details-banner'>
          <h2 className='name'>{selected.name}</h2>
          <h3 className='category'>{selected.category}</h3>
        </div>
        <div className='details-body'>
          <p>{selected.location.address}</p>
          <p>{selected.location.city}, {selected.location.state} {selected.location.postalCode}</p>
          <br/>
          <p>{selected.contact.formattedPhone}</p>
          <br/>
          <p>@{selected.contact.twitter}</p>
        </div>

      </section>
  )
}

export default Details;

