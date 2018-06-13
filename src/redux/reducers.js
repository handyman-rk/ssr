import { REQUEST_APPS,  RECEIVE_APPS } from './actions';

function apps( state = {isFetching: false, apps: []}, action) {
  switch (action.type) {
    case REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        apps: action.apps
      });
    default:
      return state
  }
}

export default apps
