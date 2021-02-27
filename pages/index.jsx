import Minimal from 'components/Layout/Minimal';
import Main from 'components/Layout/Main';
import nextCookie from 'next-cookies';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withAuth } from 'lib/auth';
import Home from 'components/Home';
import Thankyou from 'components/Thankyou';

console.log(process.env.CONSOLE_MSG);

const Index = ({ currentUser, ...props }) => {
  return (
    <>
      {currentUser.beta && (
        <Main
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
          <Grid container direction="row" justify="center" alignItems="center">
            <img src="/images/pm-project-empty-state.png" />
          </Grid>
        </Main>
      )}
      {!currentUser.beta && (
        <Minimal isShowSignOut={true}>
          <Thankyou />
        </Minimal>
      )}
    </>
  );
};

export default withAuth(Index);
