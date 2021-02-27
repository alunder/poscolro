import React from 'react';
import Main from 'components/Layout/Main';
import PageHeader from 'components/PageHeader';
import PageContainer from 'components/PageContainer';
import Page from 'components/Page';
import BidCardList from './_BidCardList';

const TrackMyBids = ({ currentUser }) => {
  return (
    <Main isShowSignOut currentUser={currentUser}>
      <Page title="Dashboard">
        <PageContainer>
          <PageHeader title="Tender Management" subtitle="Track My Bids" />
          <BidCardList />
        </PageContainer>
      </Page>
    </Main>
  );
};

export default TrackMyBids;
