import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink as Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import './Navbar.css';

import ScrollWrapper from '../../wrappers/ScrollWrapper';

const styles = theme => ({

});

const Navbar = ({ classes }) => {
  const handleScroll = scrollDistance => {
    const navElement = document.getElementById('myNav');
    if (scrollDistance > 80) {
      navElement.classList.add('header-nav--shrink');
    } else {
      navElement.classList.remove('header-nav--shrink');
    }
  };

  return (
    <ScrollWrapper onWindowScroll={handleScroll}>
      <nav className="header-nav hero-banner__image--bg-elem hero-banner__image--clip" id="myNav">
        <div className="header-nav--container">
          <ul className="header-nav-list">
            <Scrollspy items={['home', 'about', 'projects', 'photography', 'contact']} currentClassName="is-current">
              <li className="header-nav-list-item"><AnchorLink offset="42" className="header-nav-link" href="#home">Home</AnchorLink></li>
              <li className="header-nav-list-item"><AnchorLink offset="42" className="header-nav-link" href="#about">About Me</AnchorLink></li>
              <li className="header-nav-list-item"><AnchorLink offset="42" className="header-nav-link" href="#projects">Projects</AnchorLink></li>
              {/* <li className="header-nav-list-item"><AnchorLink offset="42" className="header-nav-link" href="#photography">Photography</AnchorLink></li> */}
              <li className="header-nav-list-item"><AnchorLink offset="42" className="header-nav-link" href="#contact">Contact</AnchorLink></li>
            </Scrollspy>
          </ul>
        </div>
      </nav>
    </ScrollWrapper>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Navbar);
