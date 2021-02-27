/* eslint-disable no-use-before-define */
import React, { Fragment } from 'react';
import startCase from 'lodash/startCase';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid, Button, Badge } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import BidCardPropertyItem from './_BidCardPropertyItem';
import BidStatus from './_BidStatus';

const useStyles = makeStyles({
  gridItemContent: {
    margin: 'auto 20px',
  },

  gridItemDivider: {
    margin: '1rem auto',
  },

  cardPropertyItemRed: {
    '& .MuiTypography-body1': {
      color: '#EB5757',
    },
  },

  cardPropertyItemGreen: {
    '& .MuiTypography-body1': {
      color: '#4CAF50',
    },
  },

  gridItemButton: {
    minWidth: '190px',
  },

  buttonBadge: {
    width: '100%',

    '& .MuiBadge-colorPrimary': {
      background: '#FFD040',
      border: '3px solid #FFFFFF',
    },
  },
});

const TrackMyBids = props => {
  const { list } = props;
  const classes = useStyles();

  return (
    <Grid>
      {list.map((item, index) => {
        const isLastItem = index === list.length - 1;
        const { type, name, location } = item;
        const buttonLabel = getButtonLabel(type);
        const properties = getProperties(item);

        return (
          <Fragment key={item.id}>
            <Grid item xs={12} className={classes.gridItemContent}>
              <Grid container spacing={1} alignItems="center" justify="space-between">
                <BidCardPropertyItem
                  type={type}
                  lg={3}
                  md={12}
                  xs={12}
                  title={name}
                  subtitle={location}
                  className="primaryListItem"
                />

                {properties.map(property => (
                  <BidCardPropertyItem
                    key={property}
                    type={type}
                    xs={6}
                    sm={2}
                    md={4}
                    lg={1}
                    title={getPropertyValue(property, item)}
                    subtitle={getPropertyLabel(property)}
                    className={getPropertyItemClassColor(property, item)}
                  />
                ))}

                <Grid item xs={12} md={12} lg={2} className={classes.gridItemButton}>
                  {buttonLabel && getButtonElement(item, buttonLabel)}
                </Grid>
              </Grid>
            </Grid>

            {!isLastItem && (
              <Grid item xs={12} className={classes.gridItemDivider}>
                <Divider />
              </Grid>
            )}
          </Fragment>
        );
      })}
    </Grid>
  );

  function getButtonElement({ id, type }, buttonLabel) {
    const buttonElement = (
      <Button fullWidth variant="outlined" color="secondary" endIcon={<KeyboardArrowRightIcon />}>
        {buttonLabel}
      </Button>
    );

    if (type === 'Won' && id !== 11) {
      return (
        <Badge color="primary" badgeContent="" className={classes.buttonBadge}>
          {buttonElement}
        </Badge>
      );
    }

    return buttonElement;
  }

  function getProperties({ type, status }) {
    if (type === 'Archived') {
      const archivePropsBase = ['status', 'totalBids', 'averageBidPrice', 'quotedPrice'];

      if (status === 'Terminated') {
        return [...archivePropsBase, 'terminationDate'];
      }

      return [...archivePropsBase, 'awardDate'];
    }

    return ['closingDate', 'totalBids', 'averageBidPrice', 'quotedPrice', 'lastSubmittedDate'];
  }

  function getPropertyItemClassColor(property, { type }) {
    if (property === 'quotedPrice') {
      if (['Open', 'Won'].includes(type)) {
        return classes.cardPropertyItemGreen;
      }

      if (['Reviewing', 'Archived'].includes(type)) {
        return classes.cardPropertyItemRed;
      }
    }

    return '';
  }
};

function getPropertyValue(property, item) {
  const value = item[property];
  const mapping = {
    closingDate: getDateIfValid,
    lastSubmittedDate: getDateIfValid,
    awardDate: getDateIfValid,
    terminationDate: getDateIfValid,
    status: () => <BidStatus status={value} />,
  };

  return typeof mapping[property] === 'function' ? mapping[property](value) : value;
}

function getPropertyLabel(property) {
  const mapping = {
    lastSubmittedDate: 'Last Submitted',
    averageBidPrice: 'Avg Bid Price',
  };
  return mapping[property] || startCase(property);
}

function getButtonLabel(type) {
  const mapping = {
    Draft: 'Continue Editing',
    Open: 'Resubmit Bid',
    Reviewing: 'Amend Bid',
    Won: 'View Award',
  };

  return mapping[type];
}

function getDateIfValid(value) {
  const originalFormat = 'MMMM DD, YYYY';
  const newFormat = 'DD MMM YYYY';
  const isValidDate = value && new Date(value) !== 'Invalid Date' && moment(value, originalFormat).isValid();
  return isValidDate ? moment(value, originalFormat).format(newFormat) : value;
}

export default TrackMyBids;
