import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Fade } from 'react-reveal';

import AboutImageBanner from './AboutImageBanner';
import TypistHeadline from '../layout/TypistHeadline';
import AboutImage from '../../assets/img/Profile_Photo.JPG';

const styles = theme => ({
  root: {},
});

const About = ({ classes }) => (
  <section className={classes.root} id="about">
    <AboutImageBanner bannerImage={AboutImage}>
      <TypistHeadline />
    </AboutImageBanner>

    <Grid container justify="center">
      <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>
        <Fade bottom cascade>
          <article className="about__article">
            <Typography variant="h3">About Me</Typography>
            <div className="horizontal-line" />
            <Typography variant="body1" paragraph>My name is Noerani Samsoedien, master graduate Industrial Design at the Eindhoven University of Technology. During my master I wanted to broaden my horizon and touch in different areas which I believed expand on my current skill-set. I developed my Professional Identity which I categorise as personal and profession characteristics.</Typography>
          </article>
        </Fade>

        <Grid container justify="space-between">
          <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
            <Fade bottom cascade>
              <article className="article__left-column">
                <Typography variant="h6">Who I am as a Person</Typography>
                <Typography variant="body2" paragraph>I describe myself as an ambitious and strong-willed person that like to set high goals for myself. I am eager to learn and curious to explore new things in life. As a somewhat introvertial person, I can sometimes be quite dreamy and let my thoughts wander off and like to explore and philosophise about many things of our lives. I approach the things in life structurally, consistently and critically and feel most comfortable in an environment where I am stimulated to be creative.<br /><br />
                  Having a preserving and sometimes even a stubborn personality, I am committed to what I do and therefore stand behind my ideas. Although I have an observant nature, I believe having a presence in group will enable me to convince people of my vision and believes. Nevertheless I like to be inspired by people and listen to their opinions and perspectives with an open mind. I think everyone has their unique set of qualities and I can learn from anyone’s expertise. I noticed that in groups, where especially in projects, I tend to attain a leading role when it comes to collaborating with people, and manage individual contributions that benefit the project. As I might be an overachiever in one sense, a busy schedule gives me the energy and motivation to reach my personal goals and encourage me to get a step further each day.</Typography>
              </article>
            </Fade>
          </Grid>
          <Grid item xs={10} sm={5} md={5} lg={5} xl={3}>
            <Fade bottom cascade>
              <article className="article__right-column">
                <Typography variant="h6">Who I am as a Designer</Typography>
                <Typography variant="body2" paragraph>For me design is more than a profession; I am heavily passionate in how and what we can achieve in using design. Design is for me a means of expressing creativity and challenging myself. For me problems do not exist, they are viewed as challenges which can be shaped to desirable outcomes. In design I share the ambition to bring positive change in the world. In the profession of an industrial designer I recognise two sides in how I approach design; as a product engineer and as an interaction designer. <br /><br />

                  As a <strong>product engineer:</strong> In my bachelor I was trained as a product materialisation specialist in how to design for product realisation, optimisation and manufacturing processes. I am experienced with the iterative design process while maintaining a ‘design thinking’ attitude, where societal challenges are explored and creative problem solving is executed.<br /><br />

                  As a <strong>interaction designer</strong>: In my master I am developing myself in putting the human central by designing interactive products and systems. I learned the fundamentals of interaction design in the past years and developed an interest in designing for user experiences. Basically my focus in design lays in creating new propositions that are experienceable and viable for society.</Typography>
              </article>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </section>
);

About.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(About);
