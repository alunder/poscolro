import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Divider, Typography } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/styles';
import { compose, spacing } from '@material-ui/system';

const StyledDivider = styled(Divider)(compose(spacing));
const useStyles = makeStyles(theme => ({
  box: {
    borderTopWidth: 2,
    borderTopStyle: 'solid',
    borderTopColor: props => {
      if (props.forWho === 'manager') {
        return theme.palette.really.secondary.c285;
      }
      if (props.forWho === 'provider') {
        return theme.palette.really.yellow;
      }
      return theme.palette.really.blue;
    },
  },
  content: {
    marginTop: theme.spacing(3),
  },
  icon: {
    backgroundColor: theme.palette.white,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: props => {
      if (props.forWho === 'manager') {
        return theme.palette.really.secondary.c285;
      }
      if (props.forWho === 'provider') {
        return theme.palette.really.yellow;
      }
      return theme.palette.really.blue;
    },
    color: props => {
      if (props.forWho === 'manager') {
        return theme.palette.really.secondary.c285;
      }
      if (props.forWho === 'provider') {
        return theme.palette.really.yellow;
      }
      return theme.palette.really.blue;
    },
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5),
    lineHeight: `${theme.spacing(4.5)}px`,
    position: 'absolute',
    top: theme.spacing(-4),
    left: theme.spacing(4),
    height: theme.spacing(8),
    width: theme.spacing(8),
    '& svg': {
      fontSize: 32,
      verticalAlign: 'middle',
      maxHeight: '100%',
    },
  },
}));

const AuthForm = props => {
  const { children, description, footer, icon, title } = props;
  const classes = useStyles(props);
  return (
    <Box position="relative" mt={8}>
      {icon && <Box className={classes.icon}>{icon}</Box>}
      <Card className={classes.box}>
        <CardContent className={classes.content}>
          <Typography component="h1" variant="h3">
            {title}
          </Typography>
          <Typography fontWeight="fontWeightMedium" color="textSecondary" variant="body1">
            {description}
          </Typography>
          <StyledDivider my={3} />
          {children}
          <StyledDivider my={3} />
          <Box textAlign="center">
            <Typography color="textSecondary" variant="body1">
              {footer}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

AuthForm.propTypes = {
  children: PropTypes.node,
  description: PropTypes.node,
  footer: PropTypes.node,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
  title: PropTypes.string,
  forWho: PropTypes.string,
};

AuthForm.defaults = {
  forWho: 'default',
};

export default AuthForm;
