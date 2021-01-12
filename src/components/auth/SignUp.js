/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import signUpUser, { checkStatus } from '../../actions/authActions';
import Ctn from '../../assets/css/Container.module.css';
import { getStatus, getLoading } from '../../reducers/authReducer';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password_confirmation: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { checkStatus } = this.props;
    checkStatus();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { signUpUser } = this.props;
    signUpUser(this.state);
    event.target.reset();
    this.resetState();
  }

  resetState() {
    this.setState({
      username: '',
      password: '',
      password_confirmation: '',
    });
  }

  render() {
    const { username, password, password_confirmation } = this.state;
    const { userStatus, loading } = this.props;
    if (userStatus !== '') return <Redirect to="/" />;
    return (
      <>
        {loading && (
          <div className={Ctn.loading}>
            <RingLoader loading={loading} />
          </div>
        )}
        <div>
          <p className={Ctn.txt}>Welcome to the One stop for all your Favourite Jordan Sneakers</p>
          <div className={Ctn.form}>
            <h4 className={Ctn.txt}>SIGN UP</h4>
            <form onSubmit={this.handleSubmit}>
              <div className={Ctn.div}>
                <label htmlFor="username" className={Ctn.label}>
                  Username
                  <input type="text" name="username" value={username} onChange={this.handleChange} required />
                </label>
              </div>
              <div className={Ctn.div}>
                <label htmlFor="password" className={Ctn.label}>
                  Password
                  <input type="password" name="password" value={password} onChange={this.handleChange} required />
                </label>
              </div>
              <div className={Ctn.div}>
                <label htmlFor="password_confirmation" className={Ctn.label}>
                  Confirm Password
                  <input type="password" name="password_confirmation" value={password_confirmation} onChange={this.handleChange} required />
                </label>
              </div>
              <div className={Ctn.btn}><button type="submit">Sign Up</button></div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

SignUp.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  userStatus: PropTypes.string.isRequired,
  checkStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userStatus: getStatus(state),
  loading: getLoading(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signUpUser,
  checkStatus,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
