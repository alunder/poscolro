import uuid from 'uuid/v1';
import { colors } from '@material-ui/core';

export default [
  {
    id: uuid(),
    color: colors.blueGrey['700'],
    field: 'Email',
    initials: 'EM',
    status: 'Not verified',
  },
  {
    id: uuid(),
    color: colors.cyan['500'],
    field: 'Profile',
    initials: 'PR',
    status: 'Not verified',
  },
];
