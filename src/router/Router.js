import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Transition from './Transition';

import Home from '../pages/Home';
import CaseStudies from '../pages/CaseStudies';
import About from '../pages/About';

const Router = withRouter(({location}) => (
  <Transition location={location.pathname}>
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/case-studies" component={CaseStudies} />
      <Route exact path="/info" component={About} />
      <Redirect to="/" />
    </Switch>
  </Transition>
));

export default Router;
