import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

const FormConfirmation = ({ classes }) => {
  return (
    <div className={classes.root}>
      <h1>Success</h1>
    </div>
  )
}

FormConfirmation.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(FormConfirmation);
