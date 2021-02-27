import _ from 'lodash';
import client from '../grapgql';
import { CREATE_TENDER, UPDATE_TENDER } from './types';

// function getTenders() {
//   return new Promise((resolve, reject) => {
//     client
//       .query({
//         query: GET_TENDERS,
//       })
//       .then(result => {
//         resolve(result.data);
//       })
//       .catch(reject);
//   });
// }

function createNewTender(data) {
  return new Promise((resolve, reject) => {
    client
      .mutate({
        variables: {
          data,
        },
        mutation: CREATE_TENDER,
      })
      .then(result => {
        if (_.get(result, 'data.createTender', false)) {
          resolve(result.data.createTender);
        } else {
          reject(new Error('Create tender failed!'));
        }
      })
      .catch(reject);
  });
}

function updateTender(id, data = {}) {
  return new Promise((resolve, reject) => {
    if (!id) reject(new Error('Tender id is required'));
    else {
      client
        .mutate({
          variables: {
            id,
            data,
          },
          mutation: UPDATE_TENDER,
        })
        .then(result => {
          if (_.get(result, 'data.updateTender', false)) {
            resolve(result.data.updateTender);
          } else {
            reject(new Error('Update tender failed!'));
          }
        })
        .catch(reject);
    }
  });
}

export { createNewTender, updateTender };
