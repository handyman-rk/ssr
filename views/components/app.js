'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../redux/actions');

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;

      dispatch((0, _actions.fetchAppsIfNeeded)());
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isFetching = _props.isFetching,
          apps = _props.apps;

      var totalapps = apps.length;

      return _react2.default.createElement(
        'div',
        null,
        isFetching && apps.length === 0 && _react2.default.createElement(
          'h2',
          null,
          'Loading...'
        ),
        !isFetching && apps.length === 0 && _react2.default.createElement(
          'h2',
          null,
          'Empty.'
        ),
        _react2.default.createElement(_card2.default, { apps: apps, totalapps: totalapps })
      );
    }
  }]);

  return App;
}(_react.Component);

function mapStateToProps(state) {
  var isFetching = state.isFetching,
      apps = state.apps;


  return {
    isFetching: isFetching,
    apps: apps
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

//export default App;