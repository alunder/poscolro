import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Card, CardContent, CardHeader, Divider, Typography } from '@material-ui/core';

import DocumentUpload from '../../../../../components/DocumentUpload/DocumentUpload';

import useStyles from '../styles';

const UploadImages = () => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, classes.marginTop30)}>
      <CardHeader
        title={
          <Typography className={classes.cardTitle}>
            Upload Images<span>Optional</span>
          </Typography>
        }
      />

      <Divider />

      <CardContent className={classes.cardPadding}>
        <DocumentUpload />
      </CardContent>
    </Card>
  );
};

UploadImages.propTypes = {};
UploadImages.defaultProps = {};

export default UploadImages;
