import { REQUEST_ROASTS, RECEIVE_ROASTS } from './action-types';


export const roastState = {
  roastList: {},
  isFetching: false
};


export function roastReducer(state = roastState, {payload, type}) {
  switch (type) {
    case REQUEST_ROASTS: {
        return {
            ...state,
            isFetching: true
        }
    }
    case RECEIVE_ROASTS: {
        return {
            isFetching: false,
            roastList: payload
        }
    }
    default:
      return state;
  }
}
