import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';


const styles = theme => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    height: '260px',
    width: '100%',
    zIndex: 0,
    padding: '40px 0',
    backgroundColor: '#2e3131',
  },
});

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <Typography variant="caption">&copy; {new Date().getFullYear()}, Samsoedien. All rights reserved.</Typography>
      <Typography variant="caption">Website created through React frontend and Node/Express backend.</Typography>
      <Grid container justify="center" alignItems="flex-end">
        <IconButton><SocialIcon style={{ height: 30, width: 30 }} bgColor="#fff" url="https://linkedin.com/in/samsoedien" /></IconButton>
        <IconButton><SocialIcon style={{ height: 30, width: 30 }} bgColor="#fff" url="https://twitter.com/n_samsoedien" /></IconButton>
        <IconButton><SocialIcon style={{ height: 30, width: 30 }} bgColor="#fff" url="https://www.facebook.com/nsamsoedien" /></IconButton>
        <IconButton><SocialIcon style={{ height: 30, width: 30 }} bgColor="#fff" url="https://www.instagram.com/n.samsoedien/" /></IconButton>
        <IconButton><SocialIcon style={{ height: 30, width: 30 }} bgColor="#fff" url="https://github.com/samsoedien/" /></IconButton>
        {/* <IconButton><SocialIcon style={{ height: 30, width: 30 }} bgColor="#fff" url="https://stackoverflow.com/users/10244488/samsoedien" /></IconButton> */}
        <IconButton><SocialIcon style={{ height: 30, width: 30 }} bgColor="#fff" url="https://pinterest.com/n_samsoedien/" /></IconButton>
        {/* <IconButton><SocialIcon style={{ height: 30, width: 30 }} bgColor="#fff" url="https://medium.com/@samsoedien" /></IconButton> */}
      </Grid>
      <Grid container justify="center">
        <Grid item xs={11} md={8}>
          <Typography variant="caption">Thank you for visiting my page. The website is currently on continuous development, contact me through the contact form or via one of the social media icons above.</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};


Footer.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Footer);
