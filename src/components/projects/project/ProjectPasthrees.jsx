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

import Video from '../../../assets/videos/IMG_3025.MOV';
import Image1 from '../../../assets/img/pasthree_interface_mockup.jpg';
import Image2 from '../../../assets/img/DSC_7350.JPG';
import PDF from '../../../assets/pdf/FMP_M2.2_Report_Samsoedien_V4.4_Spread.pdf';

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

const ProjectPasthrees = ({ classes }) => (
  <section className="project-item">
    <ImageBanner bannerImage={Image1} />

    <Fade bottom cascade>
      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>

          <Grid container justify="space-between">

            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
              <article className="project__article">
                <Typography variant="h6">Project Pasthrees</Typography>
                <Typography variant="body2" paragraph>Pasthrees is the result of a graduation project to increase the adoption rate of food printing. The current state of food printing technology is being investigated and will be employed as a value creator for culinary businesses by reducing the complexity the technology and making it effortless to implement in the food professional’s own business. An online platform service is designed that provide user experiences to make food printing technology more seamlessly integrated as a kitchen appliance in the culinary sector. The platform provides printable shapes as building blocks can be downloaded and printed as part of a pastry dish. Food printing is positioned as the new kitchen revolution and a business plan is made as a market-entry-strategy. </Typography>
              </article>
              <Grid container justify="center">
                <Button href={PDF} variant="outlined" color="primary" className="button">View Report</Button>
              </Grid>
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


ProjectPasthrees.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProjectPasthrees);
