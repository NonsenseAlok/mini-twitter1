// src/routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Timeline from './components/Timeline';
import UserProfile from './components/UserProfile';

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/profile/:username" component={UserProfile} />
      {/* Add more routes as needed */}
    </Switch>
  );
}

export default Routes;
