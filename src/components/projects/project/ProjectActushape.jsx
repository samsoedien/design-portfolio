import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';
import { Fade } from 'react-reveal';

import ImageBanner from '../../layout/ImageBanner';
import Video from '../../../assets/videos/Exploration_Affordances_Control_interface_V1.1.mp4';
import Image1 from '../../../assets/img/project-actushape/IMG_0884.JPG';
import Image2 from '../../../assets/img/project-actushape/IMG_1354.JPG';
import Image3 from '../../../assets/img/project-actushape/IMG_1528.JPG';
import PDF from '../../../assets/pdf/ActuShape__an_Approach_towards_Affordance-based_Control_Delegation_Interfaces_in_Autonomous_Systems_Samsoedien_V2.0.pdf';

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

const ProjectActushape = ({ classes }) => (
  <section className="project-item">
    <ImageBanner bannerImage={Image1} />

    <Fade bottom cascade>
      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>

          <Grid container justify="space-between">

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <article className="project__article">
                <Typography variant="h6">Project ActuShape</Typography>
                <Typography variant="body2" paragraph>Envisioning a future where autonomous driving will transform our means of transportation, maintaining a sense of control gives us capabilities of having freedom to make our own decisions. A novel approach is used to investigate the degree of shared control through a human-centred design process, to seamlessly transition to a desirable future of autonomous driving.</Typography>
                <Typography variant="body2" paragraph>Read the research paper to find more about research results of testing the designed prototype.</Typography>
              </article>
              <Grid container justify="center">
                <Button href={PDF} variant="outlined" color="primary" className="button">View Paper</Button>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <img src={Image2} alt="" className={classes.projectImage} />
              <img src={Image3} alt="" className={classes.projectImage} />
            </Grid>

          </Grid>
          <video src={Video} className={classes.projectVideo} autoplay="autoplay" loop="loop" muted="muted"></video>
        </Grid>
      </Grid>
      <Divider className="divider" />
    </Fade>
  </section>
);


ProjectActushape.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProjectActushape);
