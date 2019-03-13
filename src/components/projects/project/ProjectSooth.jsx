import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { Fade } from 'react-reveal';

import ImageBanner from '../../layout/ImageBanner';

import Image1 from '../../../assets/img/project-sooth.jpg';
// import Image2 from '../../../assets/img/project-sooth.jpg';
import Video from '../../../assets/videos/TS_AnimationV1.2.mp4';

const styles = theme => ({
  projectImage: {
    width: '100%',
    minWidth: '100%',
    height: 'auto',
    marginTop: '12px',
  },
  projectVideo: {
    width: '100%',
    minWidth: '100%',
    height: 'auto',
    margin: '12px 0',
  },
});

const ProjectSooth = ({ classes }) => (
  <section className="project-item">
    <ImageBanner bannerImage={Image1} />

    <Fade bottom cascade>
      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>

          <Grid container justify="space-between">

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <article className="project__article">
                <Typography variant="h6">Project Sooth</Typography>
                <Typography variant="body2" paragraph>When parents gets their first newborn, there is often a lot of uncertainty and insecurity in how to raise a child due to inexperience. As a result from a design brief from Philips, I designed Sooth as a product line up to play in on the experience of soothing the parents by measuring and communicating the healthy state of the newborn. An interactive soother and bottle were optimised for mass production and a business case was made targetting young insecure parents.</Typography>
              </article>
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <img src={Image1} alt="" className={classes.projectImage} />
            </Grid>

          </Grid>
          <video src={Video} className={classes.projectVideo} autoplay="autoplay" loop="loop" muted="muted"></video>
        </Grid>
      </Grid>
    </Fade>
  </section>
);


ProjectSooth.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProjectSooth);
