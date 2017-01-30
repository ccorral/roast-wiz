import firebase from 'firebase';
import { firebaseAuth } from 'src/core/firebase';
import {
  REQUEST_ROASTS,
  RECEIVE_ROASTS
} from './action-types';

import { database } from './tmp.js';

const requestRoasts = () => ({
    type: REQUEST_ROASTS
})

const receiveRoasts = (roasts) => ({
    type: RECEIVE_ROASTS,
    payload: roasts
})

export function fetchRoasts() {
  return dispatch => {
      dispatch(requestRoasts())
    setTimeout(() => {
        dispatch(receiveRoasts(database.data.roasts))
    }, 1500)
  }
}
