import gql from 'graphql-tag';
import Main from 'components/Layout/Main';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Tabs, Tab, Divider, colors, Box } from '@material-ui/core';
import PageHeader from 'components/PageHeader';
import Container from '@material-ui/core/Container';
import PageTab from 'components/PageTab';
import Page from 'components/Page';
import Button from '@material-ui/core/Button';

import ProjectDetails from './_ProjectContent';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Projects = ({ currentUser, status, projects, ...props }) => {
  const classes = useStyles();
  const tabs = [
    { value: '', label: 'Active Projects' },
    // { value: 'draft', label: 'Draft Projects' },
    { value: 'terminated', label: 'Terminated Projects' },
  ];

  return (
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
      <Page title="Projects">
        <Container>
          <PageHeader title="Management" subtitle="Projects" />
          <PageTab
            tabs={tabs}
            activeTab={status || ''}
            button={
              <Button variant="contained" color="primary" className={classes.button} href="/projects/new">
                Create New Project
              </Button>
            }
          />
          <ProjectDetails projects={projects} />
        </Container>
      </Page>
    </Main>
  );
};

Projects.getInitialProps = async ({ apolloClient, query }) => {
  const projects = await apolloClient
    .query({
      query: gql`
        query projects($status: String) {
          projects(where: {status: $status}) {
            id
            name
            address
            postal
            startDate
            endDate
            description
            openCount
            pendingCount
            remaining
            avatar
          }
        }
      `,
      variables: {
        status: query.status ? query.status : 'active',
      },
    })
    .then(({ data }) => {
      return data.projects;
    })
    .catch(() => {
      // Fail gracefully
      return [];
    });
  return {
    projects: projects,
    status: query.status,
  };
};

export default Projects;
