import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Suport from './pages/Suport';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/suport" exact component={Suport} />
    </Switch>
  );
}

export default Routes;
