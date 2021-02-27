import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  editorContents: {
    '@global': {
      h4: {
        marginTop: 0,
        marginBotton: '12px',
        fontSize: '20px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.2,
        color: '#263238',
      },
      p: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: 1.71,
        color: '#37474f',
        marginTop: 5,
        marginBottom: 5,
      },
      ul: {
        paddingLeft: 18,
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: 1.71,
        color: '#37474f',
        marginTop: 5,
        marginBottom: 5,
      },
    },
  },
}));

const EditorContents = props => {
  const { data } = props;

  const classes = useStyles();

  return <div className={classes.editorContents} dangerouslySetInnerHTML={{ __html: data }} />;
};

EditorContents.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string,
};

export default EditorContents;
