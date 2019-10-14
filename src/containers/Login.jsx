import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TextField, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { authenticate } from '../store/actions/auth';
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


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
    const { auth, history } = this.props;
    const { username, password } = this.state;
    auth(username, password).then(() => {
      history.push('/');
    });
  }


  render() {
    const { loading, classes } = this.props;
    const { username, password } = this.state;

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

Login.propTypes = {
  auth: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

Login.defaultProps = {
  loading: false,
};

const mapStoreToProps = (store) => ({
  user: store.user,
  loading: store.loading,
});

const mapDispatchToProps = (dispatch) => ({
  auth: (user, pass) => dispatch(authenticate(user, pass)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Login)));
