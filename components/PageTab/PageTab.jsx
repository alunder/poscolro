import React, { Children } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Divider, colors, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// import { Router } from 'routes';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  tabs: {
    // marginTop: theme.spacing(3),
  },
  tab: {
    cursor: 'pointer',
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
  content: {
    marginTop: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonContainer: {
    width: '100%',
  },
}));

export default function PageTab(props) {
  const classes = useStyles();
  const { activeTab, tabs, button } = props;
  const router = useRouter();

  const handleTabsChange = (event, data) => {
    if (data) {
      router.push('/projects/?status='.concat(data));
    } else {
      router.push('/projects');
    }
  };

  return (
    <React.Fragment>
      <Tabs
        className={classes.tabs}
        scrollButtons="auto"
        variant="scrollable"
        value={activeTab}
        onChange={handleTabsChange}
      >
        {tabs.map(tab => (
          <Tab key={tab.value} label={tab.label} value={tab.value} className={classes.tab} />
        ))}

        <Box component="div" textAlign="right" className={classes.buttonContainer}>
          {button}
        </Box>
      </Tabs>

      <Divider className={classes.divider} />
      <div className={classes.content}></div>
    </React.Fragment>
  );
}
