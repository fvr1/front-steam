import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import GamesPage from '../pages/Games';
import StatsPage from '../pages/Stats';
import StorePage from '../pages/Store';
import NavLayout from '../layouts/Nav';

const history = createBrowserHistory();

export default () => (
  <div>
    <Router history={history}>
      <NavLayout>
        <Switch>
          <Route exact path="/" component={GamesPage} />
          <Route path="/stats" component={StatsPage} />
          <PrivateRoute path="/store" component={StorePage} />
        </Switch>
      </NavLayout>
    </Router>
  </div>
);
