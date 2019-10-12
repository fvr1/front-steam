import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Login from '../containers/Login';

// eslint-disable-next-line react/prefer-stateless-function
export default class GamesPage extends Component {
  render() {
    return (
      <div>
        <Typography variant="h3">GamesPage</Typography>
        <Login />
      </div>
    );
  }
}

GamesPage.propTypes = {
};
