import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const Details = ({ google, selected, handlePaneClose }) => {

  const [ details, setDetails] = useState();
  const [ location, setLocation] = useState({});
  const [ showingInfoWindow, setShowInfoWindow ] = useState(false);
  const [ activeMarker, setActiveMarker ] = useState({});

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
            <span>{location?.address}</span>
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

  const onMarkerClick = (props, marker, e) => {
    setShowInfoWindow(true);
    setActiveMarker(marker);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShowInfoWindow(false);
      setActiveMarker(null);
    }
  };

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
      <section className='details'>
        <Header 
          drawer={true}
          handlePaneClose={handlePaneClose}
        />
        {location.address && 
          <Map
            google={google} 
            zoom={13}
            draggable={true}
            mapTypeControl={false}
            streetViewControl={false}
            // panControl={true}
            // zoomControl={true}
            // scaleControl={true}
            onClick={onMapClicked}
            style={mapStyles}
            containerStyle={containerStyles}
            initialCenter={{
              lat: selected?.location?.lat,
              lng: selected?.location?.lng
            }}
          >
            <Marker onClick={onMarkerClick}/>
            <InfoWindow
              marker={activeMarker}
              visible={true}>
                <div>
                  <h1>{selected.name}</h1>
                </div>
            </InfoWindow>
          </Map>
        }
        <div className='details-banner'>
          <h2 className='name'>{selected.name}</h2>
          <h3 className='category'>{selected.category}</h3>
        </div>
        {details}
      </section>
  )
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(Details);