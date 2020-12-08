import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/LogIn';
import './App.css';
import Shoe from './components/Shoe';

function App() {
  return (
    <BrowserRouter>
      <div className="mobile">
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shoes/:id" component={Shoe} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
