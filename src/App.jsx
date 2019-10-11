import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './containers/Login';

function App(props) {
  const { user, loading } = props;
  const isAuthenticated = user.username ? 'auth working' : 'not authenticated';
  return (
    <div className="App">
      <header className="App-header">
        Hola
      </header>
      <Login />
      <p>{isAuthenticated}</p>
      <p>{loading ? 'true' : 'false'}</p>
    </div>
  );
}

App.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    token: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
};

App.defaultProps = {
  user: {},
};

const mapStateToProps = (store) => ({
  user: store.user,
  loading: store.loading,
});

export default connect(mapStateToProps)(App);
