import Main from 'components/Layout/Main';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Divider, colors, Box, Link, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PageHeader from 'components/PageHeader';
import Page from 'components/Page';
import Breadcrumb from 'components/Breadcrumb';
import Button from '@material-ui/core/Button';
import ProjectCreate from './_ProjectCreate';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Project = ({ currentUser, project_status, ...props }) => {
  return (
    <Main
      isShowSignOut
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
      <Page title="Create Project">
        <Container>
          <PageHeader title="Management" subtitle="Projects" />
          <Breadcrumb mainPage="Projects" subPage="Create New Project" />
          <ProjectCreate />
        </Container>
      </Page>
    </Main>
  );
};

export default Project;
