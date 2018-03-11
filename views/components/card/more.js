'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _license = require('./license');

var _license2 = _interopRequireDefault(_license);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tws = require('./tweet');

var More = function (_Component) {
  _inherits(More, _Component);

  function More() {
    _classCallCheck(this, More);

    return _possibleConstructorReturn(this, (More.__proto__ || Object.getPrototypeOf(More)).apply(this, arguments));
  }

  _createClass(More, [{
    key: 'Dialog',
    value: function Dialog(props) {
      if (props.state) {
        return _react2.default.createElement(
          'div',
          { className: 'pop' },
          _react2.default.createElement(
            'div',
            { className: 'app-head' },
            _react2.default.createElement('img', { className: 'app-icon', src: props.app.img.src, alt: props.app.img.alt, height: '60', width: '60' }),
            _react2.default.createElement(
              'div',
              { className: 'app-meta' },
              _react2.default.createElement(
                'h3',
                null,
                props.app.name
              ),
              _react2.default.createElement(_license2.default, { license: props.app.license })
            ),
            _react2.default.createElement(
              'div',
              { className: 'closepop' },
              _react2.default.createElement(
                'a',
                { href: '#/', onClick: function onClick(e) {
                    props.popm(null);e.preventDefault();
                  } },
                '\u2613'
              )
            )
          ),
          _react2.default.createElement('div', { className: 'app-intro', dangerouslySetInnerHTML: { __html: props.app.desc } }),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'div',
            { className: 'm-app-link' },
            _react2.default.createElement(
              'a',
              { className: 'btn', title: 'Visit Site', href: props.app.link, target: '_blank' },
              'Visit Site'
            ),
            _react2.default.createElement(
              'a',
              { href: '#/', title: 'Share on Twitter', rel: 'nofollow', onClick: function onClick(e) {
                  tws(props.app.tweet);e.preventDefault();
                } },
              _react2.default.createElement('i', { className: 'icon icon-inline icon-twitter ' })
            )
          )
        );
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(this.Dialog, { state: this.props.state, app: this.props.app, popm: this.props.popm });
    }
  }]);

  return More;
}(_react.Component);

exports.default = More;