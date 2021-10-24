import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Suport from './pages/Suport';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/suport" exact component={Suport} />
    </Switch>
  );
}

export default Routes;
