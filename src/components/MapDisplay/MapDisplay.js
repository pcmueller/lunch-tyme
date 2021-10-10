import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const MapDisplay = ({ selected }) => {

  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    const assignCoordinates = () => {
      setLat(selected?.location?.lat);
      setLng(selected?.location?.lng);
    };

    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
      
      map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      return () => map.remove();
    }

    if (selected?.location) {
      assignCoordinates();
    }

    if (lat && lng) {
      initializeMap();
    }
  }, [selected, lat, lng, zoom]);

  return (
    <>
      {lat && 
        <section className='map-section'>
          <div ref={mapContainerRef} className='map-container' />
        </section>
      }
    </>
  )
}

export default MapDisplay;