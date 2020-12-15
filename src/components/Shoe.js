/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { fetchShoe } from '../actions/shoesAction';
import { getOneShoe, getShoesPending } from '../reducers/shoesReducer';
import { checkStatus } from '../actions/authActions';
import { getStatus, getUser, getFavShoes } from '../reducers/authReducer';
import { createFav } from '../actions/favouritesAction';
import '../assets/css/shoe.css';
import Ctn from '../assets/css/Container.module.css';

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
    const {
      createFav,
      user,
      shoe,
      history,
    } = this.props;
    createFav(shoe.id, user.id);
    history.push('/favourites');
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
      loading,
    } = this.props;
    if (!userStatus) return <Redirect to="/login" />;
    let btn;
    const shoeIds = [];
    userFavourites.forEach(shoes => {
      const id = 'id';
      shoeIds.push(shoes[id]);
    });

    if (shoeIds.length > 0) {
      if (shoeIds.includes(shoe.id)) {
        btn = <button type="button" onClick={this.handleClick} value="favorite">Unlike</button>;
      } else {
        btn = <button type="button" onClick={this.handleClick} value="not-favorite">Like</button>;
      }
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
            <p><Link to="/">Back</Link></p>
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
  userStatus: PropTypes.bool.isRequired,
  checkStatus: PropTypes.func.isRequired,
  userFavourites: PropTypes.arrayOf(PropTypes.object).isRequired,
  createFav: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  shoe: getOneShoe(state),
  userStatus: getStatus(state),
  loading: getShoesPending(state),
  user: getUser(state),
  userFavourites: getFavShoes(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchShoe,
  checkStatus,
  createFav,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shoe);
