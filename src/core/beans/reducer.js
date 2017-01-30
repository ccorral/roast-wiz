import { Record } from 'immutable';
import { REQUEST_BEANS, RECEIVE_BEANS } from './action-types';


export const beanState = {
  beanList: {},
  isFetching: false
};


export function beanReducer(state = beanState, {payload, type}) {
  switch (type) {
      case REQUEST_BEANS: {
          return {
              ...state,
              isFetching: true
          }
      }
      case RECEIVE_BEANS: {
          return {
              isFetching: false,
              beanList: payload
          }
      }
    default:
      return state;
  }
}
