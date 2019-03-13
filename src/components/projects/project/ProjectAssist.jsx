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

import Video from '../../../assets/videos/Werkingsmodel_testrit.mp4';
import Image2 from '../../../assets/img/project-rollz.jpg';
import Image1 from '../../../assets/img/Brainstorm_Sketches_Opgewerkt.jpg';


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

const ProjectAssist = ({ classes }) => (
  <section className="project-item">
    <ImageBanner bannerImage={Image1} />

    <Fade bottom cascade>
      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>

          <Grid container justify="space-between">

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <article className="project__article">
                <Typography variant="h6">Graduation Project Rollz Assist</Typography>
                <Typography variant="body2" paragraph>Elderly people with physical health problems do often not use tools such as mobility scooters due to the feeling of stigmatisation and sympathy they receive from society. Through a hybrid design between a mobility scooter and a electric bicycle, elderly are empowered by having an alternative mobility aid to be independent in their lives again. When cycling there is the possibility to lean when cornering, thanks to the featuring leaning tilt mechanism. This allows the user to have a natural cycling experience while having the stationary stability because of the three wheels.</Typography>
              </article>
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <img src={Image2} alt="" className={classes.projectImage} />
            </Grid>

          </Grid>
          <video src={Video} className={classes.projectVideo} autoPlay="autoplay" loop="loop" muted="muted"></video>
        </Grid>
      </Grid>
      <Divider className="divider" />
    </Fade>
  </section>
);


ProjectAssist.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProjectAssist);
