import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const MapDisplay = ({ selected, restaurants }) => {

  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(18);

  useEffect(() => {
    const assignCoordinates = () => {
      if (!lat && !lng) {
        setZoom(12);
      }
      setLat(selected?.location?.lat);
      setLng(selected?.location?.lng);
    };

    const addMarkers = (map) => {
      restaurants.forEach(elem => {
        new mapboxgl.Marker(elem === selected ? {anchor: 'bottom', color: 'red', scale: 1.5} : {})
          .setLngLat([elem.location.lng, elem.location.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 10, anchor: 'center', closeOnMove: true })
              .setHTML(`<h3>${elem.name}</h3><p>${elem.category}</p>`)
          )
          .addTo(map);
      });
    };

    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });

      addMarkers(map);
      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
          timeout: 3000
        },
        trackUserLocation: true,
        showUserHeading: true
      }));
      map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      return () => map.remove();
    }

    if (selected?.location) {
      assignCoordinates();
    }

    if (lat && lng) {
      initializeMap();
    }
  }, [selected, lat, lng, restaurants, zoom]);

  if (!lat || !lng) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div ref={mapContainerRef} className='map-container' />
  )
}

export default MapDisplay;