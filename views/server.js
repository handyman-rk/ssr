'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _appServer = require('./components/appServer');

var _appServer2 = _interopRequireDefault(_appServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render(data) {
  var content = _server2.default.renderToString(_react2.default.createElement(_appServer2.default, data));
  return content;
};