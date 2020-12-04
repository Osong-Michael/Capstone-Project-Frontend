import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="mobile">
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
