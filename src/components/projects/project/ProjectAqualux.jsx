import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Divider,
} from '@material-ui/core';
import { Fade } from 'react-reveal';

import ImageBanner from '../../layout/ImageBanner';

import Image1 from '../../../assets/img/Alle_Brainstormschetsen.jpg';
import Image2 from '../../../assets/img/project-aqualux1.jpg';
import Video from '../../../assets/videos/BE_Productvoorstel1.mp4';

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

const ProjectAqualux = ({ classes }) => (
  <section className="project-item">
    <ImageBanner bannerImage={Image1} />

    <Fade bottom cascade>
      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>

          <Grid container justify="space-between">

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <article className="project__article">
                <Typography variant="h6">Project Aqualux</Typography>
                <Typography variant="body2" paragraph>Bath screens are often used in hotel rooms in shower and bathing combinations. However, contemporary bath screens had the issue of providing a nice aesthetical look while maintaining a waterproof functional design. In collaboration with Aqualux a double snap-hinge was engineered for their new line-up bath screen products. This hinge allowed the screen to fold both ways while remaining a watertight sealing between the panels.</Typography>
              </article>
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <img src={Image2} alt="" className={classes.projectImage} />
            </Grid>

          </Grid>
          <video src={Video} className={classes.projectVideo} autoplay="autoplay" loop="loop" muted="muted"></video>
        </Grid>
      </Grid>
      <Divider className="divider" />
    </Fade>
  </section>
);


ProjectAqualux.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProjectAqualux);
