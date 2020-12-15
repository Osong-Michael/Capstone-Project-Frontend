import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/LogIn';
import './App.css';
import Shoe from './components/Shoe';
import Favourites from './components/Favourites';
import phoneBg from './assets/images/Bg3.png';

function App() {
  return (
    <BrowserRouter>
      <div className="mobile">
        <img src={phoneBg} alt="background" />
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shoes/:id" component={Shoe} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/favourites" component={Favourites} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
