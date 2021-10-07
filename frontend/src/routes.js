import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Suport from './pages/Suport';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Suport" component={Suport} />
    </Switch>
  )
}

export default Routes
