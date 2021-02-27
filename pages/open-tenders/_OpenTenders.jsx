import React, { useState } from 'react';
import Main from 'components/Layout/Main';
import { makeStyles } from '@material-ui/core/styles';
import PageHeader from 'components/PageHeader';
import { Divider } from '@material-ui/core';
import Page from 'components/Page';
import PageContainer from 'components/PageContainer';
import SearchBar from 'components/SearchBar';
import GridResults from './_GridResults';
import FilterSliderContent from './_FilterSliderContent';

const useStyles = makeStyles({
  searchResultDivider: {
    margin: '1.5rem 0',
    backgroundColor: '#CFD8DC',
  },
});

const OpenTenders = ({ currentUser }) => {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  return (
    <Main isShowSignOut currentUser={currentUser}>
      <Page title="Open Tenders">
        <PageContainer>
          <PageHeader title="Tender Management" subtitle="Open Tenders" />
          <SearchBar
            placeholder="Search for Tenders"
            search={search}
            onFilter={handleFilter}
            onSearch={handleSearch}
            filterSliderRenderer={renderFilterSliderContent}
          />
          <Divider className={classes.searchResultDivider} />
          <GridResults search={search} />
        </PageContainer>
      </Page>
    </Main>
  );

  function renderFilterSliderContent() {
    return <FilterSliderContent />;
  }

  function handleFilter() {}

  function handleSearch(evt) {
    setSearch(evt.target.value);
  }
};

export default OpenTenders;
