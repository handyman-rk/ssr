'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _configureStore = require('./redux/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render(initialState) {
  // Model the initial state
  var store = (0, _configureStore2.default)(initialState);
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_app2.default, null)
  ));

  var preloadedState = store.getState();

  return { content: content, preloadedState: preloadedState };
};