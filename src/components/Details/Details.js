import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Map from '../Map/Map';

const Details = ({ selected, handlePaneClose }) => {

  const [ details, setDetails] = useState();
  const [ location, setLocation] = useState({});

  useEffect(() => {
    const getLocationData = () => {
      setLocation({
        address: `${selected?.location?.city}, ${selected?.location?.state} ${selected?.location?.postalCode}`,
        lat: `${selected?.location?.lat}`,
        lng: `${selected?.location?.lng}`
      });
      setDetails(buildHTML);
    }

    const buildHTML = () => {
      return (
        <div className='details-body'>
          <p>
            <span>{selected?.location?.address}</span>
            <span>{location.address}</span>
          </p>
          {selected?.contact?.formattedPhone && <p>{selected.contact.formattedPhone}</p>}
          {selected?.contact?.twitter && <p>@{selected.contact.twitter}</p>}
        </div>
      )
    }

    if (selected) {
      getLocationData();
    }
  }, [selected, location.address]);

  return (
      <section className='details'>
        <Header 
          drawer={true}
          handlePaneClose={handlePaneClose}
        />
        <Map location={location} />
        <div className='details-banner'>
          <h2 className='name'>{selected.name}</h2>
          <h3 className='category'>{selected.category}</h3>
        </div>
        {details}
      </section>
  )
}

export default Details;

