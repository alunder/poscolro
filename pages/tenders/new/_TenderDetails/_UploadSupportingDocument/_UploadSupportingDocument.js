import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Card, CardContent, CardHeader, Divider, Typography } from '@material-ui/core';

import DocumentUpload from '../../../../../components/DocumentUpload/DocumentUpload';

import useStyles from '../styles';

const UploadSupportingDocument = () => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, classes.marginTop30)}>
      <CardHeader
        title={
          <Typography className={classes.cardTitle}>
            Upload Supporting Documents<span>Optional</span>
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

UploadSupportingDocument.propTypes = {};
UploadSupportingDocument.defaultProps = {};

export default UploadSupportingDocument;
