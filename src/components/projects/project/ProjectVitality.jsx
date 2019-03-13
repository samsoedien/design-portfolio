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
import Image1 from '../../../assets/img/project-vitality.jpg';
import Image2 from '../../../assets/img/DSC_1843.jpg';
import Video from '../../../assets/videos/Vitality_Concept_Video.mp4';

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

const Vitality = ({ classes }) => (
  <section className="project-item">
    <ImageBanner bannerImage={Image1} />

    <Fade bottom cascade>
      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>

          <Grid container justify="space-between">

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <article className="project__article">
                <Typography variant="h6">Project Vitality</Typography>
                <Typography variant="body2" paragraph>Regarding our work culture, we often sit for long periods of time and maintain a sedentary life-style. Focussing on intrinsic motivating people to take breaks more often, a personalised products was designed that visualise data of the users' health in a tangible way. When the user is inactive for a long time, it peripherally draws the attention of the user, wanting to be stimulated with ‘breaks’. Through gamification, awareness over people’s vitality in the office was envisioned, thus reducing the chance of health issues such as burnouts.</Typography>
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


Vitality.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Vitality);
