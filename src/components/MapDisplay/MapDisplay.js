import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const MapDisplay = ({ selected }) => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (!map.current) return;
    if (lat && lng) {
      map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
      });
    }
  });

  useEffect(() => {
    const assignCoordinates = () => {
      setLat(selected?.location?.lat);
      setLng(selected?.location?.lng);
    };

    const initializeMap = () => {
      if (map.current) return;
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
    }

    if (selected?.location) {
      assignCoordinates();
    }

    if (lat && lng) {
      console.log(lat, lng);
      initializeMap();
    }
  }, [selected, lat, lng, zoom]);

  return (
    <>
      {lat && 
        <section className='map-section'>
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={mapContainer} className='map-container' />
        </section>
      }
    </>
  )
}

export default MapDisplay;