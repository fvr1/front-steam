import React, { Component } from 'react';
import NavLayout from '../layouts/Nav';

// eslint-disable-next-line react/prefer-stateless-function
export default class GamesPage extends Component {
  render() {
    return (
      <div>
        <NavLayout>
          <h1>GamesPage</h1>
        </NavLayout>
      </div>
    );
  }
}

GamesPage.propTypes = {
};
