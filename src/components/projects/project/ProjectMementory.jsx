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
import Image1 from '../../../assets/img/project-mementory.jpg';
import Image2 from '../../../assets/img/DSC_2824.jpg';
import Video from '../../../assets/videos/MEMY_Concept_Video_V2.0.mp4';

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

const ProjectMementory = ({ classes }) => (
  <section className="project-item">
    <ImageBanner bannerImage={Image1} />

    <Fade bottom cascade>
      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>

          <Grid container justify="space-between">

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <article className="project__article">
                <Typography variant="h6">Project Mementory</Typography>
                <Typography variant="body2" paragraph>Project Mementory is a result of a project focussing on Dementia. Family members often have to go through the difficult process of saying goodbye to their close ones. Mementory was designed as a communication tool in (re)connecting the person with Dementia with the family, using an implicit form of non-verbal communication. Inspired by the game memory playing on motor-skills of touch rather than cognition, an intimate relationship can be build between patient and family.</Typography>
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

ProjectMementory.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProjectMementory);
