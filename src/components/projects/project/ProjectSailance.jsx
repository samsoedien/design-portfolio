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

import Image1 from '../../../assets/img/project-sailance.png';
// import Image2 from '../../../assets/img/project-sailance.png';
// import PDF from '../../../assets/pdf/Sailance_Business_Plan_FINAL.pdf';

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

const ProjectSailance = ({ classes }) => (
  <section className="project-item">
    <ImageBanner bannerImage={Image1} />


    <Fade bottom cascade>
      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>

          <Grid container justify="space-between">

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <article className="project__article">
                <Typography variant="h6">Project Sailance</Typography>
                <Typography variant="body2" paragraph>Project Sailance is the result of a design and business case, finding opportunities in market-ready applications of flexible thin-film solar cells. A proposition was created to integrate solar cells in sails to generate sustainable energy. Focussing on a high-end niche market of sailing, this allow to showcase the capabilities of this cutting-edge technology and would function as a catalyst for more investments in thin-film solar cells. </Typography>
              </article>
              {/* <Grid container justify="center">
                <Button href={PDF} variant="outlined" color="primary" className="button">View Business Case</Button>
              </Grid> */}
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <img src={Image1} alt="" className={classes.projectImage} />
            </Grid>

          </Grid>
          {/* <video src={Video} className="project__video" autoplay="autoplay" loop="loop" muted="muted"></video> */}
        </Grid>
      </Grid>
      <Divider className="divider" />
    </Fade>
  </section>
);


ProjectSailance.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProjectSailance);
