import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MapDisplay from '../MapDisplay/MapDisplay';

const Details = ({ selected, handlePaneClose }) => {

  const [ details, setDetails] = useState();
  const [ location, setLocation] = useState();

  useEffect(() => {
    const getLocationData = () => {
      setLocation({
        streetAddress: `${selected?.location.address}`,
        cityStateZip: `${selected?.location?.city}, ${selected?.location?.state} ${selected?.location?.postalCode}`,
        lat: `${selected?.location?.lat}`,
        lng: `${selected?.location?.lng}`
      });
    }

    if (selected.location) {
      getLocationData();
    }
  }, [selected]);

  useEffect(() => {
    const buildHTML = () => {
      return (
        <div className='details-body'>
          <p>
            <span>{location.streetAddress}</span>
            <span>{location.cityStateZip}</span>
          </p>
          {selected?.contact?.formattedPhone && <p>{selected.contact.formattedPhone}</p>}
          {selected?.contact?.twitter && <p>@{selected.contact.twitter}</p>}
        </div>
      )
    }

    if (location?.streetAddress) {
      setDetails(buildHTML);
    }
  }, [location, selected]);

  return (
      <section className='details'>
        <Header 
          drawer={true}
          handlePaneClose={handlePaneClose}
        />
        {location?.streetAddress && 
          <MapDisplay 
            selected={selected}
            location={location}
          />
        }
        <div className='details-banner'>
          <h2 className='name'>{selected.name}</h2>
          <h3 className='category'>{selected.category}</h3>
        </div>
        {details}
      </section>
  )
}

export default Details;