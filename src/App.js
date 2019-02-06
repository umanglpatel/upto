import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Drawer from './containers/Drawer/Drawer';
import Activity from './containers/Activity/Activity';
import Profile from './containers/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Drawer>
          <Switch>
            <Route path="/profile" exact component={Profile} />
            <Route path="/activity" exact component={Activity} />
            <Route path="/" exact component={Activity} />
          </Switch>
        </Drawer>
      </div>
    );
  }
}

export default App;
