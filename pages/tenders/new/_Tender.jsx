import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/Layout/Main';
import Container from '@material-ui/core/Container';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PageTop from 'components/PageTop';
import Page from 'components/Page';
import TenderCreate from './_TenderCreate/_TenderCreate';

const Tender = ({ currentUser }) => {
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
      <Page title="Create Tender">
        <Container>
          <PageTop anchor="RETURN TO ONE AMBER" link="/tenders" title="Add New Tender" />
          <TenderCreate />
        </Container>
      </Page>
    </Main>
  );
};

Tender.propTypes = {
  currentUser: PropTypes.object,
};

export default Tender;
