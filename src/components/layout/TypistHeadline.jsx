import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typist from 'react-typist';

const styles = theme => ({
  typistHeadline: {
    fontFamily: '"Lato", sans-serif',
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: 300,
    color: 'black',
    position: 'absolute',
    width: '650px',
    margin: 'auto 0',
    zIndex: 100,
    top: '50%',
    left: '3%',
  },
  '@media screen and (max-width: 820px)': {
    typistHeadline: {
      display: 'none',
    },
  },
  '@media screen and (min-width: 960px)': {
    typistHeadline: {
      left: '10%',
    },
  },
  typistRemovableWord: {
    fontFamily: '"Mr Dafoe", cursive',
    fontWeight: 400,
    fontSize: '3.6rem',
    textTransform: 'capitalize',
    color: 'black',
    padding: '0 8px',
    display: 'inline',
  },
  inline: {
    display: 'inline',
  },
});

const TypistHeadline = ({ classes }) => {
  const words = [' Industrial', ' Interaction', ' Product', ' Strategist', ' Experience', ' Empathy'];
  for (let i = 6; i < 100000; i++) {
    words[i] = words[i - 6];
  }

  return (
    <div className={classes.typistHeadline}>
      <h2>
        <span className="inline">{'Hello there, I am a '}</span>
        <br />
        <Typist className={classes.typistRemovableWord}>
          <span>{' '}</span>
          {words.map((word, i) => (
            <span key={word} className={classes.inline}>
              {word}
              <Typist.Backspace
                count={word.length}
                delay={(i + 1) * 1000}
              />
            </span>
          ))}
        </Typist>
        <span className={classes.inline}>{'Designer.'}</span>
      </h2>
    </div>
  );
};

TypistHeadline.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(TypistHeadline);
