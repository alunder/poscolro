/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import uuid from 'uuid/v1';
import {
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
  colors,
} from '@material-ui/core';
import SingleUploaderItem from './SingleUploaderItem';

const useStyles = makeStyles(theme => ({
  root: {},
  dropZone: {
    border: '1px dashed #C4C3C2',
    borderRadius: '4px',
    padding: theme.spacing(5),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.grey[50],
      opacity: 0.5,
      cursor: 'pointer',
    },
  },
  dragActive: {
    backgroundColor: colors.grey[50],
    opacity: 0.5,
  },
  image: {
    width: 130,
  },
  title: {
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#263238',
  },
  uploadSubtitle: {
    marginTop: theme.spacing(1),
    maxWidth: '240px',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#66788A',
  },
  scrollbarContainer: {
    border: '1px solid #E6E6E6',
    borderRadius: '2px',
  },
  list: {
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

function FilesDropzone({ className, accept, title, subtitle, onFileChange, uploadUrl, ...rest }) {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const getS3Params = file => {};
  const handleDrop = useCallback(acceptedFiles => {
    const newAcceptedFiles = acceptedFiles.map(file => {
      const url = uploadUrl;
      file.getS3params = axios.get(url, {
        params: {
          filename: file.name,
          type: file.type,
        },
      });
      file.key = uuid();
      return file;
    });
    const newFiles = prevFiles => [...prevFiles].concat(newAcceptedFiles);
    setFiles(newFiles);
    onFileChange(newFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    onDrop: handleDrop,
  });

  const hasFile = files.length > 0;

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div
        className={clsx({
          [classes.dropZone]: true,
          [classes.dragActive]: isDragActive,
        })}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div>
          <img alt="Select file" className={classes.image} src="/images/undraw_add_file2_gvbb.svg" />
        </div>
        <div>
          <Typography gutterBottom variant="h3" className={classes.uploadTitle}>
            {title}
          </Typography>
          <Typography className={classes.uploadSubtitle} color="textSecondary" variant="body1">
            {subtitle} or click to <Link>upload</Link>.
          </Typography>
        </div>
      </div>
      {hasFile && (
        <>
          <PerfectScrollbar options={{ suppressScrollX: true }} className={classes.scrollbarContainer}>
            <List className={classes.list}>
              {files.map(file => (
                <SingleUploaderItem key={file.key} file={file} onDelete={handleDelete} onUploaded={handleUploaded} />
              ))}
            </List>
          </PerfectScrollbar>
        </>
      )}
    </div>
  );

  function handleDelete(deleted) {
    setFiles(files => {
      return files.filter(file => file.key !== deleted.key);
    });
    onFileChange(files);
  }

  function handleUploaded(key, data) {
    setFiles(files => {
      return files.map(file => {
        if (file.key === key) {
          file.documentData = data;
        }
        return file;
      });
    });
    onFileChange(files);
  }
}

FilesDropzone.defaultProps = {
  onFileChange: ([]) => {},
};

FilesDropzone.propTypes = {
  className: PropTypes.string,
  onFileChange: PropTypes.func,
  uploadUrl: PropTypes.string,
};

export default FilesDropzone;
