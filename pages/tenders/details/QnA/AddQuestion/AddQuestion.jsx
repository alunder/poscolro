import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, IconButton, Input, Paper, Tooltip, Typography, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
    color: '#2D2A26',
    marginBottom: 32,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(0.5, 2),
  },
  input: {
    width: '100%',

    '& input::placeholder': {
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: '18px',
      color: '#90A4AE',
    },
  },
}));

function AddQuestion({ className, ...rest }) {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = event => {
    event.persist();
    setValue(event.target.value);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <Typography variant="h4" className={classes.title}>
          Post a question to the tender owner
        </Typography>
        <Box display="flex" alignItems="center">
          <Paper className={classes.paper} elevation={1}>
            <Input
              className={classes.input}
              disableUnderline
              onChange={handleChange}
              placeholder="Type your question here"
            />
          </Paper>

          <Tooltip title="Send">
            <IconButton color={value.length > 0 ? 'primary' : 'default'}>
              <SendIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
}

AddQuestion.propTypes = {
  className: PropTypes.string,
};

export default AddQuestion;
