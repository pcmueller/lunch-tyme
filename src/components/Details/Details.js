import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MapDisplay from '../MapDisplay/MapDisplay';
import Footer from '../Footer/Footer';

const Details = ({ selected, restaurants, handlePaneClose, setSelected, setIsPaneOpen }) => {

  const [ details, setDetails] = useState();
  const [ location, setLocation] = useState();

  useEffect(() => {
    const getLocationData = () => {
      setLocation({
        streetAddress: `${selected?.location?.address || ''}`,
        cityStateZip: `${selected?.location?.city || ''}, ${selected?.location?.state || ''} ${selected?.location?.postalCode || ''}`,
        lat: `${selected?.location?.lat}`,
        lng: `${selected?.location?.lng}`
      });
    }

    if (selected?.location) {
      getLocationData();
    }
  }, [selected]);

  useEffect(() => {
    const buildHTML = () => {
      return (
        <div className='details-body'>
          <p className='address'>
            <span>{location?.streetAddress}</span>
            <span>{location?.cityStateZip}</span>
          </p>
          {selected?.contact?.formattedPhone?.length && 
            <p className='phone'>
              {selected?.contact?.formattedPhone}
            </p>}
          {selected?.contact?.twitter?.length && 
            <p className='twitter'>
              @{selected?.contact?.twitter}
            </p>}
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
          style={{ zIndex: 1000 }}
          handlePaneClose={handlePaneClose}
          setSelected={setSelected}
          setIsPaneOpen={setIsPaneOpen}
        />
        <div className={selected.name ? 'map-section' : 'map-section-lg'}>
          <MapDisplay
            selected={selected}
            location={location}
            restaurants={restaurants}
          />
        </div>
        {selected.name && 
          <div className='details-banner'>
            <h2 className='name'>{selected?.name}</h2>
            <h3 className='category'>{selected?.category}</h3>
          </div>
        }
        {selected.name && details}
        <Footer />
      </section>
  )
}

export default Details;