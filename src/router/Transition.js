import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Transition extends React.Component {
  state = {
    lastPageUrl: ''
  };

  componentDidMount() {
    this.setState({
      lastPageUrl: window.location.href
    });
  }

  shouldComponentUpdate() {
    return this.state.lastPageUrl !== window.location.href;
  }

  componentDidUpdate() {
    this.setState({
      lastPageUrl: window.location.href
    });
  }

  render() {
    return (
      <TransitionGroup
        component="div"
        className="transitionGroup"
      >
        <CSSTransition
          key={this.props.location}
          classNames="page" // prefix for transition states
          timeout={{
           enter: 400,
           exit: 0
          }}
        >
          {this.props.children}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Transition;
