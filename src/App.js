import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="mobile">
        <Switch>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
