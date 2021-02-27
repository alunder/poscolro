import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  IconButton,
  Link,
  List,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
  LinearProgress,
} from '@material-ui/core';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import CloseIcon from '@material-ui/icons/Close';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import bytesToSize from './bytesToSize';

const useStyles = makeStyles(theme => ({
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

function SingleUploaderItem({ className, file, onDelete, onUploaded, ...rest }) {
  const classes = useStyles();

  const [completed, setCompleted] = useState(0);
  const [cancel, setCancel] = useState(() => {});
  const isDone = completed >= 100;
  const totalSize = bytesToSize(file.size);
  const partialSize = !completed ? 0 : parseInt(file.size * (completed / 100000));

  useEffect(() => {
    file.getS3params.then(response => {
      const params = response.data;
      const data = new FormData();
      for (let key in params.fields) {
        data.set(key, params.fields[key]);
      }

      data.append('file', file);
      axios({
        headers: { ...params.header, 'Content-Type': 'multipart/form-data' },
        method: params.method,
        url: params.url,
        data: data,
        onUploadProgress: event => {
          setCompleted((event.loaded / event.total) * 100);
        },
      }).then(response => {
        const uploadedFileData = JSON.stringify({
          id: params.fields.key.match(/cache\/(.+)/)[1],
          storage: 'cache',
          metadata: {
            size: file.size,
            filename: file.name,
            mime_type: file.type,
          },
        });
        onUploaded(file.key, uploadedFileData);
      });
    });
  }, []);

  return (
    <ListItem key={file.name} className="fileItem">
      <ListItemIcon>
        <InsertDriveFileOutlinedIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <Box>
            <Typography variant="subtitle1" className={classes.fileName}>
              {file.name}
            </Typography>
            <LinearProgress variant="determinate" value={completed} className={classes.uploadProgress} />
            <Typography variant="subtitle2" className={classes.fileSize}>
              {isDone ? totalSize : `${partialSize}KB out of ${totalSize}`}
            </Typography>
          </Box>
        }
      />
      <Tooltip title={`${isDone ? 'Remove' : 'Cancel'}`}>
        <IconButton
          edge="end"
          onClick={() => {
            onDelete(file);
          }}
        >
          {isDone && <DeleteOutlineIcon />}
        </IconButton>
      </Tooltip>
    </ListItem>
  );
}

SingleUploaderItem.propTypes = {
  className: PropTypes.string,
};

export default SingleUploaderItem;
