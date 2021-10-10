import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const MapDisplay = ({ google, selected }) => {

  const [ coordinates, setCoordinates] = useState({});

  useEffect(() => {
    const assignCoordinates = () => {

      setCoordinates({
        lat: selected?.location?.lat,
        lng: selected?.location?.lng
      });

    };

    if (selected?.location) {
      assignCoordinates();
    }
  }, [selected]);

  const containerStyles = {
    width: '100%',
    height: '100%',
  }

  const mapStyles = {
    width: '100%',
    height: '180px',
  };

  const zoomStyles = {
    position: google.maps.ControlPosition.TOP_LEFT
  }

  return (
    <>
    {coordinates?.lat && 
      <Map
        google={google} 
        zoom={14}
        // disableDefaultUI={true}
        draggable={true}
        zoomControl={true}
        mapTypeControl={false}
        streetViewControl={false}
        style={mapStyles}
        containerStyle={containerStyles}
        zoomControlOptions={zoomStyles}
        initialCenter={coordinates}
      >
        <Marker />
        {/* <InfoWindow
          visible={showInfoWindow}
          style={styles.infoWindow}
        >
          <div className={classes.infoWindow}>
            <p>Click on the map or drag the marker to select location where the incident occurred</p>
          </div>
        </InfoWindow> */}
      </Map>
    }
    
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapDisplay);