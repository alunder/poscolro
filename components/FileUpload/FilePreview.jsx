import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  colors
} from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFileOutlined';

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 240
  },
  placeholder: {
    height: 240,
    backgroundColor: colors.blueGrey[50],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  insertDriveFileIcon: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    fontSize: theme.spacing(6)
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  actions: {
    justifyContent: 'center'
  },
  getAppIcon: {
    marignRight: theme.spacing(1)
  },
  menu: {
    width: 250,
    maxWidth: '100%'
  }
}));

function FileCard({ file, className, ...rest }) {
  const classes = useStyles();
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  console.log('value of file', file)

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      {file  ? (
        <CardMedia
          className={classes.media}
          image={URL.createObjectURL(file)}
        />
      ) : (
        <div className={classes.placeholder}>
          <InsertDriveFileIcon className={classes.insertDriveFileIcon} />
        </div>
      )}
      <CardContent className={classes.content}/>
      <Divider />
    </Card>
  );
}

FileCard.propTypes = {
  className: PropTypes.string,
  file: PropTypes.object.isRequired
};

export default FileCard;
