'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _title = require('./title');

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tws = require('./tweet');

var CardRight = function (_Component) {
  _inherits(CardRight, _Component);

  function CardRight() {
    _classCallCheck(this, CardRight);

    return _possibleConstructorReturn(this, (CardRight.__proto__ || Object.getPrototypeOf(CardRight)).apply(this, arguments));
  }

  _createClass(CardRight, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'col-right' },
        _react2.default.createElement(
          'div',
          { className: 'app-meta' },
          _react2.default.createElement(_title2.default, { name: this.props.name, publisher: this.props.app.publisher }),
          _react2.default.createElement(
            'span',
            { className: 'app-lic' },
            this.props.app.price
          )
        ),
        _react2.default.createElement('div', { className: 'app-intro', dangerouslySetInnerHTML: { __html: this.props.app.desc } }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { className: 'app-link' },
          _react2.default.createElement(
            'a',
            { className: 'btn', href: this.props.app.link, target: '_blank' },
            'Get App'
          ),
          _react2.default.createElement(
            'a',
            { href: '#/', className: 'btn btn-twitter', title: 'Share on Twitter', rel: 'nofollow',
              onClick: function onClick(e) {
                tws(_this2.props.app.tweet);e.preventDefault();
              } },
            _react2.default.createElement('i', { className: 'icon icon-inline icon-twitter-light ' }),
            'Tweet'
          )
        )
      );
    }
  }]);

  return CardRight;
}(_react.Component);

exports.default = CardRight;