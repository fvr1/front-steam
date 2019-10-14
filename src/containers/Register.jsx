import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TextField, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { register } from '../store/actions/auth';
import LoadingButton from '../components/LoadingButton';

const styles = () => ({
  container: {
    marginTop: 120,
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    width: '60%',
    padding: '4%',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    minWidth: '70%',
  },
  submitButton: {
    width: '20%',
    minWidth: 60,
  },
});


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleLogIn() {
    const { signUp } = this.props;
    const { username, password, confirmPassword } = this.state;
    signUp(username, password, confirmPassword);
  }

  render() {
    const { loading, classes } = this.props;
    const { username, password, confirmPassword } = this.state;

    return (
      <div className={classes.container}>
        <Paper className={classes.form}>
          <TextField
            id="username"
            name="username"
            label="Username"
            value={username}
            onChange={this.handleChange}
            margin="normal"
            className={classes.input}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
            className={classes.input}
            margin="normal"
            type="password"
          />
          <TextField
            id="confirm-password"
            name="confirmPassword"
            label="Confirm password"
            value={confirmPassword}
            onChange={this.handleChange}
            className={classes.input}
            margin="normal"
            type="password"
          />
          <LoadingButton
            onClick={this.handleLogIn}
            loading={loading}
            className={classes.submitButton}
            color="primary"
          >
            LogIn
          </LoadingButton>
        </Paper>
      </div>
    );
  }
}

Register.propTypes = {
  signUp: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired,
  // history: PropTypes.object.isRequired,
};

Register.defaultProps = {
  loading: false,
};

const mapStoreToProps = (store) => ({
  user: store.user,
  loading: store.loading,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user, pass) => dispatch(register(user, pass)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(
  withRouter(withStyles(styles)(Register))
);
