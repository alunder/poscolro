/* eslint-disable react/no-multi-comp */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Tooltip, Button } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatUnderlined from '@material-ui/icons/FormatUnderlined';

const useStyles1 = makeStyles((theme) => ({
  root: {},
  inner: {
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0px 1px 0px #EEEEEE',
  },
  spanWrapper: {
    fontSize: '1.8rem',
    color: '#484542',
  },
  hideDiv: {
    display: 'none',
  },
}));

const useStyles2 = makeStyles((theme) => ({
  button: {
    padding: '6px',
    marginLeft: '0 !important',
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    borderbottom: '1px solid rgba(0, 0, 0, 0.12)',
    minWidth: 32,
    borderRadius: 0,
    color: theme.palette.icon,
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  activeButton: {
    backgroundColor: fade(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main
  },

}));

const BLOCK_TYPES = [
  {
    blockType: 'header-one',
    tooltip: 'Heading 1',
    text: 'H1'
  },
  {
    blockType: 'unordered-list-item',
    tooltip: 'Unordered list',
    icon: FormatListBulletedIcon
  },
  {
    blockType: 'ordered-list-item',
    tooltip: 'Ordered list',
    icon: FormatListNumberedIcon
  }
];

const INLINE_STYLES = [
  {
    inlineStyle: 'BOLD',
    tooltip: 'Bold',
    icon: FormatBoldIcon
  },
  {
    inlineStyle: 'UNDERLINE',
    tooltip: 'Underline',
    icon: FormatUnderlined
  },
  {
    inlineStyle: 'ITALIC',
    tooltip: 'Italic',
    icon: FormatItalicIcon
  },
];

function ButtonBase({
  active, tooltip, children, ...rest
}) {
  const classes = useStyles2();

  return (
    <Tooltip title={tooltip}>
      <Button
        {...rest}
        className={clsx(classes.button, {
          [classes.activeButton]: active
        })}
      >
        {children}
      </Button>
    </Tooltip>
  );
}

ButtonBase.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  tooltip: PropTypes.string
};

function BlockTypeButtons({ editorState, onToggle }) {
  const classes = useStyles1();
  const testRef = useRef(null);

  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  useEffect(() => {
    onToggle('blockType', 'header-one');

    setTimeout(
      clickHiddenH1,
      0
      )
    }, []);

  const clickHiddenH1 = () =>{
    testRef.current.click();
  };

  const handleClick = (event, value) => {
    event.preventDefault();
    onToggle('blockType', value);
  };

  return (
    <>
      {BLOCK_TYPES.map((button, index) => {
        let active = false;

        active = button.blockType === blockType;
        if(index === 0){
          return (
          <div
            ref={testRef}
            onClick={(event) => handleClick(event, button.blockType)}
            className={classes.hideDiv}
          >

          <ButtonBase
            active={active}
            key={button.blockType}
            tooltip={button.tooltip}
          >
            {button.icon ? <button.icon className={classes.spanWrapper} /> : button.text}
          </ButtonBase>
          </div>
          );
        }
        return (
          <ButtonBase
            active={active}
            key={button.blockType}
            onClick={(event) => handleClick(event, button.blockType)}
            tooltip={button.tooltip}
          >
            {button.icon ? <button.icon className={classes.spanWrapper} /> : button.text}
          </ButtonBase>  
          );
      })}
    </>
  );
}

BlockTypeButtons.propTypes = {
  editorState: PropTypes.any.isRequired,
  onToggle: PropTypes.func
};

const InlineStyleButtons = (props) => {
  const classes = useStyles1();

  const { editorState, onToggle } = props;


  const handleClick = (event, inlineStyle) => {
    event.preventDefault();
    onToggle('inlineStyle', inlineStyle);
  };

  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <>
      {INLINE_STYLES.map((button) => (
        <ButtonBase
          active={currentStyle.has(button.inlineStyle)}
          key={button.inlineStyle}
          onClick={(event) => handleClick(event, button.inlineStyle)}
          tooltip={button.tooltip}
        >
          {button.icon ? <button.icon className={classes.spanWrapper}/> : button.text}
        </ButtonBase>
      ))}
    </>
  );
};

InlineStyleButtons.propTypes = {
  editorState: PropTypes.any.isRequired,
  onToggle: PropTypes.func
};

function EditorToolbar({
  editorState, onToggle, className, ...rest
}) {
  
  const classes = useStyles1();



  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <PerfectScrollbar>
        <div className={classes.inner}>
          <InlineStyleButtons
            editorState={editorState}
            onToggle={onToggle}
          />
          <BlockTypeButtons
            editorState={editorState}
            onToggle={onToggle}
          />
        </div>
      </PerfectScrollbar>
    </div>
  );
}

EditorToolbar.propTypes = {
  className: PropTypes.string,
  editorState: PropTypes.any.isRequired,
  onToggle: PropTypes.func
};

export default EditorToolbar;
