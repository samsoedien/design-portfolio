import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

// import IMG1 from '../../assets/img/DSC_1870_edit.jpg';
import IMG1 from '../../assets/img/project-navi-copy.jpg';

const styles = theme => ({
  root: {},
  landingPageImage: {
    position: 'relative',
    // top: 0,
    // left: 0,
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    backgroundImage: `url(${IMG1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  landingPageOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .2), rgba(0, 0, 0, .7))',
    zIndex: 200,
  },
  title: {
    fontfamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    fontSize: '80px',
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: '1.2em',
    color: '#fff',
    zIndex: 500,
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  caption: {
    fontfamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: '1.2em',
    color: '#fff',
    zIndex: 500,
    position: 'absolute',
    top: '82%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  positioning: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  loader: {
    color: 'white',
    zIndex: 500,
  },
});

class LandingPage extends Component {
  componentDidMount() {

  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.landingPageImage}>
          <div className={classes.landingPageOverlay} />
          <div className={classes.positioning}>
            <CircularProgress
              value={70}
              size={180}
              thickness={3}
              className={classes.loader}
            />
          </div>
          <p className={classes.title}>Welcome</p>
          <p className={classes.caption}>The content of this page will be loaded. This may take a minute...</p>
        </div>
      </div>
    )
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(LandingPage);
