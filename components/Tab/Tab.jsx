
import { default as MuiTab } from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

const Tab = withStyles({
    root: {
        minHeight: '67px',
        backgroundColor: '#ffffff',
        fontWeight: 500,
        color: '#c4c3c2',
        borderBottom: '2px solid #d4d3d2',
        '&:hover': {
            color: '#2d2a26',
        },
        '&$selected': {
            color: '#2d2a26',
            borderBottom: '2px solid #36b0c9',
        },
        variant: "fullWidth"
    },
    selected: {
        backgroundColor: '#d5f1f7',
    },
})(props => <MuiTab disableRipple {...props} />);

export default Tab;