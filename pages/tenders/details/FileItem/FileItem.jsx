import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Box, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import bytesToSize from 'components/FilesDropzone/bytesToSize';

const useStyles = makeStyles(theme => ({
  listItemText: {
    margin: 0,
  },
  uploadProgress: {
    width: '100%',
  },
  fileName: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#2D2A26',
  },
  fileSize: {
    fontSize: '12px',
    lineHeight: '18px',
    color: '#90A4AE',
  },
}));

function SingleUploaderItem({ className, file, onCancel, ...rest }) {
  const classes = useStyles();
  const totalSize = bytesToSize(file.size);

  return (
    <ListItem key={file.name} className="fileItem">
      <ListItemIcon>
        <InsertDriveFileOutlinedIcon />
      </ListItemIcon>
      <ListItemText
        className={classes.listItemText}
        primary={
          <Box>
            <Typography variant="subtitle1" className={classes.fileName}>
              {file.name}
            </Typography>
            <Typography variant="subtitle2" className={classes.fileSize}>
              {totalSize}
            </Typography>
          </Box>
        }
      />
    </ListItem>
  );
}

SingleUploaderItem.propTypes = {
  className: PropTypes.string,
};

export default SingleUploaderItem;
