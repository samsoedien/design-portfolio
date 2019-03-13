import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  linkedInCard: {
    position: 'fixed',
    right: '24px',
    top: '50%',
    zIndex: 200,
  },
});

const LinkedInComponent = ({ classes }) => (
  <div className={classes.linkedInCard}>
    <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="nl_NL" data-type="vertical" data-theme="light" data-vanity="samsoedien"><a class="LI-simple-link" href="https://nl.linkedin.com/in/samsoedien?trk=profile-badge">Noerani Samsoedien</a></div>
  </div>
);

LinkedInComponent.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(LinkedInComponent);