import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { checkStatus } from '../actions/authActions';
import getFavourites from '../actions/favouritesAction';
import ShoeList from './ShoeList';
import Ctn from '../assets/css/Container.module.css';

const Favourites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavourites());
    checkStatus();
  }, []);
  const { status, favShoes, loading } = useSelector(state => ({
    status: state.auth.loggedIn,
    favShoes: state.fav.shoes.user_shoes,
    loading: state.fav.loading,
  }));

  if (!status) return <Redirect to="/login" />;
  // eslint-disable-next-line max-len
  const shoe = favShoes && favShoes.length > 0 ? favShoes.map(shoe => (<ShoeList shoe={shoe} key={Math.random()} />)) : <p>You do not have any Favorites yet</p>;
  return (
    <>
      {loading && (
        <div className={Ctn.loading}>
          <RingLoader loading={loading} />
        </div>
      )}
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
