import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { Fade } from 'react-reveal';

// import ImageBanner from '../../layout/ImageBanner';

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

const ProjectRobocleaner = ({ classes }) => (
  <section className="project-item">
    {/* <ImageBanner bannerImage={projectImage} /> */}

    <Grid container justify="center">
      <Fade bottom cascade>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} md={5} lg={4} xl={3}>
            <Grid container justify="center">
              <Grid item xs={11} sm={10} md={8} lg={7}>
                <article className="project__article">
                  <Typography variant="h6">Project Robocleaner</Typography>
                  <Typography variant="body2" paragraph>This project was an excersize to create a new robot vacuum cleaner for Karcher, while optimising the product for injection molding and DFA.</Typography>
                </article>
              </Grid>
              <Grid item xs={11} sm={10} md={8} lg={7}>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Grid>
  </section>
);


ProjectRobocleaner.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProjectRobocleaner);
