import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';

const styles = theme => ({
  projectPanel: {
    position: 'relative',
    height: '200px',
    width: '200px', 
    '&:hover projectPanelContent': {
      transform: 'scale(1)',
      opacity: 1,
      transition: '.5s',
    },
    '&:hover projectPanelImage': {
      transform: 'scale(1.2)',
      //   -webkit-filter: blur(4px)',
      //   -moz-filter: blur(4px)',
      //   -o-filter: blur(4px)',
      //   -ms-filter: blur(4px)',
      filter: 'blur(4px)',
      transition: '.4s',
    }
  },
  projectPanelImage: {
    width: '100%',
    height: '100%',
    transition: '.5s',
  },
  projectPanelContent: {
    position: 'absolute',
    paddingTop: '120px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: '#009688',
    fontFamily: '"Lato", sans-serif',
    fontWeight: 600,  
    fontSize: '1em',
    textAlign: 'center',
    textTransform: 'uppercase',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    transform: 'scale(1.2)',
    transition: '.5s',
  },  
  // .project-panel:hover .project-panel__content {
  //   transform: scale(1)',
  //   opacity: 1',
  //   transition: .5s',
  // }
  
  // .project-panel:hover .project-panel__image {
  //   transform: scale(1.2)',
  //   -webkit-filter: blur(4px)',
  //   -moz-filter: blur(4px)',
  //   -o-filter: blur(4px)',
  //   -ms-filter: blur(4px)',
  //   filter: blur(4px)',
  //   transition: .4s',
  // }
  
});

const ProjectPanel = ({
  image,
  caption,
  onHandleClick,
  name,
  classes,
}) => {
  const onClick = () => {
    onHandleClick(name);
  };

  return (
    <Grid item>
      <CardActionArea onClick={onClick}>
        <Card raised className={classes.projectPanel}>
          <CardMedia
            className={classes.projectPanelImage}
            image={image}
            title="Project"
          />
          <p className={classes.projectPanelContent}>{caption}</p>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

ProjectPanel.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onHandleClick: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired, // eslint-disable-line
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ProjectPanel);
