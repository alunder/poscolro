import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@material-ui/core';
import Message from './Message';

const MessageExample = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </Button>
      <Message open={open} message="Hello!" onClose={onClose} variant="info" />
    </>
  );
};

storiesOf('Message', module).add('Message', () => <MessageExample />);
