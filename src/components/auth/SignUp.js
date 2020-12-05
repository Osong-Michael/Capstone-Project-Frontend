/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signUpUser from '../../actions/authActions';
import Ctn from '../../CSS_modules/Container.module.css';

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
    const { history } = this.props;
    history.push('/');
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
    return (
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
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  signUpUser,
}, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
