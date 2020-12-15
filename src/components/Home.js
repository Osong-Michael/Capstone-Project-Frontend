/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Ctn from '../css/Container.module.css';
import { getShoes, getShoesPending } from '../reducers/shoesReducer';
import { getStatus } from '../reducers/authReducer';
import fetchShoes from '../actions/shoesAction';
import { checkStatus } from '../actions/authActions';
import ShoeList from './ShoeList';

class Home extends Component {
  componentDidMount() {
    const { fetchShoes, checkStatus } = this.props;
    fetchShoes();
    checkStatus();
  }

  render() {
    const { shoes, userStatus } = this.props;
    const shoe = shoes.map(shoe => (<ShoeList shoe={shoe} key={Math.random()} />));

    if (!userStatus) return <Redirect to="/login" />;
    return (
      <>
        <div>
          <h2 className={Ctn.welcome_text}>Welcome to your Sneaker Collection</h2>
        </div>
        <div className={Ctn.shoes}>
          {shoe}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  shoes: getShoes(state),
  loading: getShoesPending(state),
  userStatus: getStatus(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchShoes,
  checkStatus,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
