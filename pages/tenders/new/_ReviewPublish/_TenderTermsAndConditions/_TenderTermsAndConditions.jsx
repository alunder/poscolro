import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Divider, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowForward from '../../../../../public/images/arrow_forward.svg';
import { formatDate } from '../../../../../common/helper';

import useStyles from '../styles';

const TenderTermsAndConditions = ({
  quotationFor,
  periodTypes,
  warrantyNum,
  warranty,
  paymentNum,
  payment,
  deliveryStart,
  deliveryComplete,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardHeader}>
        <span className={classes.bigSpan} style={{ display: 'block' }}>
          Tender terms & conditions
        </span>
        <div className={classes.tenderTerm}>
          <div>
            <p>Validity of quotation</p>
            <span>
              {quotationFor}
              {` `}
              {periodTypes}
            </span>
          </div>
          <div>
            <p>Warranty</p>
            <span>{warrantyNum ? `${warrantyNum} ${warranty}` : warranty}</span>
          </div>
          <div>
            <p>Payment terms</p>
            <span>{paymentNum ? `${paymentNum} ${payment}` : payment}</span>
          </div>
        </div>
        <Divider />
        <div className={classes.deliveryDate}>
          <div>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <CalendarTodayIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Expected delivery start date"
                secondary={deliveryStart && formatDate(deliveryStart)}
              />
            </ListItem>
          </div>
          <div className={classes.arrow}>
            <ArrowForward style={{ margin: '0 64px' }} className={classes.verticalCenter} />
          </div>
          <div>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <CalendarTodayIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Expected delivery completion date"
                secondary={deliveryComplete && formatDate(deliveryComplete)}
              />
            </ListItem>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

TenderTermsAndConditions.propTypes = {
  deliveryComplete: PropTypes.string,
  deliveryStart: PropTypes.string,
  payment: PropTypes.string,
  paymentNum: PropTypes.number,
  periodTypes: PropTypes.string,
  quotationFor: PropTypes.string,
  warranty: PropTypes.string,
  warrantyNum: PropTypes.number,
};

TenderTermsAndConditions.defaultProps = {
  deliveryComplete: '',
  deliveryStart: '',
  payment: '',
  paymentNum: 0,
  periodTypes: '',
  quotationFor: '',
  warranty: '',
  warrantyNum: 0,
};

export default TenderTermsAndConditions;
