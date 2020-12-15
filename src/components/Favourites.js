import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { checkStatus } from '../actions/authActions';
import getFavourites from '../actions/favouritesAction';
import ShoeList from './ShoeList';
import Ctn from '../css/Container.module.css';

const Favourites = () => {
  const { status, favShoes } = useSelector(state => ({
    status: state.auth.loggedIn,
    favShoes: state.fav.shoes.user_shoes,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavourites());
    checkStatus();
  }, [dispatch]);
  if (!status) return <Redirect to="/login" />;
  const shoe = favShoes.map(shoe => (<ShoeList shoe={shoe} key={Math.random()} />));
  return (
    <>
      <div>
        <h2 className={Ctn.welcome_text}>Your Favourite Collection</h2>
      </div>
      <div className={Ctn.shoes}>
        {shoe}
      </div>
    </>
  );
};

export default Favourites;
