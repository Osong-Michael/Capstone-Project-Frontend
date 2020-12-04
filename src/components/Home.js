/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Ctn from '../CSS_modules/Container.module.css';
import { getShoes, getShoesPending } from '../reducers/shoesReducer';
import fetchShoes from '../actions/shoesAction';

class Home extends Component {
  componentDidMount() {
    const { fetchShoes } = this.props;
    fetchShoes();
  }

  render() {
    const { shoes } = this.props;
    // eslint-disable-next-line arrow-body-style
    const shoe = shoes.map(shoe => {
      return (
        <>
          <Link to={`shoe/${shoe.id}`}>
            <div className={Ctn.img}><img src={shoe.image} alt={shoe.name} /></div>
          </Link>
          <p>{shoe.name}</p>
        </>
      );
    });

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
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchShoes,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
