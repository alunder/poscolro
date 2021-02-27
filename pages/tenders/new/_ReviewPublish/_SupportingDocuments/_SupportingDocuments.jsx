import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import clsx from 'clsx';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import useStyles from '../styles';

const files = [
  {
    name: 'Inventory Database.pdf',
    src: '/static/files/InventoryDatabase.pdf',
    size: '205KB',
  },
];

const SupportingDocuments = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={clsx(classes.cardPadding, classes.gridListContainer)}>
        <Grid container spacing={2}>
          <Grid style={{ marginBottom: '8px' }} item md={12} xs={12}>
            <span className={classes.bigSpan}>Supporting documents</span>
          </Grid>
          <Grid item md={12} xs={12}>
            {files.map((f, i) => (
              <div key={i.toString()} style={{ border: '1px solid #E5E5E5', borderRadius: '4px', padding: '8px 24px' }}>
                <InsertDriveFileOutlinedIcon />
                <a style={{ color: '#2D2A26' }} download={f.name} className="btn btn-success" href={f.src}>
                  <div style={{ display: 'inline-block', marginLeft: '16px' }}>
                    <p>{f.name}</p>
                    <p> {f.size}</p>
                  </div>
                </a>
              </div>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SupportingDocuments.propTypes = {};

SupportingDocuments.defaultProps = {};

export default SupportingDocuments;
