/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint linebreak-style: [2, "windows"] */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CloseMenu } from '../assets/x.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import '../CSS_modules/nav.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <Link to="/">
              <h1>D&apos;m Shoes</h1>
            </Link>
          </div>
          <ul className={click ? 'nav-options active' : 'nav-options'}>
            <li className="option mobile-option" onClick={closeMobileMenu} onKeyDown={closeMobileMenu}>
              <Link to="/login" className="sign-up">Log In</Link>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu} onKeyDown={closeMobileMenu}>
              <Link to="/signup" className="sign-up">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="mobile-menu" onClick={handleClick} onKeyDown={closeMobileMenu}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
