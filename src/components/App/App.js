import React, { useEffect, useState } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { fetchRestaurants } from '../../utils/apiCalls';
import List from '../List/List';
import Details from '../Details/Details';

const App = () => {

  const [ restaurants, setRestaurants ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    const getRestaurants = () => {
      fetchRestaurants()
        .then(response => {
          if (response) {
            setRestaurants(response);
          }
        })
        .catch(error => {
          setError('Sorry, we\'re unable to load the page at the moment.');
          console.log(error);
      })
    }
    getRestaurants();
  }, []);

    const displaySelected = (match) => {
      const isRestaurantID = restaurants.find(card => card.id === match.params.id);
      if (isRestaurantID) {
        return (
          <Details
            id={match.params.id}
            error={error}
            setError={setError}
          />
        )
      } else {
        return <Redirect to='/'/>;
      }
  }


  return (
    <Router>
      <div className='app'>
        <Route path='/:id' render={({ match }) => displaySelected(match) }/>
        <Route exact path='/' render={() =>
          <List />
        }/>
        <Route render= {() => {
          <div className='message-box'>
            <h1 className='message'>Page Not Found</h1>
          </div>
        }}/>
      </div>
    </Router>
  );
}

export default App;