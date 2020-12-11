/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Ctn from '../CSS_modules/Container.module.css';

const ShoeList = props => {
  // console.log('From Shoe List', props);
  const { shoe } = props;

  return (
    <div key={shoe.id} className={Ctn.links}>
      <Link to={`shoes/${shoe.id}`}>
        <div className={Ctn.img}><img src={shoe.image} alt={shoe.name} /></div>
        <p>{shoe.name}</p>
      </Link>
    </div>
  );
};

export default ShoeList;
