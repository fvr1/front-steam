import React from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  button: {
    height: 37,
    minWidth: 70,
  },
}));

const LoadingButton = (props) => {
  const { loading, children, ...otherProps } = props;
  const classes = useStyles();

  const content = loading
    ? <CircularProgress size={18} />
    : children;

  return (
    <Button className={classes.button} {...otherProps}>
      {content}
    </Button>
  );
};

LoadingButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

LoadingButton.defaultProps = {
};

export default LoadingButton;
