import Minimal from 'components/Layout/Minimal';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PageTop from 'components/PageTop';
import Page from 'components/Page';
import AddProduct from './_AddProduct';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `32px 0px`,
  },
  title: {
    margin: 0,
  },
}));

const AddProductWrapper = ({ currentUser, tender_status, ...props }) => {
  const classes = useStyles();

  return (
    <Minimal
      isShowSignOut={true}
      currentUser={currentUser}
      alertMessage={
        !currentUser.confirmed && (
          <span>
            {' '}
            <strong>
              <ErrorOutlineIcon fontSize="small" style={{ verticalAlign: 'middle' }} /> Verify your email address.
            </strong>{' '}
            Please click on the verification link that has been sent to your email account.
          </span>
        )
      }
    >
      <Page title="Add Product">
        <Container className={classes.root}>
          <PageTop anchor="RETURN TO CATALOGUE" link="/tenders/products" title="Add item to catalogue" className={classes.title}/>
          <AddProduct />
        </Container>
      </Page>
    </Minimal>
  );
};

export default AddProductWrapper;
