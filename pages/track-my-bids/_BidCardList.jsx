/* eslint-disable no-use-before-define */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Card, CardHeader, CardContent } from '@material-ui/core';
import BidCardSubList from './_BidCardSubList';
import BidCardTitle from './_BidCardTitle';

const useStyles = makeStyles({
  root: {
    marginTop: '1.5rem',
  },

  rootFirst: {
    marginTop: '.5rem',
  },

  cardHeader: {
    padding: '24px',
  },

  cardContent: {
    '&.MuiCardContent-root': {
      padding: '1rem 0',
      maxHeight: '230px',
      overflowY: 'auto',

      '&::-webkit-scrollbar': {
        width: '0.6em',
      },
      '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey',
      },
    },
  },

  cardContentFooter: {
    padding: '2rem 20px',
  },
});

const BidCardList = () => {
  const classes = useStyles();

  return bidTypes.map((bidType, index) => {
    const subList = getSubListByType(bids, bidType);

    return (
      <Card key={bidType} className={index ? classes.root : classes.rootFirst}>
        <CardHeader
          className={classes.cardHeader}
          title={
            <BidCardTitle
              type={bidType}
              typeTitle={`${getTypeTitle(bidType)} (${subList.length})`}
              typeStatus={getTypeStatus(bidType)}
            />
          }
        />
        <Divider />

        <CardContent className={classes.cardContent}>
          <BidCardSubList list={subList} />
        </CardContent>

        <Divider />
        <CardContent className={classes.cardContentFooter} />
      </Card>
    );
  });
};

function getTypeTitle(bidType) {
  const typeTitleMapping = {
    Draft: 'Draft Bids',
    Open: 'Submitted Open Bids',
    Reviewing: 'Bids Under Review',
    Won: 'Bids Won',
    Archived: 'Archived Bids',
  };

  return typeTitleMapping[bidType] || '';
}

function getTypeStatus(bidType) {
  const typeTitleMapping = {
    Draft: 'Draft',
    Open: 'Open',
    Reviewing: 'Reviewing',
    Won: 'Bid  Won',
    Archived: null,
  };

  return typeTitleMapping[bidType] || '';
}

function getSubListByType(list = [], bidType) {
  return list.filter(({ type }) => type === bidType);
}

