import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { useDropzone } from 'react-dropzone';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
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
  Grid,
  colors
} from '@material-ui/core';
import FilePreview from './FilePreview';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoreIcon from '@material-ui/icons/MoreVert';
import bytesToSize from './bytesToSize';
import FileUpload from './FileUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  dropZone: {
    border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(6),
    outline: 'none',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.grey[50],
      opacity: 0.5,
      cursor: 'pointer'
    }
  },
  dragActive: {
    backgroundColor: colors.grey[50],
    opacity: 0.5
  },
  image: {
    width: 130
  },
  info: {
    marginTop: theme.spacing(1)
  },
  list: {
    maxHeight: 20
  },
  actions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

function FilesDropzone({ className, ...rest }) {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const [totalFiles, setTotalFiles] = useState([10]);

  console.log(totalFiles)


  const handleDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles].concat(acceptedFiles));
  }, []);

  const handleRemoveAll = () => {
    setFiles([]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop
  });

  return (
  <> 
    <Grid container spacing={2}>
      <Grid item  lg={5} md={8} xs={12}>
        <FileUpload files={files} setFiles={setFiles}/>
      </Grid>
    </Grid>
    {files.length > 0 && (
        <>
            {console.log('value fo files', files)}
              {files.map((file, i) => (
                <ListItem
                  divider={i < files.length - 1}
                  key={uuid()}
                >
                
                {file &&               
                 <FilePreview file={file}/>
                }
                </ListItem>
              ))}
        </>
      )}    
  </>
  );
}

FilesDropzone.propTypes = {
  className: PropTypes.string,
  files: PropTypes.object,
  setFiles: PropTypes.func,
};

export default FilesDropzone;
