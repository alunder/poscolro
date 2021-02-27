import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { SingleUploader } from 'components/FilesDropzone';

const useStyles = makeStyles(theme => ({
  gridItemButton: {
    textAlign: 'right',

    [theme.breakpoints.down('xs')]: {
      '& button': {
        width: '100%',
      },
    },
  },
}));

function BatchUploadModalContent({ files, onFileChange }) {
  const classes = useStyles();
  const hasFiles = files.length > 0;

  return (
    <Grid container spacing={2} alignContent="center">
      <Grid item xs={12} sm={8}>
        <Typography color="textPrimary" gutterBottom variant="body2">
          {hasFiles
            ? 'Import your Approved List (.xls) here.'
            : 'Download our template and complete it with your vendor information.'}
        </Typography>
      </Grid>

      {!hasFiles && (
        <Grid item xs={12} sm={4} className={classes.gridItemButton}>
          <Button startIcon={<GetAppIcon />} variant="contained">
            Download Template
          </Button>
        </Grid>
      )}

      <Grid item xs={12}>
        <SingleUploader
          title="Upload Excel File Here"
          subtitle="Drop completed vendor list template"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onFileChange={onFileChange}
        />
      </Grid>
    </Grid>
  );
}

export default BatchUploadModalContent;
