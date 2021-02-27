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
import ProjectAvatar from '../ProjectAvatar';
import Label from '../Label';

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

  console.log(project);
  return (
    <Grid container spacing={1} className={classes.projectDetails}>
      <Grid item xs={6}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Typography variant="body1" className={classes.projectField}>
                  Project Status:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Label color={projectDetails.projectStatus === 'active' ? colors.green[600] : colors.orange[600]}>
                  {projectDetails.projectStatus === 'active' ? 'Active' : 'Inactive'}
                </Label>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Typography variant="body1" className={classes.projectField}>
                  Project ID:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">#{project.id.padStart(5, 0)}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Typography variant="body1" className={classes.projectField}>
                  Location:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">{project.location}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Typography variant="body1" className={classes.projectField}>
                  Address:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">{project.address}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Typography variant="body1" className={classes.projectField}>
                  Project Start Date:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">{project.startDate ? project.startDate : '-'}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Typography variant="body1" className={classes.projectField}>
                  Project End Date:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">{project.endDate ? project.endDate : '-'}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={11}>
        <Divider />
        <Typography variant="body1" className={classes.projectDetailNotes}>
          {project.description}
        </Typography>
      </Grid>

      <Grid item xs={11}>
        <Card>
          <CardHeader
            subheader={
              <Typography variant="body1" className={classes.supportingDocuments}>
                Supporting Documents ({project.documents.length} in total)
              </Typography>
            }
          />
          <Divider />
          <CardContent className={classes.supportingDocumentsContainer}>
            { project.documents.map(document => {
                return (
                  <List className={classes.fileList}>
                    <ListItem>
                      <ListItemIcon>
                        <InsertDriveFileOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Link component="a" variant="body1" href={document.url} target="_blank">
                            { document.filename }
                          </Link>
                        }
                      />
                    </ListItem>
                  </List>
                );
              })
            }
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
