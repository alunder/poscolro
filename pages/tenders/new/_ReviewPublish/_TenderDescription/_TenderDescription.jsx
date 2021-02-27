import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, Divider, Grid } from '@material-ui/core';
import clsx from 'clsx';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import { formatDate } from '../../../../../common/helper';
import useStyles from '../styles';

const TenderDescription = ({ tenderType, requestType, closingDate, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        title={
          <div>
            <span className={clsx(classes.bigSpan, classes.supply)}>
              Supply entire suite of pool side outdoor furniture to replace entire existing items
            </span>
            <div className={classes.headerTypo}>
              {tenderType === 'open' ? <LockOpenIcon /> : <LockOutlinedIcon />}
              <p className={classes.verticalCenter}>{tenderType === 'open' ? 'Open to all vendors' : 'Invite only'}</p>
            </div>
            <div className={classes.headerTypo}>
              <EmojiFlagsIcon />
              <p className={classes.verticalCenter}>{requestType === 'single' ? 'Single Request' : 'Term request'}</p>
            </div>
          </div>
        }
      />
      <Divider />
      <CardContent className={classes.cardPadding}>
        <Grid container>
          <Grid className={classes.tenderInfo} item>
            <div>
              <span style={{ fontWeight: 500 }}> Tender Closing Date</span>
              <p>{closingDate && formatDate(closingDate)}</p>
            </div>
            <div>
              <span style={{ fontWeight: 500 }}>Tender Description </span>
              <p>{description}</p>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TenderDescription.propTypes = {
  closingDate: PropTypes.string,
  description: PropTypes.string,
  requestType: PropTypes.string,
  tenderType: PropTypes.string,
};

TenderDescription.defaultProps = {
  closingDate: '',
  description: '',
  requestType: '',
  tenderType: '',
};

export default TenderDescription;
