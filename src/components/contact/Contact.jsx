import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import { Fade } from 'react-reveal';

import LinkedInComponent from './LinkedInComponent';
import ImageBanner from '../layout/ImageBanner';
// import ContactImage from '../../assets/img/Profile_Banner.JPG';
import ContactImage from '../../assets/img/DSC_7530.JPG';

const styles = theme => ({
  contactForm: {
    margin: '24px',
  },
  contactFormInput: {
    marginBottom: '24px',
    width: '100%',
  },
  contactFormButton: {
    marginBottom: '12px',
    float: 'right',
  },
  contactFormInputTextarea: {
    marginBottom: '24px',
    width: '100%',
  },
});

const Contact = ({
  name,
  email,
  subject,
  message,
  errors,
  onChangeCallback,
  onSubmitCallback,
  classes,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };

  return (
    <section className="contact" id="contact">
      <ImageBanner bannerImage={ContactImage} />

      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>
          <Fade bottom cascade>
            <article className="about__article">
              <Typography variant="h3">Contact</Typography>
              <div className="horizontal-line" />
            </article>
          </Fade>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item xs={11} sm={8} md={6} lg={4}>
          <form onSubmit={onSubmit} className={classes.contactForm} noValidate autoComplete="off">
            <Typography variant="body1" paragraph>Contact me by filling the form below. You will receive a confirmation mail with your message and I will get back at you at my earliest convenience.</Typography>
            <TextField
              className={classes.contactFormInput}
              variant="outlined"
              label="Name"
              type="name"
              name="name"
              value={name}
              onChange={onChange}
              error={errors.name}
              helperText={errors ? errors.name : ''}
            />
            <TextField
              className={classes.contactFormInput}
              variant="outlined"
              label="Email Address"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              error={errors.email}
              helperText={errors ? errors.email : ''}
            />
            <TextField
              className={classes.contactFormInput}
              variant="outlined"
              label="Subject"
              type="subject"
              name="subject"
              value={subject}
              onChange={onChange}
              error={errors.subject}
              helperText={errors ? errors.subject : ''}
            />
            <TextField
              className={classes.contactFormInputTextarea}
              variant="outlined"
              label="Message"
              multiline
              rows="7"
              name="message"
              value={message}
              onChange={onChange}
              error={errors.message}
              helperText={errors ? errors.message : ''}
            />
            <Button variant="contained" color="primary" type="submit" value="Submit" className={classes.contactFormButton}>Submit</Button>
          </form>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <LinkedInComponent />
        </Grid>
      </Grid>
    </section>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Contact);
