import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import NoMatch from './NoMatch';
import Profile from './Profile';
import Navigation from './Navigation';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/profile/:username" component={Profile} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
