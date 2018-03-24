'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('./actions');

function apps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isFetching: false, apps: [] };
  var action = arguments[1];

  switch (action.type) {
    case _actions.REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case _actions.RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        apps: action.apps
      });
    default:
      return state;
  }
}

exports.default = apps;