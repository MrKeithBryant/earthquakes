import React from 'react';
import moment from 'moment';
import earthquakes from './src/data/earthquake.js';
import EarthquakeList from 'EarthquakeList.js';

import './styles/App.css';

export default app export EarthquakeList; class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="title">
          <div className="my-header">
            Earthquakes!
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
