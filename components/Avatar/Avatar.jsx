import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';

const useStyles = makeStyles({
  actions: {
    textAlign: 'center',
    width: '100%',
  },
  media: {
    height: 150,
    padding: 0,
  },
  loader: {
    position: 'absolute',
    left: 'calc(50% - 20px)',
    top: 'calc(50% - 20px)',
  },
});

const Avatar = props => {
  const { imageUrl, loading, onDrop } = props;
  const classes = useStyles();

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*',
    multiple: false,
    disabled: loading,
    onDrop: onDrop,
  });
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea {...getRootProps()}>
          <input {...getInputProps()} />
          {loading && <CircularProgress className={classes.loader} />}
          <CardMedia className={classes.media} image={imageUrl} style={{ opacity: loading ? 0.5 : 1 }} />
        </CardActionArea>
        <CardActions>
          <Button className={classes.actions} onClick={open}>
            ADD PHOTO OR UPLOAD
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default Avatar;
