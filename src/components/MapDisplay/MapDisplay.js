import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Marker from '../Marker/Marker';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const MapDisplay = ({ selected, restaurants }) => {

  const mapContainerRef = useRef(null);
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

      addMarkers(map);
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

  const addMarkers = (map) => {
    restaurants.forEach(elem => {
      const mrk = document.createElement('div');
      mrk.className = 'marker';
      new mapboxgl.Marker(mrk)
        .setLngLat([elem.location.lng, elem.location.lat])
        .addTo(map);
    });
  }

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