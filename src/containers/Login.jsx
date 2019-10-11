import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    return (
      <div>
        <button onClick={this.handleClick}>
          Authenticate
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  auth: (user, pass) => dispatch(authenticate(user, pass)),
});

export default connect(() => ({}), mapDispatchToProps)(Login);
