"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      "cat": [{ "name": "Collaboration & Communication", "id": "cc" }, { "name": "Development", "id": "co" }, { "name": "Continuous Integration", "id": "ci" }, { "name": "Configuration Management", "id": "cm" }, { "name": "Virtualization & Containers", "id": "vc" }, { "name": "Security", "id": "sc" }, { "name": "Monitoring & Logging", "id": "ml" }],
      "lic": [{ "name": "Open Source", "id": "op" }, { "name": "Free", "id": "fr" }, { "name": "Paid", "id": "pd" }]
    };
    _this.chkr = _this.chkr.bind(_this);
    _this.Options = _this.Options.bind(_this);

    return _this;
  }

  _createClass(Filter, [{
    key: "chkr",
    value: function chkr(t, id) {
      var ul = this.state[t],
          u = {};

      if (t === "cat") {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = ul[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var li = _step.value;

            if (li.id === id) {
              if (!li.chkd) {
                u = Object.assign(li, { "chkd": true });
                this.props.hsm(t, id, false);
              } else {
                u = Object.assign(li, { "chkd": false });
                this.props.hsm(t, id, true);
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = ul[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _li = _step2.value;

            if (_li.id === id) {
              if (!_li.chkd) {
                u = Object.assign(_li, { "chkd": true });
                this.props.hsm(t, id, -1);
              } else {
                u = Object.assign(_li, { "chkd": false });
                this.props.hsm(t, id, 1);
              }
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
      this.setState(u);
    }
  }, {
    key: "Options",
    value: function Options(props) {
      var ul = props.ul,
          lis = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = ul[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var li = _step3.value;

          if (!li.chkd) {
            lis.push(_react2.default.createElement(
              "li",
              { className: "btn btn-w shd", key: li.id, onClick: this.chkr.bind(this, props.t, li.id) },
              li.name
            ));
          } else {
            lis.push(_react2.default.createElement(
              "li",
              { className: "btn btn-w shd checked", key: li.id, onClick: this.chkr.bind(this, props.t, li.id) },
              li.name
            ));
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return _react2.default.createElement(
        "ul",
        { className: props.t + "-filter" },
        lis
      );
    }
  }, {
    key: "render",
    value: function render() {

      return _react2.default.createElement(
        "div",
        { className: "filter mb-4" },
        _react2.default.createElement(
          "p",
          null,
          "I want tools for:"
        ),
        _react2.default.createElement(this.Options, { ul: this.state.cat, t: "cat" }),
        _react2.default.createElement(
          "p",
          null,
          "that are"
        ),
        _react2.default.createElement(this.Options, { ul: this.state.lic, t: "lic" })
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;