import React from 'react';
import Main from 'components/Layout/Main';
import PageHeader from 'components/PageHeader';
import PageContainer from 'components/PageContainer';
import Page from 'components/Page';
import ApprovedVendorsList from 'components/ApprovedVendorsList';

const ApprovedVendors = ({ currentUser }) => {
  return (
    <Main isShowSignOut currentUser={currentUser}>
      <Page title="My Approved Vendors">
        <PageContainer>
          <PageHeader title="Management" subtitle="My Approved Vendors" />
          <ApprovedVendorsList />
        </PageContainer>
      </Page>
    </Main>
  );
};

export default ApprovedVendors;
