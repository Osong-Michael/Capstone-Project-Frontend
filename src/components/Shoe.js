/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchShoe } from '../actions/shoesAction';
import { getOneShoe } from '../reducers/shoesReducer';
import { checkStatus } from '../actions/authActions';
import { getStatus, getUser, getFavShoes } from '../reducers/authReducer';
import { createFav } from '../actions/favouritesAction';
import '../css/shoe.css';

class Shoe extends Component {
  constructor(props) {
    super(props);
    this.createLike = this.createLike.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchShoe, checkStatus } = this.props;
    const id = this.props.match.params.id;
    fetchShoe(id);
    checkStatus();
  }

  createLike() {
    const { createFav, user, shoe } = this.props;
    createFav(shoe.id, user.id);
  }

  handleClick(e) {
    if (e.target.value === 'favourite') {
      e.target.value = 'not-favourite';
      e.target.textContent = 'Like';
    } else {
      e.target.value = 'favourite';
      e.target.textContent = 'Unlike';
    }
    this.createLike();
  }

  render() {
    const {
      shoe,
      userStatus,
      userFavourites,
    } = this.props;
    if (!userStatus) return <Redirect to="/login" />;
    let btn;
    const shoeIds = [];
    for (const shoes of userFavourites) {
      const id = 'id';
      shoeIds.push(shoes[id]);
    }

    if (shoeIds.length > 0) {
      if (shoeIds.includes(shoe.id)) {
        btn = <button type="button" onClick={this.handleClick} value="favorite">Unlike</button>;
      } else {
        btn = <button type="button" onClick={this.handleClick} value="not-favorite">Like</button>;
      }
    }

    return (
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
          <p><Link to="/">Back</Link></p>
          <p>{btn}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shoe: getOneShoe(state),
  userStatus: getStatus(state),
  user: getUser(state),
  userFavourites: getFavShoes(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchShoe,
  checkStatus,
  createFav,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shoe);
