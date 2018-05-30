import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import ScrollToTop from './router/ScrollToTop';
import App from './App';
import './styles/styles.css';

ReactDOM.render((
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
