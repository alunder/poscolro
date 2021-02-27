import { withAuth } from 'lib/auth';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Container from '@material-ui/core/Container';
import Main from 'components/Layout/Main';
import ProfileForm from 'components/ProfileForm';

const Profile = ({ currentUser, props }) => (
  <Main
    isShowSignOut
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
    <Container>
      <ProfileForm />
    </Container>
  </Main>
);

export default withAuth(Profile);
