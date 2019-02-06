import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import MapContainer from '../containers/MapContainer';

import '../static/css/main.css';
class App extends Component {
  render() {
    return (
      <div className="App app_background">
        <Switch>
          <Route path="/suggest" component={MapContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;