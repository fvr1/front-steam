import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { logout } from '../store/actions/auth';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
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
}));


const TopBar = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { open, onOpen, user } = props;
  const history = useHistory();

  const handleLogOut = (event) => {
    event.preventDefault();
    const { logOut } = props;
    logOut();
    history.push('/');
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    history.push('/login');
  };

  const logButton = user.logged
    ? (<Button onClick={handleLogOut}> LogOut </Button>)
    : (<Button onClick={handleLogIn}> LogIn </Button>);

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
};

TopBar.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});


const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
