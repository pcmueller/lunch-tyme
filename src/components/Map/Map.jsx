import React from 'react';
import GoogleMapReact from 'google-map-react';
import locationIcon from '../../assets/cuts/tab_lunch@2x.png';

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const LocationPin = ({ text }) => (
  <div className='pin'>
    <img src={locationIcon} alt='pin icon' className='pin-icon' />
    <p className='pin-text'>{text}</p>
  </div>
)

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
};

const Map = ({ location, zoomLevel }) => {

  return (
    <div className="map">
      <h2 className="map-h2">MAP</h2>
      <div 
        className="google-map"
        style={{ height: '100vh', width: '100%' }}
      >
        {location &&
          <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        }
      </div>
    </div>
  )
}

export default Map;