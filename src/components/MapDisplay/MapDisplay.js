import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { findByLabelText } from '@testing-library/dom';

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const MapDisplay = ({ google, selected }) => {

  const containerStyles = {
    width: "100%",
    height: "100%",
  }

  const mapStyles = {
    width: '100%',
    height: '180px',
  };

  const zoomOptions = {
    position: google.maps.ControlPosition.TOP_LEFT
  }

  return (
    <Map
      google={google} 
      zoom={14}
      // disableDefaultUI={true}
      draggable={true}
      zoomControl={true}
      zoomControlOptions={zoomOptions}
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