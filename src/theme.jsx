import { createMuiTheme } from '@material-ui/core/styles';
import { teal, green } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: teal,
  },
});

export default theme;
