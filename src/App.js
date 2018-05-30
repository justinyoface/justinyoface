import React from 'react';

import Header from './components/Header';
import Router from './router/Router';

class App extends React.Component {
  componentDidMount() {
    document.body.classList.remove('loading');
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router />
      </React.Fragment>
    );
  }
}

export default App;
