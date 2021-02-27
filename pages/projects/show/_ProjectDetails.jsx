import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  Icon,
  Divider,
  TextareaAutosize,
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  colors,
  Link,
} from '@material-ui/core';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import ProjectAvatar from 'components/ProjectAvatar';
import Label from 'components/Label';

const useStyles = makeStyles(theme => ({
  projectDetails: {
    marginLeft: theme.spacing(2),
  },
  projectField: {
    color: '#8e8c89',
  },
  projectDetailNotes: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  supportingDocuments: {
    color: '#8e8c89',
  },
  supportingDocumentsContainer: {
    padding: '0px',
  },
  fileList: {
    padding: '0px',
  },
}));
const ProjectDetails = ({ project, ...props }) => {
  const classes = useStyles();
  const projectFieldsCol1 = ['Project Status', 'Project ID', 'Location', 'Address'];
  const projectFieldsCol2 = ['Project Start Date', 'Project End Date'];

  const projectDetails = {
    projectStatus: 'active',
    projectId: '#0099910',
    location: 'Serangoon',
    address: '123 Paya Lebar #01-04 Singapore 001',
    projectStartDate: '20 Sep 2019',
    projectEndDate: '20 Mar 2020',
  };

  return <div />;
};
export default ProjectDetails;
