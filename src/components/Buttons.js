import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { action } from '@storybook/addon-actions';
import { green } from '@material-ui/core/colors';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: green
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button onClick={action('Default clicked')} variant="contained" className={classes.button}>
        Default
      </Button>
      <Button onClick={action('Primary clicked')} variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button onClick={action('Secondary clicked')} variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button onClick={action('Disabled clicked')} variant="contained" color="secondary" disabled className={classes.button}>
        Disabled
      </Button>
      <Button onClick={action('Link clicked')} variant="contained" href="#contained-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
