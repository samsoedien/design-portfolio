import React, { Component, lazy, Suspense } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import {
  Grid,
  Typography,
  Button,
  Tooltip,
} from '@material-ui/core';
import { Fade } from 'react-reveal';

import Loader from '../common/Loader';
import ProjectList from './ProjectList';
import BannerImage from '../../assets/img/project-navi.JPG';
import ImageBanner from '../layout/ImageBanner';

import Project1 from '../../assets/img/tumbnails/project-pasthrees.jpg';
import Project2 from '../../assets/img/tumbnails/project-actushape.png';
import Project3 from '../../assets/img/tumbnails/project-vitality.jpg';
import Project4 from '../../assets/img/tumbnails/project-mementory.jpg';
// import Project5 from '../../assets/img/tumbnails/project-sailance.png';
import Project6 from '../../assets/img/tumbnails/project-orbi.JPG';
import Project7 from '../../assets/img/tumbnails/project-rollz.jpg';
import Project8 from '../../assets/img/tumbnails/project-aqualux.jpg';
import Project9 from '../../assets/img/tumbnails/project-sooth.jpg';
// import Project10 from '../../assets/img/tumbnails/project-robocleaner.jpg';

// import ProjectPasthrees from './project/ProjectPasthrees';
// import ProjectActushape from './project/ProjectActushape';
// import ProjectVitality from './project/ProjectVitality';
// import ProjectMementory from './project/ProjectMementory';
// // import ProjectSailance from './project/ProjectSailance';
// import ProjectOrbi from './project/ProjectOrbi';
// import ProjectAssist from './project/ProjectAssist';
// import ProjectAqualux from './project/ProjectAqualux';
// import ProjectSooth from './project/ProjectSooth';
// // import ProjectRobocleaner from './project/ProjectRobocleaner';

const ProjectPasthrees = lazy(() => import('./project/ProjectPasthrees'));
const ProjectActushape = lazy(() => import('./project/ProjectActushape'));
const ProjectVitality = lazy(() => import('./project/ProjectVitality'));
const ProjectMementory = lazy(() => import('./project/ProjectMementory'));
// const ProjectSailance = lazy(() => import('./project/ProjectSailance'));
const ProjectOrbi = lazy(() => import('./project/ProjectOrbi'));
const ProjectAssist = lazy(() => import('./project/ProjectAssist'));
const ProjectAqualux = lazy(() => import('./project/ProjectAqualux'));
const ProjectSooth = lazy(() => import('./project/ProjectSooth'));
// const ProjectRobocleaner = lazy(() => import('./project/ProjectRobocleaner'));

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pasthrees: false,
      actushape: false,
      vitality: false,
      mementory: false,
      sailance: false,
      orbi: false,
      assist: false,
      aqualux: false,
      sooth: false,
      robocleaner: false,
    };
  }

  onCallbackClick = name => {
    console.log(name);

    this.setState({
      pasthrees: false,
      actushape: false,
      vitality: false,
      mementory: false,
      sailance: false,
      orbi: false,
      assist: false,
      aqualux: false,
      sooth: false,
      robocleaner: false,
    });

    switch (name) {
      case 'pasthrees':
        this.setState(prevState => ({
          pasthrees: !prevState.pasthrees,
        }));
        break;
      case 'actushape':
        this.setState(prevState => ({
          actushape: !prevState.actushape,
        }));
        break;
      case 'vitality':
        this.setState(prevState => ({
          vitality: !prevState.vitality,
        }));
        break;
      case 'mementory':
        this.setState(prevState => ({
          mementory: !prevState.mementory,
        }));
        break;
      case 'sailance':
        this.setState(prevState => ({
          sailance: !prevState.sailance,
        }));
        break;
      case 'orbi':
        this.setState(prevState => ({
          orbi: !prevState.orbi,
        }));
        break;
      case 'assist':
        this.setState(prevState => ({
          assist: !prevState.assist,
        }));
        break;
      case 'aqualux':
        this.setState(prevState => ({
          aqualux: !prevState.aqualux,
        }));
        break;
      case 'sooth':
        this.setState(prevState => ({
          sooth: !prevState.sooth,
        }));
        break;
      case 'robocleaner':
        this.setState(prevState => ({
          robocleaner: !prevState.robocleaner,
        }));
        break;
      default:
        console.log(name);
    }
  }

  render() {
    const {
      pasthrees,
      actushape,
      vitality,
      mementory,
      // sailance,
      orbi,
      assist,
      aqualux,
      sooth,
      // robocleaner,
    } = this.state;
    return (
      <section className="projects" id="projects">
        <ImageBanner bannerImage={BannerImage} />

        <Grid container justify="center">
          <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>
            <Fade bottom cascade>
              <article className="projects__article">
                <Typography variant="h3">Design Projects</Typography>
                <div className="horizontal-line" />
                <Typography variant="body1" paragraph>A small selection of design projects are displayed in an overview. Click on the desired project panel to expand the project description underneath. Additionally will a paper portfolio be published soon.</Typography>
              </article>
              <Grid container justify="center">
                <Tooltip title="Coming Soon, Stay Tuned!" placement="top">
                  <Button variant="outlined" color="primary">Download PDF Portfolio</Button>
                </Tooltip>
              </Grid>
            </Fade>
          </Grid>
        </Grid>

        <ProjectList onCallbackClick={this.onCallbackClick} />

        <Suspense fallback={<Loader />}>
          <Collapse isOpened={pasthrees}>
            <ProjectPasthrees id="pasthrees" projectImage={Project1} />
          </Collapse>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Collapse isOpened={actushape}>
            <ProjectActushape id="actushape" projectImage={Project2} />
          </Collapse>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Collapse isOpened={vitality}>
            <ProjectVitality id="vitality" projectImage={Project3} />
          </Collapse>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Collapse isOpened={mementory}>
            <ProjectMementory id="mementory" projectImage={Project4} />
          </Collapse>
        </Suspense>
        {/* <Suspense fallback={<Loader />}>
          <Collapse isOpened={sailance}>
            <ProjectSailance id="sailance" projectImage={Project5} />
          </Collapse>
        </Suspense> */}
        <Suspense fallback={<Loader />}>
          <Collapse isOpened={orbi}>
            <ProjectOrbi id="orbi" projectImage={Project6} />
          </Collapse>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Collapse isOpened={assist}>
            <ProjectAssist id="assist" projectImage={Project7} />
          </Collapse>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Collapse isOpened={aqualux}>
            <ProjectAqualux id="aqualux" projectImage={Project8} />
          </Collapse>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Collapse isOpened={sooth}>
            <ProjectSooth id="sooth" projectImage={Project9} />
          </Collapse>
        </Suspense>
        {/* <Suspense fallback={<Loader />}>
          <Collapse isOpened={robocleaner}>
            <ProjectRobocleaner id="robocleaner" projectImage={Project10} />
          </Collapse>
        </Suspense> */}
      </section>
    );
  }
}

export default Projects;
