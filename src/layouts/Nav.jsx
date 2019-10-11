import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const styles = (theme) => ({
  container: {
    marginTop: theme.mixins.toolbar.minHeight * 1.5,
    marginLeft: '7%',
    marginRight: '7%',
  },
});


class NavLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    const { children, classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <TopBar
          open={open}
          onOpen={this.handleOpen}
        />
        <SideBar
          open={open}
          onClose={this.handleClose}
        />
        <div className={classes.container}>
          {children}
        </div>
      </div>
    );
  }
}

NavLayout.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavLayout);
