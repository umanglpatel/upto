import React, { Component } from 'react';
import './App.css';
import Drawer from './containers/Drawer/Drawer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Drawer />
      </div>
    );
  }
}

export default App;
