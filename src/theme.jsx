import { createMuiTheme } from '@material-ui/core/styles';
import { green, teal, blueGrey } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: teal,
    background: {
      default: blueGrey[800],
    },
  },
});

export default theme;
