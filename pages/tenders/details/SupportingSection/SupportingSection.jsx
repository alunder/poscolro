/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Box, Card, CardContent, Button, List } from '@material-ui/core';

import GetAppIcon from '@material-ui/icons/GetApp';
import PerfectScrollbar from 'react-perfect-scrollbar';
import FileItem from '../FileItem';

const useStyles = makeStyles(theme => ({
  card: {
    '& .MuiCardContent-root': {
      padding: '24px 28px',
    },
  },
  cardTitle: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
    color: '#2D2A26',
  },
  supportDocumentBox: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  supportDownloadButton: {
    minWidth: 188,

    [theme.breakpoints.down('xs')]: {
      maxWidth: 190,
      justifyContent: 'flex-start',
      padding: '6px 0',
    },
  },
  supportScrollbarContainer: {
    border: '1px solid #E6E6E6',
    borderRadius: '2px',
  },
  supportList: {
    maxHeight: 320,
    padding: '12px 28px',

    '& .fileItem': {
      padding: 0,
    },

    [theme.breakpoints.down('xs')]: {
      padding: '12px 12px',
    },
  },
}));

function SupportingSection() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between" className={classes.supportDocumentBox}>
              <Typography variant="h5" component="h2" className={classes.cardTitle}>
                Supporting documents
              </Typography>
              <Button color="primary" startIcon={<GetAppIcon />} className={classes.supportDownloadButton}>
                Download All
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <PerfectScrollbar options={{ suppressScrollX: true }} className={classes.supportScrollbarContainer}>
              <List className={classes.supportList}>
                {[{ name: 'Inventory Database.pdf', size: 205000 }].map(file => (
                  <FileItem key={file.name} file={file} onCancel={() => {}} />
                ))}
              </List>
            </PerfectScrollbar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SupportingSection;
