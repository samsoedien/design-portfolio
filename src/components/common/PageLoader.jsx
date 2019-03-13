import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    color: '#000',
    zIndex: 1000,
  },
});

const PageLoader = ({ classes }) => <div className={classes.root} />;

PageLoader.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};


export default withStyles(styles)(PageLoader)