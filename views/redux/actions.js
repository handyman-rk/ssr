'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAppsIfNeeded = fetchAppsIfNeeded;
var REQUEST_APPS = exports.REQUEST_APPS = 'REQUEST_APPS';
var RECEIVE_APPS = exports.RECEIVE_APPS = 'RECEIVE_APPS';

function requestApps() {
  return {
    type: REQUEST_APPS
  };
}

function receiveApps(json) {
  return {
    type: RECEIVE_APPS,
    apps: json
  };
}

function fetchApps() {
  return function (dispatch) {
    dispatch(requestApps());
    return fetch('assets/data.json').then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receiveApps(json));
    });
  };
}

function shouldFetchApps(state) {
  var apps = state.apps;
  if (apps.length == 0) {
    return true;
  } else if (state.isFetching) {
    return false;
  }
}

function fetchAppsIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchApps(getState())) {
      return dispatch(fetchApps());
    }
  };
}