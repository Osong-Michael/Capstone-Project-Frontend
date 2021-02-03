import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Ctn from '../assets/css/Container.module.css';

const ShoeList = props => {
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

ShoeList.propTypes = {
  shoe: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ShoeList;
