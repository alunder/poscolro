import gql from 'graphql-tag';
import Main from 'components/Layout/Main';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Divider, colors, Box, Link, Typography } from '@material-ui/core';
import PageHeader from 'components/PageHeader';
import PageContainer from 'components/PageContainer';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PageTab from 'components/PageTab';
import Page from 'components/Page';
import Breadcrumb from 'components/Breadcrumb';
// import ProjectDetails from './_ProjectDetails';
import ProjectDetails from 'components/ProjectDetails';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Project = ({ project, currentUser, ...props }) => {
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
      <Page title="Project Details">
        <PageContainer>
          <PageHeader title="Management" subtitle={project.name} />
          <Breadcrumb mainPage="Projects" subPage="View Project" />
          <ProjectDetails project={project} />
        </PageContainer>
      </Page>
    </Main>
  );
};

Project.getInitialProps = async ({ apolloClient, query }) => {
  const project = await apolloClient
    .query({
      query: gql`
        query project($id: ID!) {
          project(id: $id) {
            id
            name
            address
            postal
            startDate
            endDate
            description
            documents
          }
        }
      `,
      variables: {
        id: query.id,
      },
    })
    .then(({ data }) => {
      return data.project;
    })
    .catch(() => {
      // Fail gracefully
      return {};
    });
  return {
    project,
  };
};
export default Project;
