// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Registration from './components/registration';
import Login from './components/login';
import Timeline from './components/timeline';
import TweetCreation from './components/TweetCreation';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/create-tweet" component={TweetCreation} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default App;
