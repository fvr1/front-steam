import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route {...rest}>
    {user.logged ? (<Component />) : (<Redirect to="/" />)}
  </Route>
);

PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(PrivateRoute);
