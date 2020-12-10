/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { checkStatus } from '../actions/authActions';

const Favourites = () => {
  const { status } = useSelector(state => ({
    status: state.auth.loggedIn,
  }));

  useEffect(() => {
    checkStatus();
  }, []);
  console.log(status);
  if (!status) return <Redirect to="/login" />;
  return (
    <di><h1>My favourites</h1></di>
  );
};

export default Favourites;
