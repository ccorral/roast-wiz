import firebase from 'firebase';
import { firebaseAuth } from 'src/core/firebase';
import {
  REQUEST_BEANS,
  RECEIVE_BEANS
} from './action-types';

import { database } from './tmp.js';

const requestBeans = () => ({
    type: REQUEST_BEANS
})

const receiveBeans = (beans) => ({
    type: RECEIVE_BEANS,
    payload: beans
})

export function fetchBeans() {
  return dispatch => {
      dispatch(requestBeans())
        setTimeout(() => {
            dispatch(receiveBeans(database.data.beans))
        }, 1500)
    }
}
