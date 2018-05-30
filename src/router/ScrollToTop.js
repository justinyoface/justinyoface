import React from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      setTimeout(() => window.scrollTo(0, 0), 0);
    }
  }

  render() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
