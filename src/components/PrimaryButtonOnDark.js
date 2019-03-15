import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: 35,
    backgroundColor: "rgb(255,255,255, .5)",
    padding: "10px 26px",
    fontSize: "18px"
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});


function PrimaryButtons(props) {
  const { classes, color, restProps, text, disabled } = props;
  return (
    <div>
        <Button  color={color} className={classes.button} disabled={disabled} {...restProps}>
         {text}  ->
       </Button>
    </div>
  );
}

PrimaryButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimaryButtons);
