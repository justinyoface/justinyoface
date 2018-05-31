import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { TweenMax, Power2 } from 'gsap';

class Header extends React.Component {
  state = {
    isNavOpen: false
  };

  toggleNav = () => {
    if (this.state.isNavOpen) {
      this.setState({ isNavOpen: false });
    } else {
      this.hideLinks();
      this.setState({ isNavOpen: true }, this.showLinks);
    }
  };

  closeNav = () => {
    setTimeout(() => {
      this.setState({ isNavOpen: false });
    }, 300);
  };

  hideLinks = () => {
    TweenMax.set('.header__link', { opacity: 0 });
  };

  showLinks = () => {
    TweenMax.staggerFromTo('.header__link', 0.6, {
        y: 50
      }, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut,
        delay: 0.2
      }, 0.1);
  };

  render() {
    const path = window.location.pathname;
    let currentPage;
    if (path === '/') currentPage = 'Lately';
    if (path === '/case-studies') currentPage = 'Case Studies';
    if (path === '/info') currentPage = 'Info';

    return (
      <header className="header">
        <div className="grid-noGutter-noBottom">
          <div className="col-7_sm-8" data-push-left="off-1_sm-0">
            <div className="header__mobile">
              <a
                className={classNames(
                  'header__mobile__hamburger',
                  { 'header__mobile__hamburger--open': this.state.isNavOpen }
                )}
                role="button"
                aria-label="open nav"
                onClick={this.toggleNav}
              >
                <div className="top"></div>
                <div className="mid mid--1"></div>
                <div className="mid mid--2"></div>
                <div className="bottom"></div>
              </a>

              <span className="header__mobile__currentPage">{currentPage}</span>
            </div>

            <nav
              className={classNames(
                'header__links',
                { 'header__links--open': this.state.isNavOpen }
              )}
            >
              <NavLink
                exact
                to="/"
                className="header__link"
                activeClassName="header__link--active"
                onClick={this.closeNav}>Lately</NavLink>
              <NavLink
                exact
                to="/case-studies"
                className="header__link"
                activeClassName="header__link--active"
                onClick={this.closeNav}>Case Studies</NavLink>
              <NavLink
                exact
                to="/info"
                className="header__link"
                activeClassName="header__link--active"
                onClick={this.closeNav}>Info</NavLink>
              <a
                href="https://courseworkbrand.com/"
                className="header__link"
                onClick={this.closeNav}>Shop</a>
            </nav>
          </div>
          <div className="col-3_sm-4">
            <Link
              to="/"
              className={classNames(
                'header__logo',
                { 'header__logo--open': this.state.isNavOpen }
              )}
              onClick={this.closeNav}
            >
              <img
                className="header__logo__full"
                src="/images/logo-full.svg"
                alt=""
              />
              <img
                className="header__logo__yo"
                src="/images/logo-yo.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
