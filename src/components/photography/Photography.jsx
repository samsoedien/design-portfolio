import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Fade } from 'react-reveal';

import GridList from './GridList';
import ImageBanner from '../layout/ImageBanner';
import AboutImage from '../../assets/img/DSC_1753.JPG';

const styles = theme => ({
  root: {},
});

const Photography = ({ classes }) => (
  <section className={classes.root} id="photography">
    <ImageBanner bannerImage={AboutImage} />

    <Grid container justify="center">
      <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>
        <Fade bottom cascade>
          <article className="about__article">
            <Typography variant="h3">Photography</Typography>
            <div className="horizontal-line" />
            <Typography variant="body1" paragraph>Coming Soon...</Typography>
          </article>
        </Fade>
      </Grid>
    </Grid>
    <GridList />
  </section>
);

Photography.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Photography);
