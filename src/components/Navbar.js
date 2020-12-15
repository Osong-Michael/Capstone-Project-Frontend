/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReactComponent as CloseMenu } from '../assets/x.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import '../css/nav.css';
import { logUserOut } from '../actions/authActions';
import { getStatus } from '../reducers/authReducer';

const Navbar = props => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { userStatus } = props;
  const logOutUser = () => {
    const { logUserOut } = props;
    logUserOut();
  };
  const signedOutLinks = (
    <>
      <li className="option mobile-option" onClick={closeMobileMenu} onKeyDown={closeMobileMenu}>
        <Link to="/login" className="sign-up">Log In</Link>
      </li>
      <li className="option mobile-option" onClick={closeMobileMenu} onKeyDown={closeMobileMenu}>
        <Link to="/signup" className="sign-up">
          Sign Up
        </Link>
      </li>
    </>
  );
  const signedInLinks = (
    <>
      <li className="option mobile-option" onClick={closeMobileMenu} onKeyDown={closeMobileMenu}>
        <Link to="/favourites" className="sign-up">
          My Favourites
        </Link>
      </li>
      <li className="option mobile-option" onClick={closeMobileMenu} onKeyDown={closeMobileMenu}>
        <button type="button" className="logout-btn" onClick={logOutUser}>Log Out</button>
      </li>
    </>
  );

  const links = userStatus ? signedInLinks : signedOutLinks;

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
            { links }
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

const mapStateToProps = state => ({
  userStatus: getStatus(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logUserOut,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
