import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { authenticate, logout } from '../store/actions/auth';
import LoadingButton from '../components/LoadingButton';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogIn(event) {
    const { auth } = this.props;
    auth('username', 'pass');
  }

  handleLogOut(event) {
    const { logOut } = this.props;
    logOut();
  }

  render() {
    const { user, loading } = this.props;
    const isLoggedIn = user.logged ? 'Logged in' : 'Not logged in';
    const logButton = user.logged
      ? (<Button onClick={this.handleLogOut}> LogOut </Button>)
      : (<LoadingButton onClick={this.handleLogIn} loading={loading}> LogIn </LoadingButton>);

    return (
      <div>
        {logButton}
        <Typography>{isLoggedIn}</Typography>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  user: PropTypes.object,
  loading: PropTypes.bool,
};

Login.defaultProps = {
  user: {},
  loading: false,
};

const mapStoreToProps = (store) => ({
  user: store.user,
  loading: store.loading,
});

const mapDispatchToProps = (dispatch) => ({
  auth: (user, pass) => dispatch(authenticate(user, pass)),
  logOut: () => dispatch(logout()),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
