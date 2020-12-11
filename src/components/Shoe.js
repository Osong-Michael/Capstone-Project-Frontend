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
import { getStatus, getUser } from '../reducers/authReducer';
import { createFav } from '../actions/favouritesAction';
import '../CSS_modules/shoe.css';

class Shoe extends Component {
  componentDidMount() {
    const { fetchShoe, checkStatus } = this.props;
    const id = this.props.match.params.id;
    fetchShoe(id);
    checkStatus();
  }

  createLike(shoeId, userId) {
    const { createFav, history } = this.props;
    createFav(shoeId, userId);
    history.push('/');
  }

  render() {
    const { shoe, userStatus, user } = this.props;
    if (!userStatus) return <Redirect to="/login" />;
    return (
      <div className="my-shoe">
        <h2 className="shoe-name">{shoe.name}</h2>
        <div className="shoe-con">
          <img src={shoe.image} alt={shoe.name} />
          <p className="shoe-name">{shoe.price}</p>
        </div>
        <p className="shoe-details">{shoe.description}</p>
        <div className="btns-below">
          <p><Link to="/">Back</Link></p>
          <p><button type="button" onClick={() => this.createLike(shoe.id, user.id)}>Like</button></p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shoe: getOneShoe(state),
  userStatus: getStatus(state),
  user: getUser(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchShoe,
  checkStatus,
  createFav,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shoe);
