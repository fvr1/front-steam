import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route {...rest}>
    {_.isEmpty(user) ? (<Component />) : (<Redirect to="/" />)}
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
