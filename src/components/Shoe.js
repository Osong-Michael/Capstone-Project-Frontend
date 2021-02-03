/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { fetchShoe } from '../actions/shoesAction';
import { getOneShoe, getShoePending } from '../reducers/shoeReducer';
import { checkStatus } from '../actions/authActions';
import { getStatus } from '../reducers/authReducer';
import { getFavShoes } from '../reducers/favouritesReducer';
import getFavourites, { createFav } from '../actions/favouritesAction';
import '../assets/css/shoe.css';
import Ctn from '../assets/css/Container.module.css';

class Shoe extends Component {
  constructor(props) {
    super(props);
    this.createLike = this.createLike.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchShoe, checkStatus, getFavourites } = this.props;
    const id = this.props.match.params.id;
    fetchShoe(id);
    checkStatus();
    getFavourites();
  }

  createLike() {
    const {
      createFav,
      shoe,
    } = this.props;
    createFav(shoe.id);
  }

  handleClick() {
    this.createLike();
    window.location.reload(false);
  }

  isEmpty(obj) {
    for (let key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  render() {
    const {
      shoe,
      userStatus,
      userFavourites,
      loading,
    } = this.props;
    if (userStatus === '') return <Redirect to="/login" />;
    let btn;
    const shoeIds = [];
    if (!this.isEmpty(userFavourites)) {
      userFavourites.user_shoes.forEach(shoes => {
        const id = 'id';
        shoeIds.push(shoes[id]);
      });
    }

    if (shoeIds.includes(shoe.id)) {
      btn = <button type="button" value="favorite" disable id="btn-disabled">Part of Collection</button>;
    } else {
      btn = <button type="button" onClick={this.handleClick} value="not-favorite">Like</button>;
    }

    return (
      <>
        {loading && (
          <div className={Ctn.loading}>
            <RingLoader loading={loading} />
          </div>
        )}
        <div className="my-shoe">
          <h2 className="shoe-name">{shoe.name}</h2>
          <div className="shoe-con">
            <img src={shoe.image} alt={shoe.name} />
            <p className="shoe-name price">
              Price:&nbsp;
              {shoe.price}
            </p>
          </div>
          <p className="shoe-details">{shoe.description}</p>
          <div className="btns-below">
            <p>{btn}</p>
          </div>
        </div>
      </>
    );
  }
}

Shoe.propTypes = {
  fetchShoe: PropTypes.func.isRequired,
  shoe: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  userStatus: PropTypes.string.isRequired,
  userFavourites: PropTypes.shape({
    user_shoe: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  checkStatus: PropTypes.func.isRequired,
  createFav: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  shoe: getOneShoe(state),
  userStatus: getStatus(state),
  loading: getShoePending(state),
  userFavourites: getFavShoes(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchShoe,
  checkStatus,
  createFav,
  getFavourites,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shoe);
