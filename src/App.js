import React, {Component} from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import {Provider} from 'react-redux';

import store from './store';

import Navigation from './navigation.jsx';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigation />
        </Router>
      </Provider>
    );
  }
}

export default App;
