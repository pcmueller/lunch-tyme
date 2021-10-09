import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { findByLabelText } from '@testing-library/dom';

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const MapDisplay = ({ google, selected }) => {

  const containerStyles = {
    // display: 'block',
    width: "100%",
    height: "100%",
    zIndex: '0'
  }

  const mapStyles = {
    // display: 'block',
    // zIndex: '0',
    width: '100%',
    height: '180px',
    // position: 'relative',
  };

  return (
    <Map
      google={google} 
      zoom={14}
      draggable={true}
      mapTypeControl={false}
      streetViewControl={false}
      style={mapStyles}
      containerStyle={containerStyles}
      initialCenter={{
        lat: selected?.location?.lat,
        lng: selected?.location?.lng
      }}
    >
      <Marker />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapDisplay);