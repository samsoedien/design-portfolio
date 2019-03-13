import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import ScrollWrapper from '../../wrappers/ScrollWrapper';

// import Background from '../../assets/img/arts-build-close-up-273230.jpg';

const styles = theme => ({
  imageBanner: {
    position: 'relative',
    marginBottom: '24px',
    // height: '320px',
    width: '100%',
    overflow: 'hidden',
  },
  imageBannerBackground: {
    height: 'inherit',
    width: 'inherit',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
});

const ImageBanner = ({ bannerHeight, bannerImage, children, classes }) => {
  const handleScroll = scrollDistance => {
    const parallaxItem = document.getElementById('myDiv');
    parallaxItem.style.transform = `translate(0px, ${scrollDistance / 1.1}px)`;
  };

  return (
    <ScrollWrapper onWindowScroll={handleScroll}>
    <div className={classes.imageBanner} style={{height: bannerHeight }}>
      <div
        id="myDiv"
        className={classes.imageBannerBackground}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {children}
      </div>
    </div>
    </ScrollWrapper>
  );
};


ImageBanner.defaultProps = {
  bannerHeight: 320,
};

ImageBanner.propTypes = {
  bannerHeight: PropTypes.string,
  bannerImage: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired, // eslint-disable-line
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ImageBanner);
