import React, { useEffect, useState } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
      </div>
    </Router>
  );
}

export default App;