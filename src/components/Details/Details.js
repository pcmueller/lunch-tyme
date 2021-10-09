import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MapDisplay from '../MapDisplay/MapDisplay';

const Details = ({ selected, handlePaneClose }) => {

  const [ details, setDetails] = useState();

  useEffect(() => {
    const buildHTML = () => {
      return (
        <div className='details-body'>
          <p>
            <span>{selected?.location?.address}</span>
            <span>
              {selected?.location?.city}, {selected?.location?.state} {selected?.location?.postalCode}
            </span>
          </p>
          {selected?.contact?.formattedPhone && <p>{selected.contact.formattedPhone}</p>}
          {selected?.contact?.twitter && <p>@{selected.contact.twitter}</p>}
        </div>
      )
    }

    if (selected) {
      setDetails(buildHTML);
    }
  }, [selected]);

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
        {details}
      </section>
  )
}

export default Details;

