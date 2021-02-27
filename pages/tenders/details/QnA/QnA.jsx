/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React, { useState } from 'react';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import AddQuestion from './AddQuestion';
import QuestionCard from './QuestionCard';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  questions: {
    marginTop: theme.spacing(3),
  },
  question: {
    marginBottom: theme.spacing(3),
  },
}));

function QnA() {
  const classes = useStyles();
  const [questions] = useState(mockQuestions);

  return (
    <Box>
      <AddQuestion />
      <div className={classes.questions}>
        {questions.map(question => (
          <QuestionCard className={classes.question} key={question.id} question={question} />
        ))}
      </div>
    </Box>
  );
}

const mockQuestions = [
  {
    id: uuid(),
    author: {
      name: 'CCC Company Pte Ltd',
      avatar: '/images/avatars/avatar_10.png',
    },
    message:
      'You requested for small round table. Are you open to small square tables also? I have a good deal to propose but depends on how open you are. Design is great too.',
    liked: true,
    likes: 1,
    comments: [
      {
        id: uuid(),
        author: {
          name: 'John Doe',
          avatar: '/images/avatars/avatar_12.png',
        },
        message: 'Yes ok. Please quote.',
        created_at: '11 Nov 2019',
      },
    ],
    created_at: '10 Nov 2019',
  },
];

export default QnA;
