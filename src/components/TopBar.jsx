import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { logout } from '../store/actions/auth';


const drawerWidth = 240;

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[1],
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
});

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    const { logOut, user, history } = this.props;
    logOut(user.sessionId);
    history.push('/');
  }

  handleLogIn() {
    const { history } = this.props;
    history.push('/login');
  }

  render() {
    const {
      user, classes, onOpen, open,
    } = this.props;
    const logButton = user.logged
      ? (<Button onClick={this.handleLogOut}> LogOut </Button>)
      : (<Button onClick={this.handleLogIn}> LogIn </Button>);

    return (
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Steam
          </Typography>
          {logButton}
        </Toolbar>
      </AppBar>
    );
  }
}


TopBar.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});


const mapDispatchToProps = (dispatch) => ({
  logOut: (sessionId) => dispatch(logout(sessionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(withRouter(TopBar))
);
