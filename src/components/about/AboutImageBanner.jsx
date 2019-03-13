import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  imageBanner: {
    position: 'relative',
    marginBottom: '24px',
    height: '640px',
    width: '100%',
    overflow: 'hidden',
  },
  imageBannerBackground: {
    height: 'inherit',
    width: 'inherit',
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
  },
  '@media screen and (min-width: 960px)': {
    imageBanner: {
      height: '800px',
    },
  },
  '@media screen and (max-width: 640px)': {
    imageBannerBackground: {      
      height: '400px',
    },
  },
});

const AboutImageBanner = ({ bannerImage, children, classes }) => {
  return (
    <div className={classes.imageBanner}>
      <div
        className={classes.imageBannerBackground}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {children}
      </div>
    </div>
  );
};

AboutImageBanner.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired, // eslint-disable-line
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(AboutImageBanner);
