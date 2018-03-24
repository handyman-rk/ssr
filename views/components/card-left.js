'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardLeft = function (_Component) {
  _inherits(CardLeft, _Component);

  function CardLeft() {
    _classCallCheck(this, CardLeft);

    return _possibleConstructorReturn(this, (CardLeft.__proto__ || Object.getPrototypeOf(CardLeft)).apply(this, arguments));
  }

  _createClass(CardLeft, [{
    key: 'numbersLeadingZero',
    value: function numbersLeadingZero(props) {
      var count = 0;
      if (props.appno < 10) {
        count = ('0' + props.appno).slice(-2);
      } else {
        count = props.appno;
      }
      return _react2.default.createElement(
        'span',
        { className: props.withclass },
        count
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'col-left' },
        _react2.default.createElement(
          'div',
          { className: 'app-no' },
          _react2.default.createElement(this.numbersLeadingZero, { appno: this.props.appno, withclass: 'current' }),
          _react2.default.createElement(
            'span',
            { className: 'connector' },
            'of '
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(this.numbersLeadingZero, { appno: this.props.totalapps, withclass: 'total' })
        ),
        _react2.default.createElement('img', { className: 'app-icon', src: this.props.img.src, alt: this.props.img.alt, height: '120', width: '120' })
      );
    }
  }]);

  return CardLeft;
}(_react.Component);

exports.default = CardLeft;