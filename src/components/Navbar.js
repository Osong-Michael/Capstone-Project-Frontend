/* eslint linebreak-style: [2, "windows"] */
import React from 'react';
import Nav from '../CSS_modules/Navbar.module.css';

const Navbar = () => (
  <nav className={Nav.navbar}>
    <h1>D &apos; Em Shoes</h1>
    <span><i className="fas fa-bars fa-2x" /></span>
  </nav>
);

export default Navbar;
