import gql from 'graphql-tag';
import { withAuth } from 'lib/auth';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Container from '@material-ui/core/Container';
import Main from 'components/Layout/Main';
import Page from 'components/Page';
import { makeStyles } from '@material-ui/styles';
import PageHeader from 'components/PageHeader';
import ManagerProfile from './ManagerProfile';

const useStyles = makeStyles(() => ({
  cardContent: {
    padding: '0px 8px 0px 8px',
  },
  headerWrapper: {
    paddingTop: '24px',
  }
}));

const Profile = ({ currentUser, company, props }) => {  
  const classes = useStyles(props);


  return(
    <Main
      isShowSignOut={true}
      currentUser={currentUser}
      alertMessage={
        !currentUser.confirmed && (
          <span>
            <strong>
              <ErrorOutlineIcon fontSize="small" style={{ verticalAlign: 'middle' }} /> Verify your email address.
            </strong>
            {'  '}
            Please click on the verification link that has been sent to your email account.
          </span>
        )
      }
    >
      <Page title="Projects">
        <Container className={classes.headerWrapper}>
          <PageHeader title="Settings" subtitle="Profile" />
          {currentUser.role == 'manager' && <ManagerProfile user={currentUser} company={company} />}
        </Container>
      </Page>
    </Main>
  );
}


Profile.getInitialProps = async context => {
  const company = await context.apolloClient
    .query({
      query: gql`
        query company {
          company {
            id
            name
            uen
            address
            postal
            countryCode
            telephone
            website
            status
          }
        }
      `,
    })
    .then(({ data }) => {
      return data.company;
    })
    .catch(() => {
      // Fail gracefully
      return null;
    });

  return { company };
};

export default withAuth(Profile);
