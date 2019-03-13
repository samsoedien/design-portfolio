import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Zoom } from 'react-reveal';

import ProjectPanel from './ProjectPanel';

import BannerImage from '../../assets/img/project-navi.JPG';

import ImageBanner from '../layout/ImageBanner';
import Project1 from '../../assets/img/tumbnails/project-pasthrees.jpg';
import Project2 from '../../assets/img/tumbnails/project-actushape.png';
import Project3 from '../../assets/img/tumbnails/project-vitality.jpg';
import Project4 from '../../assets/img/tumbnails/project-mementory.jpg';
import Project5 from '../../assets/img/tumbnails/project-sailance.png';
import Project6 from '../../assets/img/tumbnails/project-orbi.JPG';
import Project7 from '../../assets/img/tumbnails/project-rollz.jpg';
import Project8 from '../../assets/img/tumbnails/project-aqualux.jpg';
import Project9 from '../../assets/img/tumbnails/project-sooth.jpg';
import Project10 from '../../assets/img/tumbnails/project-robocleaner.jpg';

const styles = theme => ({
  root: {
    margin: '24px 0',
  },
  projectsArticle: {
    margin: '12px 0',
  },
});

const ProjectList = ({ onCallbackClick, classes }) => {
  const onHandleClick = name => {
    onCallbackClick(name);
  };
  return (
    <div className={classes.root}>
      <Zoom>
        <Grid container justify="center" spacing={24}>
          <ProjectPanel image={Project1} onHandleClick={onHandleClick} name="pasthrees" caption={'"Revolutionise the Kitchen."'} />
          <ProjectPanel image={Project2} onHandleClick={onHandleClick} name="actushape" caption={'"Delegate Autonomy."'} />
          <ProjectPanel image={Project3} onHandleClick={onHandleClick} name="vitality" caption={'"Gamify the Office."'} />
          <ProjectPanel image={Project4} onHandleClick={onHandleClick} name="mementory" caption={'"Bonding Families."'} />
          <ProjectPanel image={Project5} onHandleClick={onHandleClick} name="sailance" caption={'"An Energetic Future."'} />
          <ProjectPanel image={Project6} onHandleClick={onHandleClick} name="orbi" caption={'"Memorable Visits"'} />
          <ProjectPanel image={Project7} onHandleClick={onHandleClick} name="assist" caption={'"Empowering Mobility."'} />
          <ProjectPanel image={Project8} onHandleClick={onHandleClick} name="aqualux" caption={'"Waterproof Engineering."'} />
          <ProjectPanel image={Project9} onHandleClick={onHandleClick} name="sooth" caption={'"Soothing Experiences."'} />
          {/* <ProjectPanel image={Project10} onHandleClick={onHandleClick} name="robocleaner" caption={'"Complex Assemblies."'} /> */}
        </Grid>
      </Zoom>
    </div>
  );
};

ProjectList.propTypes = {
  onCallbackClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProjectList);
