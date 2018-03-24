'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _configureStore = require('./redux/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _pureClientApp = require('./components/pure-client-app');

var _pureClientApp2 = _interopRequireDefault(_pureClientApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_pureClientApp2.default, null)
), document.querySelector('#app'));