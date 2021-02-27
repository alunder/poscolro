import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  getDefaultKeyBinding,
  convertToRaw
} from 'draft-js';
import { makeStyles } from '@material-ui/styles';
import { Paper, Divider } from '@material-ui/core';
import EditorToolbar from './EditorToolbar';
import { blockRenderMap } from './block';

const useStyles = makeStyles((theme) => ({
  root: {},
  charCounter:{
    position: 'absolute',
    color: '#66788a',
    fontSize: '12px',
    right: '16px',
    bottom: '7px'
  },
  editorContainer: {
    position: 'relative',
    padding: `12px ${theme.spacing(2)}px 24px ${theme.spacing(2)}px`,
    minHeight: 220,
    '&:focus': {
      outline: 'none'
    },
    '& .public-DraftEditorPlaceholder-root': {
      ...theme.typography.body2
    },
    '& .public-DraftEditorPlaceholder-inner': {
      fontSize: '14px',
      color: '#2D2A26',
    },
    '& .public-DraftEditorPlaceholder-hasFocus': {
      display: 'none'
    },
    '& .public-DraftEditor-content': {
      ...theme.typography.body1,
      '& h1': {
        ...theme.typography.h1
      },
      '& h2': {
        ...theme.typography.h2
      },
      '& h3': {
        ...theme.typography.h3
      },
      '& h4': {
        ...theme.typography.h4
      },
      '& h5': {
        ...theme.typography.h5
      },
      '& h6': {
        ...theme.typography.h6
      },
      '& blockquote': {
        ...theme.typography.subtitle1
      },
      '& ul': {
        ...theme.typography.body1,
        marginLeft: theme.spacing(4),
      },
      '& ol': {
        ...theme.typography.body1,
        marginLeft: theme.spacing(4),
      },
      '& li': {
        letterSpacing: '1px',
      },
      '& div':{
        letterSpacing: '0px',
      },
      '& pre': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: 'Poppins',
        fontSize: 16,
        padding: 2
      },
    },
  },
}));

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function RichEditor({ placeholder, className, ...rest }) {
  const MAX_CHARS = 1800;
  const classes = useStyles();

  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
  const handleContainerClick = () => {
    editorRef.current.focus();
  };

  const handleToolbarToggle = (type, value) => {
    if (type === 'blockType') {
      setEditorState(RichUtils.toggleBlockType(editorState, value));
    } else {
      setEditorState(RichUtils.toggleInlineStyle(editorState, value));
    }
  };

  const handleEditorChange = (newState) => {
    setEditorState(newState);
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      handleEditorChange(newState);
      return true;
    }

    return false;
  };

  const mapKeyToEditorCommand = (event) => {
    if (event.keyCode === 13 && ( getCurrentCharCount() >= MAX_CHARS)) {
      return;
    }

    if (event.keyCode === 9) {
      const newEditorState = RichUtils.onTab(event, editorState, 4);

      if (newEditorState !== editorState) {
        handleEditorChange(newEditorState);
      }

      return;
    }

    return getDefaultKeyBinding(event);
  };

  const blockStyleFn = (contentBlock) => {
    const textAlign = contentBlock.getData().get('text-align');

    if (textAlign) {
      return classes[`textAlign${capitalize(textAlign)}`];
    }

    return '';
  };

  const getCurrentCharCount = () => {
    const currentContent = editorState.getCurrentContent();
    return currentContent.getPlainText('\u0001').length;
  }

  const _handleBeforeInput = (char, editorState) => {
    const currentContent = editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText('\u0001').length
  
    if (currentContentLength > MAX_CHARS - 1) {
      console.log('you can type max ten characters');
      return 'handled';
    }
  }

  const _handlePastedText = (pastedText, html, editorState) => {
    const currentContent = editorState.getCurrentContent();
    const currentContentLength = currentContent.getPlainText('\u0001').length;

    if (currentContentLength + pastedText.length  > MAX_CHARS -1) {
      console.log('you can type max ten characters');

      return 'handled';
    }
  }




  return (
    <Paper
      {...rest}
      className={clsx(classes.root, className)}
    >
      <EditorToolbar
        editorState={editorState}
        onToggle={handleToolbarToggle}
      />
      <Divider />
      
      <div
        aria-label="Editor Container"
        className={classes.editorContainer}
        role="button"
        onClick={handleContainerClick}
        tabIndex={0}
      >
      
        <Editor
          blockRenderMap={blockRenderMap}
          blockStyleFn={blockStyleFn}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={handleEditorChange}
          placeholder={placeholder}
          handleBeforeInput={_handleBeforeInput}
          ref={editorRef}
          handlePastedText={_handlePastedText}
          spellCheck
        />
        <div className={classes.charCounter}>
          {getCurrentCharCount()}/{MAX_CHARS}
        </div>
      </div>
    </Paper>
  );
}

RichEditor.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
};

export default RichEditor;
