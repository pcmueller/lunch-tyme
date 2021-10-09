import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const MapDisplay = ({ google, selected }) => {

  const containerStyles = {
    position: "static",
    width: "100%",
    height: "100%"
  }

  const mapStyles = {
    width: '100%',
    height: '30%',
    // position: 'relative',
    // marginTop: '80px'
  };

  return (
    <Map
      google={google} 
      zoom={13}
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