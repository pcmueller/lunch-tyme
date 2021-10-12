import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { fetchRestaurants } from '../../utils/apiCalls';
import List from '../List/List';
import Details from '../Details/Details';

const App = () => {

  const [ restaurants, setRestaurants ] = useState([]);
  const [ error, setError ] = useState('');
  const [ isPaneOpen, setIsPaneOpen ] = useState(false);
  const [ selected, setSelected ] = useState({});

  useEffect(() => {
    const getRestaurants = () => {
      fetchRestaurants()
        .then(response => {
          if (response) {
            setRestaurants(response.restaurants);
          }
        })
        .catch(error => {
          setError('Sorry, we\'re unable to load the page at the moment.');
          console.log(error);
      })
    }
    getRestaurants();
  }, []);

  const handlePaneClose = () => {
    setIsPaneOpen(false);
    setSelected({});
  }

  return (
    <Router>
      <div className='app' >
        <Route path='/'>
          <List 
            restaurants={restaurants}
            error={error}
            setIsPaneOpen={setIsPaneOpen}
            setSelected={setSelected}
          />
          <SlidingPane
            className='sliding-pane'
            overlayClassName="some-custom-overlay-class"
            isOpen={isPaneOpen}
            title='Lunch Tyme'
            hideHeader={true}
            onRequestClose={handlePaneClose}
            width='100%'
            padding='0'
          >
            <Details 
              restaurants={restaurants}
              selected={selected} 
              handlePaneClose={handlePaneClose}
              setIsPaneOpen={setIsPaneOpen}
              setSelected={setSelected}
            />
          </SlidingPane>
        </Route>
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