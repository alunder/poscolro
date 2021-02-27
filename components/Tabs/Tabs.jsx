import MuiTabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

const Tabs = withStyles({
  root: {
    minHeight: '67px',
    variant: 'fullWidth',
  },
  indicator: {
    display: 'none',
  },
})(MuiTabs);

export default Tabs;
