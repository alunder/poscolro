import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Card, CardMedia, CardContent, Divider, Grid, Typography, colors } from '@material-ui/core';
import Label from 'components/Label';

const useStyles = makeStyles(theme => ({
  root: {},
  media: {
    height: 168,
    textAlign: 'right',
  },
  header: {
    paddingBottom: 0,
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  gridContainer: {
    padding: '12px 1rem',
  },
  description: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    color: '#2D2A26',
  },
  number: {
    margin: '5px auto',
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '16px',
    textTransform: 'uppercase',
    color: '#90A4AE',
  },
  author: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#2D2A26',
  },
  tags: {
    textAlign: 'right',

    '& > * + *': {
      marginLeft: theme.spacing(1),
    },

    [theme.breakpoints.only('xs')]: {
      textAlign: 'left',
    },
  },
  coloredLabel: {
    width: '78px',
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '16px',
  },
  gridContainerNumbers: {
    padding: 'calc(12px + 4px) calc(1rem + 4px)',
  },
  numberItemGrid: {
    display: 'flex',
  },
  numberItem: {
    margin: '0 .25rem',
    color: '#263238',
    fontSize: '12px',
    textTransform: 'none',
    fontWeight: 'normal',
    minWidth: '20px',
  },
  moreItem: {
    margin: 0,
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#90A4AE',
    cursor: 'pointer',
  },
  footerLabel: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18px',
    color: '#2D2A26',
    textTransform: 'uppercase',
  },
  footerValue: {
    fontSize: '11px',
    lineHeight: '16px',
    color: '#90A4AE',
    textTransform: 'uppercase',
  },
  exclusiveImage: {
    margin: '1rem',
  },
}));

function TenderCard({ project, className }) {
  const classes = useStyles();
  const isLessThan7Days = moment(project.closing_date).diff(moment(), 'days') <= 7;
  const tenderItems = ['Sofa', 'Lamp', 'Frame', 'Cupboard', 'Pedestal', 'Item 6', 'Item 7', 'Item 8'];
  const tenderItemsFirst = tenderItems.slice(0, 3);
  const tenderItemsSecond = tenderItems.slice(3, 5);
  const tenderMoreCount = tenderItems.length - 5;
  const hasFirstItems = tenderItemsFirst.length > 0;
  const hasSecondItems = tenderItemsSecond.length > 0;
  const hasMoreItems = tenderMoreCount >= 1;

  return (
    <Card className={clsx(classes.root, className)}>
      <CardMedia className={classes.media} image="https://picsum.photos/id/1029/390/168">
        {!project.number && (
          <img src="/images/exclusive_tender.png" alt="exclusive tender" className={classes.exclusiveImage} />
        )}
      </CardMedia>
      <CardContent className={classes.content}>
        <Grid container spacing={2} justify="space-between" className={classes.gridContainer}>
          <Grid item xs={12} sm={8}>
            <Typography color="textSecondary" variant="subtitle2" className={classes.description}>
              Supply entire suite of pool side furniture to replace entire existing items
            </Typography>
            <Typography variant="body2" className={classes.number}>
              #00{project.number}
            </Typography>
            <Typography variant="body1" className={classes.author}>
              One Amber
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div className={classes.tags}>
              {project.tags.map(tag => (
                <Label
                  color={isLessThan7Days ? '#EB5757' : colors.green[600]}
                  key={tag.text}
                  className={classes.coloredLabel}
                >
                  Open
                </Label>
              ))}
            </div>
          </Grid>
        </Grid>

        <Divider />

        <Grid container spacing={1} justify="space-between" className={classes.gridContainerNumbers}>
          <Grid item xs={6}>
            <Grid container spacing={1}>
              {hasFirstItems &&
                tenderItemsFirst.map((item, i) => (
                  <Grid key={item} item xs={12} className={classes.numberItemGrid}>
                    <Typography variant="overline" className={classes.numberItem} style={{ margin: 0 }}>
                      {i + 1}
                    </Typography>
                    <Typography variant="overline" className={classes.numberItem}>
                      {item}
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container spacing={1}>
              {hasSecondItems &&
                tenderItemsSecond.map((item, i) => (
                  <Grid key={item} item xs={12} className={classes.numberItemGrid}>
                    <Typography variant="overline" className={classes.numberItem} style={{ margin: 0 }}>
                      {i + 1 + 3}
                    </Typography>
                    <Typography variant="overline" className={classes.numberItem}>
                      {item}
                    </Typography>
                  </Grid>
                ))}
              {hasMoreItems && (
                <Grid item xs={12} className={classes.numberItemGrid}>
                  <Typography variant="overline" className={`${classes.numberItem} ${classes.moreItem}`}>
                    {`+${tenderMoreCount} more items...`}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        <Grid container spacing={2} justify="space-between" className={classes.gridContainer}>
          <Grid item xs={6}>
            <Typography color="textSecondary" variant="subtitle2" className={classes.footerLabel}>
              SouthEast
            </Typography>
            <Typography variant="body2" className={classes.footerValue}>
              Location
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography color="textSecondary" variant="subtitle2" align="right" className={classes.footerLabel}>
              {moment(project.closing_date).format('DD MMM YYYY')}
            </Typography>
            <Typography variant="body2" align="right" className={classes.footerValue}>
              Tender Closing Date
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

TenderCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired,
};

export default TenderCard;
