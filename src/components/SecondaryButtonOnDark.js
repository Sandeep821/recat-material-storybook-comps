import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: 35,
    backgroundColor: "rgb(555,255,255, .0)",
    padding: "10px 26px",
    fontSize: "18px",
    borderColor:"#fff",
    color: "#fff"
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

function SecondaryButtonOnDark(props) {
  const { classes, color, restProps, text, disabled } = props;
  return (
    <div>
        <Button color={color} className={classes.button} disabled={disabled} variant="outlined" {...restProps}>
         {text}  ->
       </Button>
    </div>
  );
}

SecondaryButtonOnDark.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SecondaryButtonOnDark);
