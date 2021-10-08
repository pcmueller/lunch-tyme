import React, { useEffect, useState } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { fetchRestaurants } from '../../utils/apiCalls';
import Header from '../Header/Header';

const App = () => {

  const [ restaurants, setRestaurants ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    const getRestaurants = () => {
      fetchRestaurants()
        .then(response => {
          if (response) {
            console.log(response);
          }
        })
        .catch(error => {
          setError('Sorry, we\'re unable to load the page at the moment.');
          console.log(error);
      })
    }
    getRestaurants();
  }, []);


  return (
    <Router>
      <div className='app'>
        <Header />
      </div>
    </Router>
  );
}

export default App;