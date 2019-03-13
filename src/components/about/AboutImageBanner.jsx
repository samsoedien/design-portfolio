import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// import ScrollWrapper from '../../wrappers/ScrollWrapper';

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
    // backgroundAttachment: 'fixed',
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
  // const handleScroll = scrollDistance => {
  //   const parallaxItem = document.getElementById('myDiv');
  //   parallaxItem.style.transform = `translate(0px, ${scrollDistance / 1.0}px)`;
  // };

  return (
    // <ScrollWrapper onWindowScroll={handleScroll}>
    <div className={classes.imageBanner} >
      <div
        id="myDiv"
        className={classes.imageBannerBackground}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {children}
      </div>
    </div>
    // </ScrollWrapper>
  );
};

AboutImageBanner.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired, // eslint-disable-line
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(AboutImageBanner);