const bids = [
  {
    id: 1,
    type: 'Draft',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 1',
    location: 'One Amber • Southeast',
    closingDate: 'December 14, 2019',
    totalBids: 1,
    averageBidPrice: 'N/A',
    quotedPrice: null,
    lastSubmittedDate: null,
  },
  {
    id: 2,
    type: 'Draft',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 2',
    location: 'One Amber • Southeast',
    closingDate: 'December 14, 2019',
    totalBids: 1,
    averageBidPrice: 'N/A',
    quotedPrice: null,
    lastSubmittedDate: null,
  },
  {
    id: 3,
    type: 'Open',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 3',
    location: 'One Amber • Southeast',
    closingDate: 'December 14, 2019',
    totalBids: 5,
    averageBidPrice: '$11,023.00',
    quotedPrice: '$10,000.00',
    lastSubmittedDate: 'December 15, 2019',
  },
  {
    id: 4,
    type: 'Open',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 4',
    location: 'One Amber • Southeast',
    closingDate: 'December 15, 2019',
    totalBids: 5,
    averageBidPrice: '$11,023.00',
    quotedPrice: '$10,000.00',
    lastSubmittedDate: 'December 15, 2019',
  },
  {
    id: 5,
    type: 'Open',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 5',
    location: 'One Amber • Southeast',
    closingDate: 'December 15, 2019',
    totalBids: 5,
    averageBidPrice: '$11,023.00',
    quotedPrice: '$10,000.00',
    lastSubmittedDate: 'December 15, 2019',
  },
  {
    id: 55,
    type: 'Open',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 5',
    location: 'One Amber • Southeast',
    closingDate: 'December 15, 2019',
    totalBids: 5,
    averageBidPrice: '$11,023.00',
    quotedPrice: '$10,000.00',
    lastSubmittedDate: 'December 15, 2019',
  },
  {
    id: 6,
    type: 'Reviewing',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 6',
    location: 'One Amber • Southeast',
    closingDate: 'December 16, 2019',
    totalBids: 9,
    averageBidPrice: '$10,000.00',
    quotedPrice: '$11,000.00',
    lastSubmittedDate: 'December 21, 2019',
  },
  {
    id: 7,
    type: 'Reviewing',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 7',
    location: 'One Amber • Southeast',
    closingDate: 'December 16, 2019',
    totalBids: 9,
    averageBidPrice: '$10,000.00',
    quotedPrice: '$11,000.00',
    lastSubmittedDate: 'December 21, 2019',
  },
  {
    id: 8,
    type: 'Reviewing',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 8',
    location: 'One Amber • Southeast',
    closingDate: 'December 16, 2019',
    totalBids: 9,
    averageBidPrice: '$10,000.00',
    quotedPrice: '$11,000.00',
    lastSubmittedDate: 'December 21, 2019',
  },
  {
    id: 88,
    type: 'Reviewing',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 8',
    location: 'One Amber • Southeast',
    closingDate: 'December 16, 2019',
    totalBids: 9,
    averageBidPrice: '$10,000.00',
    quotedPrice: '$11,000.00',
    lastSubmittedDate: 'December 21, 2019',
  },
  {
    id: 9,
    type: 'Won',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 9',
    location: 'One Amber • Southeast',
    closingDate: 'December 2, 2019',
    totalBids: 10,
    averageBidPrice: '$12,000.00',
    quotedPrice: '$12,000.00',
    lastSubmittedDate: 'December 18, 2019',
  },
  {
    id: 10,
    type: 'Won',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 10',
    location: 'One Amber • Southeast',
    closingDate: 'December 2, 2019',
    totalBids: 10,
    averageBidPrice: '$12,000.00',
    quotedPrice: '$12,000.00',
    lastSubmittedDate: 'December 18, 2019',
  },
  {
    id: 11,
    type: 'Won',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 11',
    location: 'One Amber • Southeast',
    closingDate: 'December 2, 2019',
    totalBids: 10,
    averageBidPrice: '$12,000.00',
    quotedPrice: '$12,000.00',
    lastSubmittedDate: 'December 18, 2019',
  },
  {
    id: 111,
    type: 'Won',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 11',
    location: 'One Amber • Southeast',
    closingDate: 'December 2, 2019',
    totalBids: 10,
    averageBidPrice: '$12,000.00',
    quotedPrice: '$12,000.00',
    lastSubmittedDate: 'December 18, 2019',
  },
  {
    id: 12,
    type: 'Archived',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 12',
    location: 'One Amber • Southeast',
    closingDate: 'December 2, 2019',
    totalBids: 5,
    averageBidPrice: '$12,000.00',
    quotedPrice: '$12,000.00',
    lastSubmittedDate: 'December 18, 2019',
    awardDate: '-',
    status: 'No Award',
  },
  {
    id: 13,
    type: 'Archived',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 13',
    location: 'One Amber • Southeast',
    closingDate: 'December 2, 2019',
    totalBids: 5,
    averageBidPrice: '$12,000.00',
    quotedPrice: '$12,000.00',
    lastSubmittedDate: 'December 18, 2019',
    awardDate: 'December 15, 2019',
    status: 'Bid Lost',
  },
  {
    id: 14,
    type: 'Archived',
    name: 'Supply entire suite of pool side furniture to replace entire existing items 14',
    location: 'One Amber • Southeast',
    closingDate: 'December 2, 2019',
    totalBids: 5,
    averageBidPrice: '$12,000.00',
    quotedPrice: '$12,000.00',
    lastSubmittedDate: 'December 18, 2019',
    awardDate: 'December 15, 2019',
    status: 'Terminated',
    terminationDate: 'December 12, 2019',
  },
];
const bidTypes = ['Draft', 'Open', 'Reviewing', 'Won', 'Archived'];

export default BidCardList;
