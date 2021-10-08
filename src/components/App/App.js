import React, { useEffect, useState } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <header className='app-header'>
          App Title
        </header>
      </div>
    </Router>
  );
}

export default App;