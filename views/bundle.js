'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _pureClientApp = require('./components/pure-client-app');

var _pureClientApp2 = _interopRequireDefault(_pureClientApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_pureClientApp2.default, null), document.getElementById('app'));