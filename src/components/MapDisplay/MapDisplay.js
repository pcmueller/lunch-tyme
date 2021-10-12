import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const MapDisplay = ({ selected, restaurants }) => {

  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    const assignCoordinates = () => {
      setLat(selected?.location?.lat || 32.9618);
      setLng(selected?.location?.lng || -96.829169);
    };

    const addMarkers = (map) => {
      restaurants.forEach(elem => {
        
        new mapboxgl.Marker(elem === selected ? {color: 'red', scale: 1.25} : {})
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
        attributionControl: false,
        center: [lng, lat],
        zoom: zoom,
      });

      addMarkers(map);

      map.addControl(new mapboxgl.FullscreenControl())
         .addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        timeout: 1000
      });

      map.addControl(geolocate);

      if (!selected.name) {
        setZoom(2);
        map.on('load', () => {
          geolocate.trigger();
        });
      }

      return () => map.remove();
    }

    if (selected) {
      assignCoordinates();
    }

    if (lat && lng) {
      initializeMap();
    }
  }, [selected, lat, lng, restaurants, zoom]);

  if (!lat || !lng) {
    return (<div>Loading...</div>)
  }

  return (
    <div 
      ref={mapContainerRef} 
      className={selected.name ? 'map-container' : 'map-container-lg'} 
    />
  )
}

export default MapDisplay;