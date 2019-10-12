import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button, Typography } from '@material-ui/core';
import { authenticate } from '../store/actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { auth } = this.props;
    auth('username', 'pass');
  }

  render() {
    const { user } = this.props;
    const isLoggedIn = _.isEmpty(user) ? 'Logged in' : 'Not logged in';

    return (
      <div>
        <Button onClick={this.handleClick}>
          Authenticate
        </Button>
        <Typography>{isLoggedIn}</Typography>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  auth: (user, pass) => dispatch(authenticate(user, pass)),
});

export default connect(() => ({}), mapDispatchToProps)(Login);
