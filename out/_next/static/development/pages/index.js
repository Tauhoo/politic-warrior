((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.js");
var _jsxFileName = "/home/tauhoo/Documents/politic-warrior/components/Navbar.js";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1em;\n  font-family: 'Roboto';\n  @media (max-width: 650px) {\n    font-size: 2em;\n  }\n  color: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n  @media (max-width: 650px) {\n    justify-content: center;\n    padding: 5px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 1000;\n  top: 0px;\n  left: 0px;\n  background-color: #2d3436;\n  width: 100vw;\n  padding: 5px;\n  display: flex;\n  box-sizing: border-box;\n  @media (max-width: 650px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Politic Warrior")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    UpDateState: props.UpDateState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/Paragraph.js":
/*!*********************************!*\
  !*** ./components/Paragraph.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/tauhoo/Documents/politic-warrior/components/Paragraph.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  background-color: #dfe6e9;\n  padding: 0.5em 1em 1em 1em;\n  box-sizing: border-box;\n  border-radius: 0px 0px 5px 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  font-family: 'Kanit';\n  font-size: 1.5em;\n  display: block;\n  margin: 1em 0em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'kanit';\n  font-size: 1em;\n  display: block;\n  color: #2d3436;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2em;\n  font-family: 'Kanit';\n  color: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  background-color: #2d3436;\n  border-radius: 5px 5px 0px 0px;\n  padding: 0.5em 1em;\n  box-sizing: border-box;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0.5em 0px 0.5em 0px;\n  box-sizing: border-box;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var TopicContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Topic = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject3());
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject4());
var ParagraphTopic = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject5());
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());

var renderData = function renderData(_ref) {
  var _ref2 = _toArray(_ref),
      topic = _ref2[0],
      data = _ref2.slice(1);

  if (topic.title === 'อ้างอิง' || topic.title === 'ดูเพิ่ม') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  var allDetail = data.map(function (detail) {
    return detail.detail.join('');
  }).join('');
  if (allDetail === '' && topic.detail.join('') === '') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  var result = data.length === 0 && (topic.detail.length === 0 || topic.detail[0] === '') ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopicContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Topic, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, topic.title === '' ? 'ประวัติทั่วไป' : topic.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, data.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, topic.detail) : data.map(function (detail, i) {
    return detail.detail.join('') === '' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParagraphTopic, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, detail.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, detail.detail));
  })));
  return result;
};

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return renderData(this.props.data);
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_searcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/searcher */ "./libs/searcher.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/tauhoo/Documents/politic-warrior/components/SearchBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 2px;\n  display: block;\n  font-size: 1em;\n  font-family: 'K2D';\n  box-sizing: border-box;\n  border-radius: 5px;\n  border: none;\n  background-color: #dfe6e9;\n  &:hover {\n    background-color: white;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 0.25em;\n  width: 100%;\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  background-color: #dfe6e9;\n  border-radius: 5px;\n  padding: 5px;\n  box-sizing: border-box;\n  display: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 20px;\n  @media (max-width: 650px) {\n    height: 30px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  border: 0px;\n  outline: none;\n  padding: 1px 1px 1px 5px;\n  font-family: 'K2D';\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  display: flex;\n  flex: 1;\n  border-radius: 5px;\n  padding: 2px;\n  position: relative;\n  float: right;\n  align-items: center;\n  @media (max-width: 650px) {\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form(_templateObject());
var Bar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input(_templateObject2());
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject3());
var PreviewContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4(), function (props) {
  return props.isDisplay ? 'block' : 'none';
});
var PreviewName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject5());

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      input: [],
      keyword: '',
      isSuggest: false,
      isHover: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (input, keyword) {
      if (input === []) return;

      if (input.includes(keyword)) {
        _this.props.UpDateState(keyword);

        _this.setState({
          isSuggest: false,
          isHover: false
        });

        return;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onchange", function (e) {
      var input = e.target.value;

      _this.setState({
        input: input === '' ? [] : Object(_libs_searcher__WEBPACK_IMPORTED_MODULE_1__["default"])(input),
        keyword: input,
        isSuggest: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onsubmit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          input = _this$state.input,
          keyword = _this$state.keyword;

      _this.update(input, keyword);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onclick", function (index) {
      return function () {
        _this.update(_this.state.input, _this.state.input[index]);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onmouseenter", function () {
      _this.setState({
        isHover: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onmouseout", function () {
      _this.setState({
        isHover: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setSuggest", function (isSuggest) {
      return function () {
        _this.setState({
          isSuggest: isSuggest || _this.state.isHover
        });
      };
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        onSubmit: this.onsubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, {
        onChange: this.onchange,
        onFocus: this.setSuggest(true),
        onBlur: this.setSuggest(false),
        placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E19\u0E31\u0E01\u0E01\u0E32\u0E23\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E17\u0E48\u0E32\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        src: "/static/search.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PreviewContainer, {
        isDisplay: this.state.input.length && this.state.isSuggest,
        onMouseEnter: this.onmouseenter,
        onMouseLeave: this.onmouseout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, this.state.input.map(function (name, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PreviewName, {
          key: i,
          onClick: _this2.onclick(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, name);
      })));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/TopProfile.js":
/*!**********************************!*\
  !*** ./components/TopProfile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _libs_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/Image */ "./libs/Image.js");
var _jsxFileName = "/home/tauhoo/Documents/politic-warrior/components/TopProfile.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 30%;\n  display: flex;\n  justify-content: center;\n  @media (max-width: 650px) {\n    width: 100%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 1em 0em 1em 0em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, Object(_libs_Image__WEBPACK_IMPORTED_MODULE_2__["default"])(props.image)));
}); //https://www.yugiohcardmaker.net/ycmaker/createcard.php?name=x&cardtype=Monster&subtype=normal&attribute=Light&level=1&rarity=Common&picture=&circulation=x&set1=x&set2=x&type=x&carddescription=x&atk=x&def=x&creator=x&year=2018&serial=91005152

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/tauhoo/Documents/politic-warrior/components/footer.js";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 20px;\n  width: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Roboto';\n  color: white;\n  font-size: 0.5em;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 60px;\n  width: 100vw;\n  display: flex;\n  background-color: #2d3436;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var LinkGroup = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject4());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/tauhoo.ice",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    src: "/static/facebook.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/Tauhoo/politic-warrior",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    src: "/static/github.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Made by wachirawit wacharak, 2018."));
});

/***/ }),

/***/ "./components/home.js":
/*!****************************!*\
  !*** ./components/home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/tauhoo/Documents/politic-warrior/components/home.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 30%;\n  position: absolute;\n  transform: translate(\n      ", ",\n      -100%\n    )\n    scaleX(", ");\n  top: 100vh;\n  left: ", ";\n  @media (max-width: 650px) {\n    width: 50%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  text-align: center;\n  font-family: 'Kanit';\n  color: #2d3436;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Roboto';\n  font-size: 3em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  background-color: white;\n  top: ", ";\n  height: 100vh;\n  width: 100vw;\n  transition: 1s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.isDisplay ? '0px' : '-100vh';
});
var Name = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject2());
var Detail = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject3());
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject4(), function (props) {
  return props.position === 'left' ? '-0%' : '-100%';
}, function (props) {
  return props.position === 'left' ? '1' : '-1';
}, function (props) {
  return props.position === 'left' ? '0' : '100%';
});

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isShow: true
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        isShow: nextProps.isShow
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        isDisplay: this.state.isShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Politic Warrior"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Detail, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u0E40\u0E23\u0E32\u0E44\u0E14\u0E49\u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E19\u0E31\u0E01\u0E01\u0E32\u0E23\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E43\u0E19\u0E44\u0E17\u0E22\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22\u0E44\u0E27\u0E49\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E32\u0E14\u0E39\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E19\u0E17\u0E35\u0E48\u0E17\u0E48\u0E32\u0E19\u0E2A\u0E19\u0E43\u0E08\u0E01\u0E31\u0E19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
        src: "/static/politicman.svg",
        position: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
        src: "/static/politicman.svg",
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./config/names.js":
/*!*************************!*\
  !*** ./config/names.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['กนก ลิ้มตระกูล', 'กนก วงษ์ตระหง่าน', 'กมล จิระพันธุ์วาณิช', 'กมล เดชะตุงคะ', 'กมล วรรณประภา', 'กร ทัพพะรังสี', 'กรณ์ จาติกวณิช', 'กรพจน์ อัศวินวิจิตร', 'กรวีร์ ปริศนานันทกุล', 'กระแส ชนะวงศ์', 'กริช กงเพชร', 'เกรียงยศ สุดลาภา', 'กรุง ศรีวิไล', 'กฤช สังขทรัพย์', 'กฤษ ศรีฟ้า', 'กฤษฎา อรุณวงษ์ ณ อยุธยา', 'กฤษดาภรณ์ เสียมภักดี', 'กล้วย เชิญยิ้ม', 'กล่อม สระโพธิกุล', 'เจ้าแก้วมงคล ณ เชียงใหม่', 'กว้าง รอบคอบ', 'กวี สิงหะ', 'กษิต ภิรมย์', 'กษิติ กมลนาวิน', 'ก่อเกียรติ สิริยะเสถียร', 'ก่อแก้ว พิกุลทอง', 'กอบศักดิ์ ชุติกุล', 'กอบศักดิ์ ภูตระกูล', 'กอปร กฤตยากีรณ', 'กอร์ปศักดิ์ สภาวสุ', 'กันตธีร์ ศุภมงคล', 'กานต์ เทียนแก้ว', 'การุญ จันทรางศุ', 'การุณ ใสงาม', 'การุณ โหสกุล', 'กำชัย เรืองกาญจนเศรษฐ์', 'กำธร ลาชโรจน์', 'กิตติ รัตนฉายา', 'กิตติ สมทรัพย์', 'กิตติกร โล่ห์สุนทร', 'กิตติศักดิ์ รัฐประเสริฐ', 'กิตติศักดิ์ หัตถสงเคราะห์', 'เกียรติศักดิ์ ส่องแสง', 'กุเทพ ใสกระจ่าง', 'เจ้ากุลวงศ์ ณ เชียงใหม่', 'กุศลหมีเทศริ์ ศรีอารวงศา', 'กูเฮง ยาวอหะซัน', 'เกรน ประชาศรัยสรเดช', 'เกรียง กัลป์ตินันท์', 'เกรียง กีรติกร', 'เกรียงศักดิ์ เจริญวงศ์ศักดิ์', 'เกรียงศักดิ์ ชมะนันทน์', 'เกษตร โรจนนิล', 'เกษม จาติกวณิช', 'เกษม นิมมลรัตน์', 'เกษม รุ่งธนเกียรติ', 'เกษม วัฒนชัย', 'เกษม ศรีพยัคฆ์', 'เกษม ศิริสัมพันธ์', 'หม่อมราชวงศ์เกษมสโมสร เกษมศรี', 'เกษมสันต์ วีระกุล', 'เกียรติ สิทธีอมร', 'เกียรติชัย ชัยเชาวรัตน์', 'เกื้อกูล ด่านชัยวิจิตร', 'โกวิท วัฒนกุล', 'โกวิท วัฒนะ', 'โกวิทย์ ธารณา', 'โกศล ไกรฤกษ์', 'โกศล ปัทมะ', 'ไกร ดาบธรรม', 'ไกรศักดิ์ ชุณหะวัณ', 'ไกรสร จันทร์สุวานิชย์', 'ไกรสร ตันติพงศ์', 'ไกรสร นันทมานพ', 'ขจรศักดิ์ ศรีสวาสดิ์', 'ขยัน วิพรหมชัย', 'ขวัญชัย สาราคำ', 'ขุนทอง ภูผิวเดือน', 'ขุนสุคนธวิทศึกษากร (สำอางค์ สุคนธวิท)', 'คณวัฒน์ วศินสังวร', 'คณิต ณ นคร', 'คณิน บุญสุวรรณ', 'คนึง ฦาไชย', 'คมเดช ไชยศิวามงคล', 'ครรชิต ทับสุวรรณ', 'ครอง จันดาวงศ์', 'ครูมานิตย์ สังข์พุ่ม', 'คล้าย ละอองมณี', 'คึกฤทธิ์ ปราโมช', 'หม่อมราชวงศ์เสนีย์ ปราโมช', 'ควง อภัยวงศ์', 'คำรณ ณ ลำพูน', 'หม่อมราชวงศ์คึกฤทธิ์ ปราโมช', 'คุณากร ปรีชาชนะชัย', 'แคล้ว นรปติ', 'โฆสิต ปั้นเปี่ยมรัษฎ์', 'เงิน บุญสุภา', 'จตุพร เจริญเชื้อ', 'จตุพร พรหมพันธุ์', 'จรัล กุลละวณิชย์', 'จรัล ดิษฐาอภิชัย', 'จรัส พั้วช่วย', 'จรัสฤทธิ์ จันทรสุรินทร์', 'จรูญ กุวานนท์', 'จรูญพงศ์ พันธุ์ศรีนคร', 'จองชัย เที่ยงธรรม', 'จอม รุ่งสว่าง', 'จักรทิพย์ ชัยจินดา', 'จักรพันธุ์ ยมจินดา', 'จักรภพ เพ็ญแข', 'จักรัตน์ พั้วช่วย', 'จักริน พัฒน์ดำรงจิตร', 'จัตุรนต์ คชสีห์', 'จาตุรนต์ ฉายแสง', 'จารุพงศ์ เรืองสุวรรณ', 'จำนงค์ โพธิสาโร', 'จำรัส มังคลารัตน์', 'จำรูญ ไชยลังการณ์', 'จำลอง ครุฑขุนทด', 'จำลอง ดาวเรือง', 'จำลอง ศรีเมือง', 'จำลอง เอี่ยมแจ้งพันธุ์', 'จิตติพจน์ วิริยะโรจน์', 'จิตภัสร์ กฤดากร', 'จิตรพล ณ ลำปาง', 'จินดา วงศ์สวัสดิ์', 'จิร วิชิตสงคราม', 'จิรเดช คชรัตน์', 'จิรวัฒน์ ศิริพานิชย์', 'จิรายุ ห่วงทรัพย์', 'จิรายุ อิศรางกูร ณ อยุธยา', 'จิรายุส เนาวเกตุ', 'จุติ ไกรฤกษ์', 'จุรินทร์ ลักษณวิศิษฎ์', 'จุฤทธิ์ ลักษณวิศิษฎ์', 'จุลพันธ์ อมรวิวัฒน์', 'เจตน์ ศิรธรานนท์', 'เจริญ คันธวงศ์', 'เจริญ จรรย์โกมล', 'เจริญ เชาวน์ประยูร', 'เจริญ สืบแสง', 'เจริญจิตต์ ณ สงขลา', 'เจ๊ะอับดุลลาห์ หลังปูเต๊ะ', 'เจะอามิง โตะตาหยง', 'เจ๊ะอิสมาแอ เจ๊ะโมง', 'เจ้าบุญมี ตุงคนาคร', 'เจ้าวงศ์ แสนศิริพันธุ์', 'เจี่ย ก๊กผล', 'เจียร ศิริรักษ์', 'เจือ ราชสีห์', 'เจือ ศรียาภัย', 'ฉลอง เรี่ยวแรง', 'ฉลาด ขามช่วง', 'ฉลาด วรฉัตร', 'เฉลียว อยู่สีมารักษ์', 'ฉวีรัตน์ เกษตรสุนทร', 'ฉัฐวัสส์ มุตตามระ', 'ฉัตรชัย พะลัง', 'ฉัตรชัย สาริกัลยะ', 'ฉัตรชัย เอียสกุล', 'ฉัตรพันธ์ เดชกิจสุนทร', 'เฉลิม พรหมเลิศ', 'เฉลิม อยู่บำรุง', 'เฉลิมชัย จารุวัสตร์', 'เฉลิมชัย มหากิจศิริ', 'เฉลิมชัย ศรีอ่อน', 'เฉลิมชัย สิทธิสาท', 'เฉลิมชัย เอียสกุล', 'เฉลิมชาติ การุญ', 'เฉลิมเดช ชมพูนุท', 'เฉลิมพล มาลาคำ', 'เฉลิมพล สนิทวงศ์ชัย', 'เฉลิมพันธ์ ศรีวิกรม์', 'เฉลิมยศ แสนวิเศษ', 'เฉลียว ปทุมรส', 'เฉลียว วัชรพุกก์', 'โชคสมาน สีลาวงษ์', 'เชษฐา ฐานะจาโร', 'ชนะ รุ่งแสง', 'ชนินทร์ รุ่งแสง', 'ชบ ยอดแก้ว', 'พระมนูภาณวิมลศาสตร์ (ชม จามรมาน)', 'เจ้าไชยณรงค์ ณ เชียงใหม่', 'เจ้าไชยสุริวงศ์ ณ เชียงใหม่', 'ชลน่าน ศรีแก้ว', 'ชลิตรัตน์ จันทรุเบกษา', 'ชวน หลีกภัย', 'ชวนนท์ อินทรโกมาลย์สุต', 'ชวรัตน์ ชาญวีรกูล', 'ชวลิต ธนะชานันท์', 'ชวลิต ยงใจยุทธ', 'ชวลิต วิชยสุทธิ์', 'ชวลิต อภัยวงศ์', 'ชวลิต โอสถานุเคราะห์', 'ชัจจ์ กุลดิลก', 'ชัชชม กันหลง', 'ชัชชาติ สิทธิพันธุ์', 'ชัชวาลย์ ชมภูแดง', 'ชัย ชิดชอบ', 'ชัยชาญ ช้างมงคล', 'ชัยนันท์ เจริญศิริ', 'ชัยภักดิ์ ศิริวัฒน์', 'ชัยวัฒน์ ไกรฤกษ์', 'ชัยวุฒิ ธนาคมานุสรณ์', 'ชัยวุฒิ บรรณวัฒน์', 'ชัยวุฒิ ผ่องแผ้ว', 'ชาญ พวงเพ็ชร์', 'ชาญ มนูธรรม', 'ชาญ อังศุโชติ', 'ชาญชัย ชัยรุ่งเรือง', 'ชาญชัย ปทุมารักษ์', 'ชาญชัย ไพรัชกุล', 'ชาญชัย อิสระเสนารักษ์', 'ชาดา ไทยเศรษฐ์', 'ชาติชาย เจียมศรีพงษ์', 'ชาติชาย ชุณหะวัณ', 'ชาติชาย พุคยาภรณ์', 'ชาลี กางอิ่ม', 'ชำนาญ ยุวบูรณ์', 'ชำนิ ศักดิเศรษฐ์', 'ชิงชัย มงคลธรรม', 'ชิดชัย วรรณสถิตย์', 'ชิต มั่นศิลป์ สินาดโยธารักษ์', 'ชินชัย แก้วเรือน', 'ชินวรณ์ บุณยเกียรติ', 'ชินวัฒน์ หาบุญพาด', 'ชินวุธ สุนทรสีมะ', 'ชื่น ระวิวรรณ', 'ชื่นชอบ คงอุดม', 'ชุติมา บุณยประภัศร', 'ชุมพล จุลใส', 'ชุมพล โลหะชาละ', 'ชุมพล ศิลปอาชา', 'ชูกัน กุลวงษา', 'ชูชาติ หาญสวัสดิ์', 'ชูชีพ หาญสวัสดิ์', 'ชูวิทย์ กมลวิศิษฎ์', 'ชูวิทย์ จิตรสกุล', 'ชูวิทย์ พิทักษ์พรพัลลภ', 'ชูศักดิ์ ศิรินิล', 'ชูสง่า ฤทธิประศาสน์', 'ชูสิน โคนันทน์', 'เช็งจือ ลือประเสริฐ', 'เชน เทือกสุบรรณ', 'พระยาสุนทรพิพิธ (เชย สุนทรพิพิธ)', 'เชาวน์ มณีวงษ์', 'เชาวน์วัศ สุดลาภา', 'เชาวรินธร์ ลัทธศักดิ์ศิริ', 'หม่อมหลวงเชิงชาญ กำภู', 'เชิดชัย ตันติศิรินทร์', 'เชิดพงศ์ ราชป้องขันธ์', 'เชียรช่วง กัลยาณมิตร', 'เชื้อ ทิพย์มณี', 'โชติ คุณะเกษม', 'โชติ คุ้มพันธ์', 'ไชยยศ จิรเมธากร', 'ไชยยศ สะสมทรัพย์', 'ไชยวัฒน์ ติณรัตน์', 'ไชยวัฒน์ ไตรยสุนันท์', 'ไชยวัฒน์ สินสุวงศ์', 'ไชยศิริ เรืองกาญจนเศรษฐ์', 'ไชยา พรหมา', 'ไชยา สะสมทรัพย์', 'ซูการ์โน มะทา', 'ญาติ ไหวดี', 'ฐากร ตัณฑสิทธิ์', 'ฐานิสร์ เทียนทอง', 'ณรงค์ กิตติขจร', 'ณรงค์ พิพัฒนาศัย', 'ณรงค์ ภูอิทธิวงศ์', 'ณรงค์ มหานนท์', 'ณรงค์ วงศ์วรรณ', 'ณรงค์ หนานโฮ๊ะ นิยมไทย', 'ณรงค์ชัย อัครเศรณี', 'ณรงค์เลิศ สุรพล', 'ณะ อารีนิจ', 'ณัชพล ตันเจริญ', 'ณัฎฐ์ บรรทัดฐาน', 'ณัฏฐพล ทีปสุวรรณ', 'ณัฐ อินทรเจริญ', 'ณัฐพงษ์ สุปริยศิลป์', 'ณัฐวุฒิ ประเสริฐสุวรรณ', 'ณัฐวุฒิ ใสยเกื้อ', 'เดโช สวนานนท์', 'ดนุพร ปุณณกันต์', 'ดอน ปรมัตถ์วินัย', 'ดาบชัย อัคราช', 'ดามพ์ ดัสกร', 'ดาว์พงษ์ รัตนสุวรรณ', 'ดำรง ลัทธพิพัฒน์', 'ดำรงค์ พิเดช', 'หม่อมราชวงศ์ดำรงดิศ ดิศกุล', 'ดำริ น้อยมณี', 'ดิเรก เจริญผล', 'ดิเรก ชัยนาม', 'ดิสทัต คำประกอบ', 'ดุสิต รังคสิริ', 'ดุสิต ศิริวรรณ', 'เดช บุญ-หลง', 'เดชา สุขารมณ์', 'เด่น โต๊ะมีนา', 'ตรี ด่านไพบูลย์', 'ตรีทศ สนแจ้ง', 'ต่อพงษ์ ไชยสาส์น', 'ตามใจ ขำภโต', 'ตุ่น จินตะเวช', 'พระยาสมันตรัฐบุรินทร์ (ตุ๋ย บินอับดุลลาห์)', 'เตียง ศิริขันธ์', 'ไตรรงค์ ติธรรม', 'ไตรรงค์ สุวรรณคีรี', 'ถนอม กิตติขจร', 'ถนอม อ่อนเกตุพล', 'ถวัลย์ ธำรงนาวาสวัสดิ์', 'ถวิล จันทร์ประสงค์', 'ถวิล ไพรสณฑ์', 'ถวิล รายนานนท์', 'ถวิล ฤกษ์หร่าย', 'ถวิล อุดล', 'ถัด พรหมมาณพ', 'ถาวร เกียรติไชยากร', 'ถาวร เสนเนียม', 'ถิรชัย วุฒิธรรม', 'ไถง สุวรรณทัต', 'ทนง พิทยะ', 'ทนุศักดิ์ เล็กอุทัย', 'ทรงชัย วงศ์สวัสดิ์', 'ทรงยศ รามสูต', 'ทรงศักดิ์ ทองศรี', 'พระยาทรงสุรเดช (เทพ พันธุมเสน)', 'ทวิช กลิ่นประทุม', 'ทวี ไกรคุปต์', 'ทวี จุลละทรัพย์', 'ทวี แรงขำ', 'ทวี สุรฤทธิกุล', 'ทวี สุระบาล', 'ทวีศักดิ์ สุภาศรี', 'ทวีศักดิ์ อนรรฆพันธ์', 'ทวีศักดิ์ อับดุลบุตร', 'ทศพร เทพบุตร', 'ทศพร มูลศาสตรสาทร', 'ทศพร เสรีรักษ์', 'ทศพล สังขทรัพย์', 'ทอง กันทาธรรม', 'ทองใบ ทองเปาด์', 'ทองเปลว ชลภูมิ', 'ทองมาก จันทะลือ', 'ทองหยด จิตตวีระ', 'ทองหล่อ พลโคตร', 'ทองอินทร์ ภูริพัฒน์', 'ทักษิณ ชินวัตร', 'ทันกวินท์ รัฐวัฒก์อังกูร', 'ทัศนัย บูรณุปกรณ์', 'ทายาท เกียรติชูศักดิ์', 'ทินกร พันธุ์กระวี', 'ทินพันธุ์ นาคะตะ', 'ทินวัฒน์ มฤคพิทักษ์', 'ทิวา เงินยวง', 'เทียม ไชยนันทน์', 'เทพ โชตินุชิต', 'เทพไท เสนพงศ์', 'พระยาเทพหัสดิน (ผาด เทพหัสดิน ณ อยุธยา)', 'เทวฤทธิ์ นิกรเทศ', 'เทอดพงษ์ ไชยนันทน์', 'เที่ยง เรืองประดิษฐ์', 'เทียน อัชกุล', 'เทียนชัย ศิริสัมพันธ์', 'แทนคุณ จิตต์อิสระ', 'ไทกร พลสุวรรณ', 'ธงทอง จันทรางศุ', 'ธนะศักดิ์ ปฏิมาประกร', 'ธนา ชีรวินิจ', 'ธนา เมตตาริกานนท์', 'ธนาธร จึงรุ่งเรืองกิจ', 'ธนาธร โล่ห์สุนทร', 'ธนิต ไตรวุฒิ', 'ธนิตพล ไชยนันทน์', 'ธเนตร เอียสกุล', 'ธเนศ เครือรัตน์', 'ธรรมนูญ เทียนเงิน', 'ธรรมนูญ ฤทธิมณี', 'ธรรมรักษ์ อิศรางกูร ณ อยุธยา', 'ธรรมวิชญ์ โพธิพิพิธ', 'ธวัช บุญเฟื่อง', 'ธวัช วิชัยดิษฐ', 'ธวัช สุรินทร์คำ', 'ธวัชชัย สมุทรสาคร', 'ธวัชชัย อนามพงษ์', 'ธวัชวงศ์ ณ เชียงใหม่', 'ธัญ การวัฒนาศิริกุล', 'ธานินทร์ กรัยวิเชียร', 'ธานินทร์ ใจสมุทร', 'ธานี เทือกสุบรรณ', 'ธารินทร์ นิมมานเหมินท์', 'ธำรงค์ ไทยมงคล', 'ธีรชัย นาควานิช', 'ธีรพล นพรัมภา', 'ธีรภัทร พริ้งศุลกะ', 'ธีรภัทร์ เสรีรังสรรค์', 'ธีร์ศิลป์ คัมภีรญาณนนท์', 'ธีระ ไตรสรณกุล', 'ธีระ วงศ์สมุทร', 'ธีระ สลักเพชร', 'ธีระเกียรติ เจริญเศรษฐศิลป์', 'ธีระชัย ภูวนาถนรานุบาล', 'ธีระชัย ศิริขันธ์', 'ธีระชัย แสนแก้ว', 'ธีระวัฒน์ ศิริวันสาณฑ์', 'เธียร วิปุลากร', 'นคร มาฉิม', 'นที ขลิบทอง', 'นพคุณ รัฐผไท', 'นพดล ปัทมะ', 'นพดล อินนา', 'นพพล เหลืองทองนารา', 'นรพล ตันติมนตรี', 'หลวงนรัตถรักษา (ชื่น วิจิตรเนตร)', 'นราพัฒน์ แก้วทอง', 'นริศ ขำนุรักษ์', 'นริศร ทองธิราช', 'นฤชาติ บุญสุวรรณ', 'นวัธ เตาะเจริญสุข', 'น้อม อุปรมัย', 'นัจมุดดีน อูมา', 'นาท ภูวนัย', 'นาราชา สุวิทย์', 'นิกร จำนง', 'นิคม เชาว์กิตติโสภณ', 'นิคม ไวยรัชพานิช', 'นิคม แสนเจริญ', 'นิติภูมิธณัฐ มิ่งรุจิราลัย', 'นิติรัฐ สุนทรวร', 'นิติวัฒน์ จันทร์สว่าง', 'นิทัศน์ ศรีนนท์', 'นิธิพัฒน์ ชาลีจันทร์', 'นิพนธ์ บุญญามณี', 'นิพนธ์ พร้อมพันธุ์', 'นิพนธ์ วิสิษฐยุทธศาสตร์', 'นิพนธ์ ศรีธเรศ', 'นิพนธ์ ศศิธร', 'นิพิฏฐ์ อินทรสมบัติ', 'นิมุคตาร์ วาบา', 'นิยม ช่างพินิจ', 'นิยม วรปัญญา', 'นิยม วิวรรธนดิฐกุล', 'นิยม เวชกามา', 'นิรมิต สุจารี', 'นิรันดร์ นาเมืองรักษ์', 'นิวัฒน์ธำรง บุญทรงไพศาล', 'นิสสัย โรจนะหัสดิน', 'นิสิต สินธุไพร', 'นุกูล ธนิกุล', 'นุกูล ประจวบเหมาะ', 'นุกูล แสงศิริ', 'เนตร เขมะโยธิน', 'เนวิน ชิดชอบ', 'บดี จุณณานนท์', 'บรรยิน ตั้งภากรณ์', 'บวรศักดิ์ อุวรรณโณ', 'บัญญัติ เทพหัสดิน ณ อยุธยา', 'บัญญัติ บรรทัดฐาน', 'บัณจงศักดิ์ วงศ์รัตนวรรณ', 'บัณฑูร สุภัควณิช', 'บันเทิง อับดุลบุตร', 'บิลลี่ โอแกน', 'นายวรการบัญชา (บุญเกิด สุตันตานนท์)', 'บุญเกิด หิรัญคำ', 'บุญแก้ว สมวงศ์', 'บุญคุ้ม จันทรศรีสุริยวงศ์', 'บุญจง วงศ์ไตรรัตน์', 'บุญชง วีสมหมาย', 'บุญชนะ อัตถากร', 'บรรหาร ศิลปอาชา', 'บุญชู ตรีทอง', 'บุญชู นิลถนอม', 'บุญชู โรจนเสถียร', 'บุญฐิน ประทุมลี', 'บุญเติม จันทะวัฒน์', 'บุญถึง ผลพานิชย์', 'บุญทรง เตริยาภิรมย์', 'บุญเท่ง ทองสวัสดิ์', 'บุญเทียม เขมาภิรัตน์', 'บุญผ่อง สิริเวชชะพันธ์', 'บุญพันธ์ แขวัฒนะ', 'บุญมา วงศ์สวรรค์', 'บุญมาก ศิริเนาวกุล', 'บุญยง วัฒนพงศ์', 'บุญยอด สุขถิ่นไทย', 'บุญรอด บิณฑสันต์', 'บุญลือ ประเสริฐโสภา', 'เจ้าบุญเลิศ ณ เชียงใหม่', 'บุญเลิศ บูรณุปกรณ์', 'บุญเลิศ เลิศปรีชา', 'บุญเลิศ สว่างกุล', 'บุญส่ง ไข่เกษ', 'บุญส่ง ชเลธร', 'บุญส่ง สมใจ', 'บุญหลง ถาคำฟู', 'บุญเอื้อ ประเสริฐสุวรรณ', 'บุณคณาวัฒน์ ภู่จีนาพันธุ์', 'บุรณัชย์ สมุทรักษ์', 'บุศรินทร์ ภักดีกุล', 'บูราฮานูดิน อุเซ็ง', 'ปกรณ์ บูรณุปกรณ์', 'ปกรณ์ มุ่งเจริญพร', 'ปกิต พัฒนกุล', 'ปณวัตร เลี้ยงผ่องพันธุ์', 'ปณิธาน วัฒนายากร', 'หม่อมหลวงปนัดดา ดิศกุล', 'ประกอบ จิรกิติ', 'ประกอบ ประยูรโภคราช', 'ประกอบ รัตนพันธ์', 'ประกอบ สังข์โต', 'ประกายพฤกษ์ ศรุตานนท์', 'ประกายเพชร อินทุโสภณ', 'พระประจนปัจจนึก (พุก มหาดิลก)', 'ประจวบ ชนะภัย', 'ประจวบ ไชยสาส์น', 'ประจวบ บุนนาค', 'ประจักษ์ แกล้วกล้าหาญ', 'ประจักษ์ สว่างจิตร', 'ประจิน จั่นตอง', 'ประชัย เลี่ยวไพรัตน์', 'ประชา คุณะเกษม', 'ประชา บูรณธนิต', 'ประชา ประสพดี', 'ประชา พรหมนอก', 'ประชา มาลีนนท์', 'ประณีต กลิ่นโกสุม', 'เจ้าประดิษฐ์ ณ น่าน', 'ประดิษฐ์ ภัทรประสิทธิ์', 'ประดิษฐ สินธวณรงค์', 'ประเดิม ดำรงเจริญ', 'ประทวน เขียวฤทธิ์', 'ประทวน รมยานนท์', 'ประทิน สันติประภพ', 'ประเทือง กีรติบุตร', 'ประเทือง คำประกอบ', 'ประเทือง ปานลักษณ์', 'ประเทือง วิจารณ์ปรีชา', 'ประพร เอกอุรุ', 'ประพัฒน์ กฤษณจันทร์', 'ประพัฒน์ ปัญญาชาติรักษ์', 'ประพันธ์ คูณมี', 'ประพันธ์ บูรณุปกรณ์', 'ประพันธ์ศักดิ์ กมลเพ็ชร', 'ประพาส ลิมปะพันธุ์', 'ประภัตร โพธสุธน', 'ประภัทรพงศ์ เวชชาชีวะ', 'ประภัสร์ จงสงวน', 'ประมวล กุลมาตย์', 'ประมวล พงศ์ถาวราเดช', 'ประมวล รุจนเสรี', 'ประมวล สภาวสุ', 'ประมาณ เลืองวัฒนะวณิช', 'ประมาณ อดิเรกสาร', 'ประยุทธ์ จันทร์โอชา', 'ประยุทธ มหากิจศิริ', 'ประยุทธ์ ศิริพานิชย์', 'ประยูร จินดาศิลป์', 'ประยูร ภมรมนตรี', 'ประยูร สุรนิวงศ์', 'ประยูร อภัยวงศ์', 'พระยาอุดมพงศ์เพ็ญสวัสดิ์ (หม่อมราชวงศ์ประยูร อิศรศักดิ์)', 'ประโยชน์ เนื่องจำนงค์', 'ประวัฒน์ อุตโมท', 'ประวิช รัตนเพียร', 'ประวิตร วงษ์สุวรรณ', 'ประศาสตร์ ทองปากน้ำ', 'ประสงค์ โฆษิตานนท์', 'ประสงค์ บูรณ์พงศ์', 'ประสงค์ สุ่นศิริ', 'ประสพ บุษราคัม', 'ประสพสุข บุญเดช', 'ประสาท ตันประเสริฐ', 'ประสาท สุขุม', 'ประสิทธิ์ กาญจนวัฒน์', 'ประสิทธิ์ โฆวิไลกูล', 'ประสิทธิ์ จุลละเกศ', 'ประสิทธิ์ ชัยวิรัตนะ', 'ประสิทธิ์ ไชยศรีษะ', 'ประสิทธิ์ ณรงค์เดช', 'ประสิทธิ์ วุฒินันชัย', 'ประสูตร รัศมีแพทย์', 'ประเสริฐ จันทรรวงทอง', 'ประเสริฐ ชัยกิจเด่นนภาลัย', 'ประเสริฐ ชิตพงศ์', 'ประเสริฐ ทรัพย์สุนทร', 'ประเสริฐ บุญชัยสุข', 'ประเสริฐ บุญเรือง', 'ประเสริฐ พงษ์สุวรรณศิริ', 'ประเสริฐ มงคลศิริ', 'ประแสง มงคลศิริ', 'ปราโมทย์ นาครทรรพ', 'ปราโมทย์ สุขุม', 'ปริญญา ฤกษ์หร่าย', 'ปรีชา จันทร์โอชา', 'ปรีชา บัววิรัตน์เลิศ', 'ปรีชา บุญมี', 'ปรีชา ผ่องเจริญกุล', 'ปรีชา มุสิกุล', 'ปรีชา เร่งสมบูรณ์สุข', 'ปรีชา เลาหพงศ์ชนะ', 'ปรีชาพล พงษ์พานิช', 'ปรีดา กรรณสูต', 'ปรีดา พัฒนถาบุตร', 'หม่อมราชวงศ์ปรีดิยาธร เทวกุล', 'ปรีดี พนมยงค์', 'ปลอดประสพ สุรัสวดี', 'ปวีณ แซ่จึง', 'ปองพล อดิเรกสาร', 'ปอรรัชม์ ยอดเณร', 'ปัญจะ เกสรทอง', 'ปัญญวัฒน์ บุญมี', 'ปัญญา จินตะเวช', 'ปัญญา จีนาคำ', 'ปัญญา ศรีปัญญา', 'ขุนคงฤทธิศึกษากร (ปาน คงฤทธิ์ศึกษากร)', 'ปาน พึ่งสุจริต', 'ปานเทพ พัวพงษ์พันธ์', 'ปานปรีย์ พหิทธานุกร', 'ปานศักดิ์ รังสิพราหมณกุล', 'ปารเมศ โพธารากุล', 'หม่อมหลวงปิ่น มาลากุล', 'ปิยวัฒน พันธ์สายเชื้อ', 'ปิยะ อังกินันทน์', 'ปิยะณัฐ วัชราภรณ์', 'ปีติพงศ์ พึ่งบุญ ณ อยุธยา', 'ปุณมี ปุณศรี', 'ปุระชัย เปี่ยมสมบูรณ์', 'เปรม มาลากุล ณ อยุธยา', 'เปรม รุจิเรข', 'เปรมศักดิ์ เพียยุระ', 'เปลื้อง ณ นคร', 'แปลก พิบูลสงคราม', 'โป-ระ สมาหาร', 'ไผ่ ลิกค์', 'ผดุง ลิ้มเจริญรัตน์', 'ผัน บุญชิต', 'เผดิมชัย สะสมทรัพย์', 'เผ่า ศรียานนท์', 'แผน สิริเวชชะพันธ์', 'พงศกร เลาหวิเชียร', 'พงศกร อรรณนพพร', 'พงศ์เทพ เทพกาญจนา', 'พงศ์ประยูร ราชอาภัย', 'พงศ์พันธ์ ยอดเมืองเจริญ', 'พงศพัศ พงษ์เจริญ', 'พงศ์เวช เวชชาชีวะ', 'พงษ์ศักดิ์ รักตพงศ์ไพศาล', 'พงษ์อุดม ตรีสุขี', 'พงส์ สารสิน', 'พจน์ วิเทตยนตรกิจ', 'พจน์ สารสิน', 'ไพจิต ศรีวรขาน', 'พนัส สิมะเสถียร', 'พนิช วิกิตเศรษฐ์', 'พเยาว์ พูนธรัตน์', 'พรชัย รุจิประภา', 'พรชัย อรรถปรียางกูร', 'พรเทพ เตชะไพบูลย์', 'พรวุฒิ สารสิน', 'พรศักดิ์ เจริญประเสริฐ', 'พรหมินทร์ เลิศสุริย์เดช', 'พร้อม บุญฤทธิ์', 'พร้อมพงศ์ นพฤทธิ์', 'พระประกาศสหกรณ์ (สดับ วีรเธียร)', 'พระยานลราชสุวัจน์ (ทองดี นลราชสุวัจน์)', 'พระยาศรีธรรมราช (ทองคำ กาญจนโชติ)', 'พระยาอรรถการีย์นิพนธ์ (สิทธิ จุณณานนท์)', 'พระสารสาสน์ประพันธ์ (ชื้น จารุวัสตร์)', 'พระสุธรรมวินิจฉัย (ชม วณิกเกียรติ)', 'ไพโรจน์ ตันบรรจง', 'ไพโรจน์ อิสระเสรีพงษ์', 'พฤฒิชัย ดำรงรัตน์', 'พฤฒิชัย วิริยะโรจน์', 'พฤณท์ สุวรรณทัต', 'พล เริงประเสริฐวิทย์', 'พลกฤษณ์ หงษ์ทอง', 'พลภูมิ วิภัติภูมิประเทศ', 'พศ อดิเรกสาร', 'พระยาพหลพลพยุหเสนา (พจน์ พหลโยธิน)', 'พ้อง ชีวานันท์', 'พัฒนา สัพโส', 'ขุนพันธรักษ์ราชเดช (บุตร พันธรักษ์)', 'พันธ์เลิศ ใบหยก', 'พันธุ์เทพ สุลีสถิร', 'พันธุ์ศักดิ์ เกตุวัตถา', 'พานิช สัมภวคุปต์', 'พายัพ ชินวัตร', 'พิจิตต รัตตกุล', 'พิชัย กุลละวณิชย์', 'พิชัย เกียรติวินัยสกุล', 'พิชัย นริพทะพันธุ์', 'พิชัย รัตตกุล', 'พิชาญเมธ ม่วงมณี', 'พิชิต อัคราทิตย์', 'พิเชฐ พัฒนโชติ', 'พิเชษฐ์ เชื้อเมืองพาน', 'พิเชษฐ์ ตันเจริญ', 'พิเชษฐ พันธุ์วิชาติกุล', 'พิเชษฐ สถิรชวาล', 'พิเชียร อำนาจวรประเสริฐ', 'พิทักษ์ รังสีธรรม', 'พิทักษ์ อินทรวิทยนันท์', 'พินิจ จันทร์สมบูรณ์', 'พินิจ จันทรสุรินทร์', 'พินิจ จารุสมบัติ', 'พิภพ อะสีติรัตน์', 'พิมล ศรีวิกรม์', 'พิรุณ อินทราวุธ', 'พิศาล มูลศาสตรสาทร', 'หลวงสุนาวินวิวัฒน์ (พิศาล สุนาวินวิวัฒน์)', 'พิศิษฐ์ ศาลิคุปต์', 'พิษณุ พลไวย์', 'พีรพันธุ์ พาลุสุข', 'พีรยศ ราฮิมมูลา', 'พีระพงศ์ ถนอมพงษ์พันธุ์', 'พีระพันธุ์ สาลีรัฐวิภาค', 'พีระเพชร ศิริกุล', 'พีระศักดิ์ พอจิต', 'พึ่ง ศรีจันทร์', 'พุฒิพงศ์ สงวนวงศ์ชัย', 'พุทธิพงษ์ ปุณณกันต์', 'พระราชธรรมนิเทศ (เพียร ไตติลานนท์)', 'โพธิพงษ์ ล่ำซำ', 'ไพจิตร อักษรณรงค์', 'ไพจิตร เอื้อทวีกุล', 'ไพฑูรย์ แก้วทอง', 'ไพฑูรย์ เครือแก้ว ณ ลำพูน', 'ไพบูลย์ คุ้มฉายา', 'ไพบูลย์ นิติตะวัน', 'ไพร พัฒโน', 'ไพรัตน์ เดชะรินทร์', 'ไพรินทร์ ชูโชติถาวร', 'ไพโรจน์ เครือรัตน์', 'ไพโรจน์ เฉลียวศักดิ์', 'ไพโรจน์ ไชยพร', 'ไพโรจน์ โล่ห์สุนทร', 'ไพโรจน์ สุวรรณฉวี', 'ไพศาล จันทรภักดี', 'ไพศาล พืชมงคล', 'ไพศาล ยิ่งสมาน', 'เฟื่องวิชชุ์ อนิรุทธเทวา', 'ภคิน ปริศนานันทกุล', 'ภราดร ปริศนานันทกุล', 'ภักดีหาญส์ หิมะทองคำ', 'ภิญญา ช่วยปลอด', 'ภิญโญ นิโรจน์', 'ภิรพล ลาภาโรจน์กิจ', 'ภุชงค์ รุ่งโรจน์', 'ภูมิ สาระผล', 'ภูมิธรรม เวชยชัย', 'ภูมินทร์ ลีธีระประเสริฐ', 'เภา เพียรเลิศ บริภัณฑ์ยุทธกิจ', 'โภคิน พลกุล', 'มงคล จงสุทธนามณี', 'มงคล สุคนธขจร', 'มณฑล ไกรวัตนุสสรณ์', 'มณเฑียร บุญตัน', 'เมตตา เต็มชำนาญ', 'มติ ตั้งพานิช', 'มนตรี เจนวิทย์การ', 'มนตรี ตั้งเจริญถาวร', 'มนตรี ปาน้อยนนท์', 'มนตรี พงษ์พานิช', 'มนต์สิทธิ์ คำสร้อย', 'มนูญกฤต รูปขจร', 'พระยามโนปกรณนิติธาดา (ก้อน หุตะสิงห์)', 'มอนอินทร์ รินคำ', 'มั่น พัธโนทัย', 'พระยามานวราชเสวี (ปลอด วิเชียร ณ สงขลา)', 'มานะ คงวุฒิปัญญา', 'มานะ แพรสกุล', 'มานะ มหาสุวีระชัย', 'มานะ รัตนโกเศศ', 'มานะ โลหะวณิชย์', 'มานะศักดิ์ จันทร์ประสงค์', 'มานิต นพอมรบดี', 'มาโนช เสนาชู', 'มาโนชญ์ วิชัยกุล', 'มารุต บุนนาค', 'มารุต มัสยวาณิช', 'มาลัย หุวะนันทน์', 'มิ่งขวัญ แสงสุวรรณ', 'มีชัย ฤชุพันธุ์', 'มีชัย วีระไวทยะ', 'มุข สุไลมาน', 'มูฮำมัดอารีฟีน จะปะกิยา', 'เมธ รัตนประสิทธิ์', 'เมธี ธรรมรังสี', 'โมฮามัดยาสรี ยูซง', 'ยงยศ อรุณเวสสะเศรษฐ', 'ยงยุทธ ติยะไพรัช', 'ยงยุทธ นพเกตุ', 'ยงยุทธ มัยลาภ', 'ยงยุทธ ยุทธวงศ์', 'ยงยุทธ วิชัยดิษฐ', 'ยงยุทธ สุวภาพ', 'ยิ่งลักษณ์ ชินวัตร', 'ยศ อินทรโกมาลย์สุต', 'ยศวริศ ชูกล่อม', 'ยอด นครนายก', 'ยอดมนู ภมรมนตรี', 'ยิ่งพันธ์ มนะสิการ', 'ยุคล ลิ้มแหลมทอง', 'ยุซรี ซูสารอ', 'ยุทธ์ ชัยประวิตร', 'ยุทธ อังกินันทน์', 'ยุทธจักร เรืองวรบูรณ์', 'ยุทธพงศ์ จรัสเสถียร', 'ยุทธพงษ์ แสงศรี', 'ยุทธพล อังกินันทน์', 'ยุทธศักดิ์ ศศิประภา', 'ยุพราช บัวอินทร์', 'ยุรนันท์ ภมรมนตรี', 'รชฏ พิสิษฐบรรณกร', 'รณ ฤทธิชัย', 'ระวี กิ่งคำวงศ์', 'ระวี หิรัญโชติ', 'รักเกียรติ สุขธนะ', 'รักษ์ ตันติสุนทร', 'รังษี เสรีชัย', 'รังสรรค์ มณีรัตน์', 'รังสรรค์ วันไชยธนวงศ์', 'รัชต์ยุตม์ ศิรโยธินภักดี', 'รัฐกร เจนกิจณรงค์', 'รัตน์ ศรีไกรวิน', 'รายชื่อสกุลนักการเมืองไทย', 'รำรี มามะ', 'รุ่งเรือง อิศรางกูร ณ อยุธยา', 'เรวัต สิรินุกุล', 'เรวัต อารีรอบ', 'เรวุฒิ จินดาพล', 'เรืองไกร ลีกิจวัฒนะ', 'เรืองเดช สุพรรณฝ่าย', 'เรืองโรจน์ มหาศรานนท์', 'เรืองวิทย์ ดุษฎีสุรพจน์', 'เรืองวิทย์ ลิกค์', 'โรช วิภัติภูมิประเทศ', 'พระสารสาสน์พลขันธ์ (ลอง สุนทานนท์)', 'ละเมียน บุณยะมาน', 'ลักษณ์ วจนานวัช', 'พระยาลัดพลีธรรมประคัลภ์ (วงษ์ ลัดพลี)', 'ลาภศักดิ์ ลาภาโรจน์กิจ', 'ลิขิต ธีรเวคิน', 'ลุงขาวไขอาชีพ', 'เล็ก นานา', 'เลขา อภัยวงศ์', 'เล้ง ศรีสมวงศ์', 'เลิศ ชินวัตร', 'เลียง ไชยกาล', 'เลื่อน พงษ์โสภณ', 'วงศ์ พลนิกร', 'วชิระมณฑ์ คุณะเกษมธนาวัฒน์', 'วนัสธนา สัจจกุล', 'วนิช ปานะนนท์', 'วรงค์ เดชกิจวิกรม', 'วรชัย เหมะ', 'เจ้าวรทัศน์ ณ ลำพูน', 'วรพงษ์ สง่าเนตร', 'วรรณ ชันซื่อ', 'วรรณรัตน์ ชาญนุกูล', 'วรวัจน์ เอื้ออภิญญกุล', 'วรวิทย์ บารู', 'วรวีร์ มะกูดี', 'วรัญชัย โชคชนะ', 'วราเทพ รัตนากร', 'วราวงษ์ พันธุ์ศิลา', 'วราวุธ ศิลปอาชา', 'วโรทัย ภิญญสาสน์', 'วัชระ กรรณิการ์', 'วัชระ ตันตรานนท์', 'วัชระ พรรณเชษฐ์', 'วัชระ เพชรทอง', 'วัชรินทร์ เกตะวันดี', 'วัฒนชัย วุฒิศิริ', 'วัฒนา เมืองสุข', 'วัฒนา อัศวเหม', 'วัน อยู่บำรุง', 'วันชัย เจริญนนทสิทธิ์', 'วันชัย บุษบา', 'วันมูหะมัดนอร์ มะทา', 'วัยโรจน์ พิพิธภักดี', 'วัลลภ ไทยเหนือ', 'วัลลภ สุปริยศิลป์', 'วารินทร์ ลิ้มศักดากุล', 'วารุจ ศิริวัฒน์', 'วาสนา บุญภูพันธ์ตันติ', 'วาสิต พยัคฆบุตร', 'วิจิตร เกตุแก้ว', 'วิจิตร ลุลิตานนท์', 'วิจิตร ศรีสอ้าน', 'วิจิตร สุคันธพันธุ์', 'วิจิตร สุวิทย์', 'หลวงวิจิตรวาทการ (วิจิตร วิจิตรวาทการ)', 'วิชัย ชัยจิตวณิชกุล', 'วิชัย ตันศิริ', 'วิชัย ราชานนท์', 'วิชัย วงศ์ไชย', 'วิชาญ มีนชัยนันท์', 'วิชิต ปลั่งศรีสกุล', 'วิชิต แย้มบุญเรือง', 'วิชิต สุรพงษ์ชัย', 'วิชิต แสงทอง', 'วิเชษฐ การุณยวนิช', 'วิเชษฐ์ เกษมทองศรี', 'วิเชียร ขาวขำ', 'วิเชียร คันฉ่อง', 'วิเชียร วัฒนคุณ', 'วิเชียร เวชสวรรค์', 'วิฑูรย์ กรุณา', 'วิฑูรย์ นามบุตร', 'วิฑูรย์ วงษ์ไกร', 'วิทย์ รายนานนท์', 'วิทยา แก้วภราดัย', 'วิทยา คุณปลื้ม', 'วิทยา ทรงคำ', 'วิทยา เทียนทอง', 'วิทยา บุรณศิริ', 'วิทูร หลังจิ', 'วินัย สมพงษ์', 'วินัย เสนเนียม', 'วิบูลย์ แช่มชื่น', 'วิภาต บุญศรี วังซ้าย', 'วิภูแถลง พัฒนภูมิไท', 'วิรัช ร่มเย็น', 'วิรัช รัตนเศรษฐ', 'วิรัตน์ กัลยาศิริ', 'วิรุฬ เตชะไพบูลย์', 'วิรุฬห์ พื้นแสน', 'วิโรจน์ ณ บางช้าง', 'วิโรจน์ ตั้งวาณิชย์', 'วิโรจน์ เปาอินทร์', 'วิโรจน์ แสงสนิท', 'วิลาศ จันทร์พิทักษ์', 'วิลาศ อรุณศรี', 'วิไล เบญจลักษณ์', 'วิวรรธนไชย ณ กาฬสินธุ์', 'วิเศษ จูภิบาล', 'วิเศษ ใจใหญ่', 'วิษณุ เครืองาม', 'วิสาร เตชะธีราวัฒน์', 'วิสิษฐ์ ตันสัจจา', 'วิสุทธิ์ ไชยณรุณ', 'พระยาโทณวณิกมนตรี (วิสุทธิ์ โทณวณิก)', 'วิสุทธิ์ ศรีสุพรรณ', 'วีรชน สุคนธปฏิภาค', 'วีรพงษ์ รามางกูร', 'วีรวร สิทธิธรรม', 'วีระ ปิตรชาติ', 'วีระ โรจน์พจนรัตน์', 'วีระ สุพัฒนกุล', 'วีระ สุสังกรกาญจน์', 'วีระกร คำประกอบ', 'วีระกานต์ มุสิกพงศ์', 'วีระชัย วีระเมธีกุล', 'วีระพล จิตสัมฤทธิ์', 'วีระวัฒน์ โอสถานุเคราะห์', 'วีระศักดิ์ โควสุรัตน์', 'วีระศักดิ์ ฟูตระกูล', 'วุฒิ สุโกศล', 'วุฒิชัย กิตติธเนศวร', 'วุฒิชัย สงวนวงศ์ชัย', 'วุฒิพงศ์ ฉายแสง', 'วุฒิพงษ์ นามบุตร', 'เวียง วรเชษฐ์', 'แวมาฮาดี แวดาโอะ', 'ไวพจน์ อาภรณ์รัตน์', 'ศรชัย มนตริวัต', 'ศรัณย์วุฒิ ศรัณย์เกตุ', 'ศรัณยู วงษ์กระจ่าง', 'พระยาศราภัยพิพัฒ (เลื่อน ศราภัยวานิช)', 'ศรายุทธ ชะนะกุล', 'ศราวุธ เพชรพนมพร', 'ศรีเมือง เจริญศิริ', 'เจ้าศรีรัตน์ ณ ลำปาง', 'ศรีเรศ โกฎคำลือ', 'ศรีสุข รุ่งวิสัย', 'ศักดา คงเพชร', 'ศักดา นพสิทธิ์', 'ศักดิ์สยาม ชิดชอบ', 'ศิธา ทิวารี', 'ศิริ จิระพงษ์พันธ์', 'ศิริ สิริโยธิน', 'ศิริชัย ดิษฐกุล', 'ศิริโชค โสภา', 'ศิรินทร์ ธูปกล่ำ', 'ศิริวัฒน์ ขจรประศาสน์', 'ศิริศักดิ์ อ่อนละมัย', 'ศุภชัย ใจสมุทร', 'ศุภชัย พานิชภักดิ์', 'ศุภชัย โพธิ์สุ', 'ศุภชัย ศรีหล้า', 'ศุภพรพงศ์ ชวนบุญ', 'ศุภสิธ เตชะตานนท์', 'ศุลี มหาสันทนะ', 'เศกสิทธิ์ ไวนิยมพงศ์', 'สกลธี ภัททิยกุล', 'สกุล ศรีพรหม', 'สงกรานต์ จิตสุทธิภากร', 'สงกรานต์ เตชะณรงค์', 'สงกรานต์ อุดมสิทธิ์', 'สงคราม กิจเลิศไพโรจน์', 'สงบ ทิพย์มณี', 'สงวน จูฑะเตมีย์', 'สงวน ตุลารักษ์', 'สงวน พงษ์มณี', 'ส่งสุข ภัคเกษม', 'สง่า กิตติขจร', 'สง่า ธนสงวนวงศ์', 'สง่า สรรพศรี', 'สดใส รุ่งโพธิ์ทอง', 'สถาพร มณีรัตน์', 'สนธยา คุณปลื้ม', 'สนธิ บุญยรัตกลิน', 'สนธิ บุณยะชัย', 'สนธิ ลิ้มทองกุล', 'สนธิรัตน์ สนธิจิรวงศ์', 'สนั่น ขจรประศาสน์', 'สนั่น สบายเมือง', 'สนั่น สุธากุล', 'สนิท กุลเจริญ', 'สนิท วรปัญญา', 'สพรั่ง เทพหัสดิน ณ อยุธยา', 'สมเกียรติ พงษ์ไพบูลย์', 'สมเกียรติ ศรลัมพ์', 'สมคิด จาตุศรีพิทักษ์', 'สมคิด นวลเปียน', 'สมคิด บาลไธสง', 'สมคิด ศรีสังคม', 'สมชัย วุฑฒิปรีชา', 'สมชาติ เลขาลาวัณย์', 'สมชาย คุณปลื้ม', 'สมชาย เบญจรงคกุล', 'สมชาย เพศประเสริฐ', 'สมชาย โล่สถาพรพิพิธ', 'สมชาย วงศ์สวัสดิ์', 'สมชาย สหชัยรุ่งเรือง', 'สมชาย สุนทรวัฒน์', 'สมชาย หาญหิรัญ', 'สมนเล๊าะ โปขะรี', 'สมบัติ ธำรงธัญวงศ์', 'สมบัติ เมทะนี', 'สมบัติ ยะสินธุ์', 'สมบัติ รอดโพธิ์ทอง', 'สมบัติ ศรีสุรินทร์', 'สมบัติ อุทัยสาง', 'สมบุญ ระหงษ์', 'สมบุญ ศิริธร', 'สมบูรณ์ จีระมะกร', 'สมบูรณ์ อุทัยเวียนกุล', 'สมพงษ์ อมรวิวัฒน์', 'สมพร หลงจิ', 'สมพร อัศวเหม', 'สมพล เกยุราพันธุ์', 'สมพัฒน์ แก้วพิจิตร', 'สมภพ โหตระกิตย์', 'สมภพ อมาตยกุล', 'สมโภช สายเทพ', 'สมมารถ เจ๊ะนา', 'สมมุติ เบ็ญจลักษณ์', 'สมยศ พุ่มพันธุ์ม่วง', 'สมรรค ศิริจันทร์', 'สมศักดิ์ เกียรติสุรนนท์', 'สมศักดิ์ โกศัยสุข', 'สมศักดิ์ ใจแคล้ว', 'สมศักดิ์ ชูโต', 'สมศักดิ์ เทพสุทิน', 'สมศักดิ์ ปริศนานันทกุล', 'สมศักดิ์ เส็นดาโอ๊ะ', 'สมศักย์ ภูรีศรีศักดิ์', 'สมศาสตร์ รัตนสัค', 'สมหมาย เกาฏีระ', 'สมหมาย ภาษี', 'สมหมาย ฮุนตระกูล', 'สมหวัง สารสาส', 'สมัคร สุนทรเวช', 'สมัย เจริญช่าง', 'สมาน ภุมมะกาญจนะ', 'สมาน ศรีงาม', 'สมุทร มงคลกิติ', 'สมุทร์ สหนาวิน', 'สยม รามสูต', 'สรชาติ วิชย สุวรรณพรหม', 'สรรพภัญญู ศิริไปล์', 'สรรเสริญ แก้วกำเนิด', 'สรรเสริญ สมะลาภา', 'สรวงศ์ เทียนทอง', 'สรอรรถ กลิ่นประทุม', 'สฤต สันติเมทนีดล', 'สฤษดิ์ ธนะรัชต์', 'สวนิต คงสิริ', 'สวัสดิ์ คำประกอบ', 'สวัสดิ์ จำปาศรี', 'สวัสดิ์ สืบสายพรหม', 'สวัสดิ์ หอรุ่งเรือง', 'ไสว พัฒโน', 'สเสฏฐสิฏฐ สิทธิมนต์', 'สหรัฐ กุลศรี', 'สหัส บัณฑิตกุล', 'สหัส พินทุเสนีย์', 'สอ เสถบุตร', 'สอาด ปิยวรรณ', 'สอาด เปี่ยมพงษ์สานต์', 'สะเบต หลีเหร็ม', 'สังข์ทอง ศรีธเรศ', 'สัญชัย วงษ์สุนทร', 'สันต์ศักด์ จรูญ งามพิเชษฐ์', 'สันติ ชัยวิรัตนะ', 'สันติ ตันสุหัช', 'สันติ์ เทพมณี', 'สันติ พร้อมพัฒน์', 'สัมพันธ์ ทองสมัคร', 'สัมพันธ์ บุญญานันต์', 'สัมพันธ์ แป้นพัฒน์', 'สัมพันธ์ เลิศนุวัฒน์', 'สากล ม่วงศิริ', 'สาคร เกี่ยวข้อง', 'สาคร พรหมภักดี', 'สาทิตย์ วงศ์หนองเตย', 'สาธิต ปิตุเตชะ', 'สานันท์ สุพรรณชนะบุรี', 'สามารถ แก้วมีชัย', 'สามารถ ม่วงศิริ', 'สามารถ มะลูลีม', 'สาวิตต์ โพธิวิหค', 'สาวิทย์ แก้วหวาน', 'สำเภา ประจวบเหมาะ', 'สำราญ รอดเพชร', 'สำราญ ศรีแปงวงค์', 'สิดดิก สารีฟ', 'สิทธิ จิรโรจน์', 'สิทธิชัย โควสุรัตน์', 'สิทธิศักดิ์ ยนต์ตระกูล', 'สินธพ แก้วพิจิตร', 'สี่หมื่น วณีสอน', 'สืบแสง พรหมบุญ', 'สุกำพล สุวรรณทัต', 'สุกิจ ก้องธรนินทร์', 'สุกิจ นิมมานเหมินท์', 'สุกิจ อัถโถปกรณ์', 'สุขวิช รังสิตพล', 'สุขวิชชาญ มุสิกุล', 'สุขุม เลาวัณย์ศิริ', 'สุขุมพงศ์ โง่นคำ', 'หม่อมราชวงศ์สุขุมพันธุ์ บริพัตร', 'สุโข วุฑฒิโชติ', 'สุจินดา คราประยูร', 'สุชน ชามพูนท', 'สุชน ชาลีเครือ', 'สุชัย เจริญรัตนกุล', 'สุชาติ แก้วนาโพธิ์', 'สุชาติ จันทรโชติกุล', 'สุชาติ เชาว์วิศิษฐ', 'สุชาติ โชคชัยวัฒนากร', 'สุชาติ ตันเจริญ', 'สุชาติ ธาดาธำรงเวช', 'สุชาติ บรรดาศักดิ์', 'สุชาติ ภิญโญ', 'สุชาย ศรีสุรพล', 'สุชิน ควรสงวน', 'สุชีน เอ่งฉ้วน', 'สุดิน ภูยุทธานนท์', 'สุตสาย หัสดิน', 'สุทธิ ปัญญาสกุลวงศ์', 'สุทธิพงศ์ ทัดพิทักษ์กุล', 'สุทัศน์ เงินหมื่น', 'สุทัศน์ จันทร์แสงศรี', 'สุทิน คลังแสง', 'สุทิน นพขำ', 'สุเทพ เทพรักษ์', 'สุเทพ เทือกสุบรรณ', 'สุเทพ วงศ์กำแหง', 'สุเทพ อัตถากร', 'สุธรรม ภัทราคม', 'สุธรรม ระหงษ์', 'สุธรรม แสงประทุม', 'สุธา ชันแสง', 'สุธา นิติภานนท์', 'สุนทร คงสมพงษ์', 'สุนทร วิลาวัลย์', 'สุนทร หงส์ลดารมภ์', 'สุนัย จุลพงศธร', 'สุบิน ปิ่นขยัน', 'สุพล ฟองงาม', 'สุพัฒน์ ธรรมเพชร', 'สุภรณ์ อัตถาวงศ์', 'สุมิตร สุนทรเวช', 'สุเมธ พรมพันห่าว', 'สุเมธ โพธิ์มณี', 'สุเมธ ฤทธาคนี', 'สุรกิจ มัยลาภ', 'สุรเกียรติ์ เสถียรไทย', 'สุรจิตร ยนต์ตระกูล', 'สุรใจ ศิรินุพงศ์', 'สุรชัย ด่านวัฒนานุสรณ์', 'สุรชัย เลี้ยงบุญเลิศชัย', 'สุรชัย สมบัติเจริญ', 'สุรชาติ เทียนทอง', 'สุรเชษฐ์ ชัยวงศ์', 'สุรเชษฐ์ มาศดิตถ์', 'สุรเชษฐ์ แวอาแซ', 'สุรเดช ยะสวัสดิ์', 'สุรทิน พิมานเมฆินทร์', 'สุรนันทน์ เวชชาชีวะ', 'สุรพงษ์ โตวิจักษณ์ชัยกุล', 'สุรพงษ์ ราชมุกดา', 'สุรพงษ์ สืบวงศ์ลี', 'สุรพงษ์ สุวรรณอัตถ์', 'สุรพงษ์ อึ้งอัมพรวิไล', 'สุรพร ดนัยตั้งตระกูล', 'สุรพล เกียรติไชยากร', 'สุรพันธ์ ชินวัตร', 'สุรยุทธ์ จุลานนท์', 'สุรวิทย์ คนสมบูรณ์', 'สุรศักดิ์ กาญจนรัตน์', 'สุรศักดิ์ เทียมประเสริฐ', 'สุรศักดิ์ พันธ์เจริญวรกุล', 'สุรศักดิ์ อนรรฆพันธ์', 'สุรสาล ผาสุข', 'สุรสิทธิ์ เจียมวิจักษณ์', 'สุรสิทธิ์ ตรีทอง', 'สุรสิทธิ์ วงศ์วิทยานันท์', 'สุรัตน์ โอสถานุเคราะห์', 'สุรันต์ จันทร์พิทักษ์', 'สุรินทร์ ปาลาเร่', 'สุรินทร์ พิศสุวรรณ', 'สุรินทร์ มาศดิตถ์', 'สุริยน ไรวา', 'สุริยะ จึงรุ่งเรืองกิจ', 'สุริยะใส กตะศิลา', 'สุริยา ลาภวิสุทธิสิน', 'สุวพันธุ์ ตันยุวรรธนะ', 'สุวรรณ วลัยเสถียร', 'สุวโรช พะลัง', 'สุวัจน์ ลิปตพัลลภ', 'สุดารัตน์ เกยุราพันธุ์', 'สุวัฒน์ วรรณศิริกุล', 'สุวัฒน์ วีระเศรษฐกุล', 'สุวิชช พันธเศรษฐ', 'สุวิทย์ คุณกิตติ', 'สุวิทย์ เมษินทรีย์', 'สุวิทย์ ยอดมณี', 'สุหฤท สยามวาลา', 'เสนาะ เทียนทอง', 'เสนาะ พึ่งเจียม', 'เสนาะ อูนากูล', 'หม่อมราชวงศ์เสนีย์ ปราโมช', 'เสนีย์ มะดากะกุล', 'พระยาไชยยศสมบัติ (เสริม กฤษณามระ)', 'เสริม วินิจฉัยกุล', 'เสริมศักดิ์ การุญ', 'เสริมศักดิ์ พงษ์พานิช', 'หม่อมหลวงเสรี ปราโมช', 'เสรี สุวรรณภานนท์', 'เสวตร เปี่ยมพงศ์สานต์', 'แสง สุทธิพงศ์', 'แสวง พิบูลย์สราวุธ', 'โสภณ ซารัมย์', 'โสภณ พรโชคชัย', 'โสภณ เพชรสว่าง', 'ไสว หัพนานนท์', 'ใหม่ ศิรินวกุล', 'หลวงกัมปนาทแสนยากร (กำปั่น อุตระวณิชย์)', 'หลวงเกรียงศักดิ์พิชิต (พิชิต เกรียงศักดิ์พิชิต)', 'หลวงชาตินักรบ (ศุข ชาตินักรบ)', 'หลวงชำนาญนิติเกษตร (อุทัย แสงมณี)', 'หวน มุตตาหารัช', 'หะริน หงสกุล', 'ห้างทอง ธรรมวัฒนะ', 'หาญ ลีนานนท์', 'เหวง โตจิราการ', 'ใหญ่ ศวิตชาติ', 'องอาจ คล้ามไพบูลย์', 'องอาจ วงษ์ประยูร', 'องอาจ วชิรพงศ์', 'อดิศร เพียงเกษ', 'อดิศัย โพธารามิก', 'อดุล ภูมิณรงค์', 'อดุลย์ ณ สายบุรี', 'อดุลย์ แสงสิงแก้ว', 'อดุลย์ เหลืองบริบูรณ์', 'อธิรัฐ รัตนเศรษฐ', 'อนันต์ กลินทะ', 'อนันต์ ฉายแสง', 'อนันต์ ผลอำนวย', 'อนันต์ ภักดิ์ประไพ', 'อนันต์ เรืองกูล', 'อนันต์ ลิมปคุปตถาวร', 'อนันต์ สุขสันต์', 'อนันต์ อนันตกูล', 'อนันตพร กาญจนรัตน์', 'อนุชา นาคาศัย', 'อนุชา บูรพชัยศรี', 'อนุชา สะสมทรัพย์', 'อนุดิษฐ์ นาครทรรพ', 'อนุทิน ชาญวีรกูล', 'อนุพงษ์ เผ่าจินดา', 'อนุมัติ ซูสารอ', 'อนุรักษ์ จุรีมาศ', 'อนุรักษ์ ตั้งปณิธานนท์', 'อนุวรรตน์ วัฒนพงศ์ศิริ', 'อนุสรณ์ ปั้นทอง', 'อนุสรณ์ วงศ์วรรณ', 'อนุสรณ์ เอี่ยมสะอาด', 'ขุนอนุสรสิทธิกรรม (ทองดี วัชโรทยาน)', 'อบ วสุรัตน์', 'อภัย จันทวิมล', 'อภิชาต การิกาญจน์', 'อภิชาต ศักดิเศรษฐ์', 'อภิชาติ ตีรสวัสดิชัย', 'อภิชาติ สุภาแพ่ง', 'อภิชาติ หาลำเจียก', 'หม่อมหลวงอภิมงคล โสณกุล', 'อภิรดี ตันตราภรณ์', 'อภิรักษ์ โกษะโยธิน', 'อภิรัต ศิรินาวิน', 'อภิวัฒน์ เงินหมื่น', 'อภิวันท์ วิริยะชัย', 'อภิศักดิ์ ตันติวรวงศ์', 'อภิสิทธิ์ เวชชาชีวะ', 'อมร ศิริกายะ', 'อมเรศ ศิลาอ่อน', 'อรรคพล สรสุชาติ', 'อรรถกิจ พนมยงค์', 'อรรถพล วงษ์ประยูร', 'อรรถวิชช์ สุวรรณภักดี', 'อรรถสิทธิ์ (คันคาย) ทรัพยสิทธิ์', 'อรรถสิทธิ์ สิทธิสุนทร', 'อร่ามอาชว์วัต โล่ห์วีระ', 'อริสมันต์ พงศ์เรืองรอง', 'อรุณ ภาณุพงศ์', 'อลงกต มณีกาศ', 'อลงกรณ์ พลบุตร', 'อสิ มะหะมัดยังกี', 'ออมสิน ชีวะพฤกษ์', 'อันวาร์ สาและ', 'อัมพร จันทรวิจิตร', 'อัมพร จินตกานนท์', 'อัมรินทร์ คอมันตร์', 'อัศวัชร์ อภัยวงศ์', 'อัศวิน วิภูศิริ', 'อัสนี เชิดชัย', 'อากร ฮุนตระกูล', 'อาคม เติมพิทยาไพสิฐ', 'อาคม เอ่งฉ้วน', 'อาจอง ชุมสาย ณ อยุธยา', 'อาชว์ เตาลานนท์', 'อาณัฐชัย รัตตกุล', 'อาณัติ อาภาภิรม', 'อาณันย์ วัชโรทัย', 'อาทิตย์ กำลังเอก', 'อาทิตย์ อุไรรัตน์', 'อานันท์ ปันยารชุน', 'อารยะ ชุมดวง', 'อารีเพ็ญ อุตรสินธุ์', 'อารีย์ วีระพันธุ์', 'อาษา เมฆสวรรค์', 'อำนวย คลังผา', 'อำนวย ปะติเส', 'อำนวย ยศสุข', 'อำนวย วีรวรรณ', 'อำนวย สุวรรณคีรี', 'อำนาจ ชนะวงศ์', 'อำพล พันธุ์ประสิทธิ์', 'อำพัน หิรัญโชติ', 'อิทธพร ศุภวงศ์', 'อิทธิ ศิริลัทธยากร', 'อิทธิเดช แก้วหลวง', 'อิทธิพล คุณปลื้ม', 'อิทธิรัตน์ จันทรสุรินทร์', 'อินทร สิงหเนตร', 'ขุนอินทรภักดี (ทองอิน ทองมาก)', 'อินทรัตน์ ยอดบางเตย', 'อิสมาแอล เบญอิบรอฮีม', 'อิสระพงศ์ หนุนภักดี', 'อิสรา สุนทรวัฒน์', 'อิสสระ สมชัย', 'อุดม ไกรวัตนุสสรณ์', 'อุดม แดงโกเมน', 'อุดม วรวัลย์', 'หม่อมหลวงอุดม สนิทวงศ์', 'อุดมเดช รัตนเสถียร', 'อุดมเดช สีตบุตร', 'อุดมศักดิ์ ทั่งทอง', 'อุดมศิลป์ ศรีแสงนาม', 'อุดร ตันติสุนทร', 'อุดร ทองน้อย', 'อุทัย พิมพ์ใจชน', 'อุปดิศร์ ปาจรียางกูร', 'อุสมาน อุเซ็ง', 'เอกธนัช อินทร์รอด', 'เอกนัฏ พร้อมพันธุ์', 'เอกพจน์ วงศ์นาค', 'เอกพร รักความสุข', 'เอกภาพ พลซื่อ', 'เอธัส มนต์เสรีนุสรณ์', 'เอนก ทับสุวรรณ', 'เอนก สิทธิประศาสน์', 'เอนก เหล่าธรรมทัศน์', 'เอี่ยม ทองใจสด', 'เอื้อน ณ สงขลา', 'โอภาส พลศิลป', 'โอภาส รองเงิน', 'โอฬาร กิจเลิศไพโรจน์', 'โอฬาร ไชยประวัติ', 'ฮอชาลี ม่าเหร็ม']);

/***/ }),

/***/ "./libs/Image.js":
/*!***********************!*\
  !*** ./libs/Image.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/tauhoo/Documents/politic-warrior/libs/Image.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  max-height: 80vh;\n  border-radius: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function (url) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
});

/***/ }),

/***/ "./libs/getCard.js":
/*!*************************!*\
  !*** ./libs/getCard.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (function (name, data, picture) {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
      var level, effect, creator, type, url, webUrl;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              String.prototype.replaceAll = function (search, replacement) {
                var target = this;
                return target.replace(new RegExp(search, 'g'), replacement);
              };

              if (!(data.length === 0)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", reject(0));

            case 3:
              level = data.length > 12 ? 12 : data.length;
              effect = data[0][0].detail[0];
              effect = effect.replaceAll(' ', '%20');
              effect = effect.replaceAll('&', '&26');
              creator = "politic%20warrior";
              type = "politician";
              url = "https://www.yugiohcardmaker.net/ycmaker/createcard.php?name=&cardtype=Monster&subtype=normal&attribute=Light&level=".concat(level, "&rarity=Common&picture=").concat(picture, "&circulation=x&set1=x&set2=x&type=").concat(type, "&carddescription=&atk=").concat(1000 + data.length * 200, "&def=", 1000, "&creator=").concat(creator, "&year=2018&serial=00000000");
              url = url.replaceAll(' ', '%20');
              url = url.replaceAll('&', '%26');
              webUrl = "/card?name=".concat(name, "&picture=").concat(url, "&effect=").concat(effect);
              console.log(webUrl);
              /*
              webUrl = webUrl.replaceAll(' ', '%20')
              webUrl = webUrl.replaceAll('&', '%26')
              let urls = `https://v2.convertapi.com/convert/web/to/jpg?Secret=SJny3EVyLMMq09ZL&Url=${webUrl}`
              let picData = await fetch(urls).then(res => res.json())
              */

              resolve(webUrl);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./libs/getData.js":
/*!*************************!*\
  !*** ./libs/getData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wtf_wikipedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wtf_wikipedia */ "./node_modules/wtf_wikipedia/src/index.js");
/* harmony import */ var wtf_wikipedia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wtf_wikipedia__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getImage = function getImage(name) {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
      var url, respon, pages, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "https://th.wikipedia.org/w/api.php?action=query&origin=*&titles=Image:".concat(name, "&prop=imageinfo&iiprop=url&format=json");
              _context.next = 3;
              return fetch(url).then(function (res) {
                return res.json();
              });

            case 3:
              respon = _context.sent;
              pages = respon.query.pages;
              result = pages[Object.keys(pages)[0]].imageinfo[0].url;
              resolve(result);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

/* harmony default export */ __webpack_exports__["default"] = (function (title) {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(resolve, reject) {
      var respon, pages, o, text, sections, subDetail, imageName, imageUrl, result, stack, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, section, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("https://th.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&origin=*&titles=".concat(title, "&format=json")).then(function (res) {
                return res.json();
              });

            case 2:
              respon = _context2.sent;
              pages = respon.query.pages;
              o = pages[Object.keys(pages)[0]];
              text = o.revisions[0]['*'];
              sections = wtf_wikipedia__WEBPACK_IMPORTED_MODULE_1___default()(text).data.sections;
              subDetail = sections[0].data.templates;
              imageName = subDetail[subDetail.length - 1].data.image;
              _context2.next = 11;
              return getImage(imageName).then(function (result) {
                return result;
              });

            case 11:
              imageUrl = _context2.sent;
              result = [];
              stack = [];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 17;

              for (_iterator = sections[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                section = _step.value;
                data = modifyData(section.data);

                if (section.depth == 0) {
                  if (stack.length == 0) {
                    stack.push(data);
                  } else {
                    result.push(stack);
                    stack = [data];
                  }
                } else {
                  stack.push(data);
                }
              }

              _context2.next = 25;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](17);
              _didIteratorError = true;
              _iteratorError = _context2.t0;

            case 25:
              _context2.prev = 25;
              _context2.prev = 26;

              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }

            case 28:
              _context2.prev = 28;

              if (!_didIteratorError) {
                _context2.next = 31;
                break;
              }

              throw _iteratorError;

            case 31:
              return _context2.finish(28);

            case 32:
              return _context2.finish(25);

            case 33:
              resolve({
                result: result,
                subDetail: subDetail,
                imageUrl: imageUrl
              });

            case 34:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[17, 21, 25, 33], [26,, 28, 32]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
});

function modifyData(topic) {
  return {
    title: topic.title,
    detail: topic.paragraphs.map(function (paragraph) {
      return paragraph.data.sentences.map(function (sentence) {
        return sentence.data.text;
      }).join('');
    })
  };
}

/***/ }),

/***/ "./libs/searcher.js":
/*!**************************!*\
  !*** ./libs/searcher.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/names */ "./config/names.js");

/* harmony default export */ __webpack_exports__["default"] = (function (keyword) {
  return _config_names__WEBPACK_IMPORTED_MODULE_0__["default"].filter(function (name) {
    return name.slice(0, keyword.length).includes(keyword);
  }).slice(0, 5);
});

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i;
var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(reactPropsRegex.test.bind(reactPropsRegex));

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __root__ = (function (root) {
function F() { this.fetch = false; }
F.prototype = root;
return new F();
})(typeof self !== 'undefined' ? self : this);
(function(self) {

(function(self) {

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);
}).call(__root__, void(0));
var fetch = __root__.fetch;
var Response = fetch.Response = __root__.Response;
var Request = fetch.Request = __root__.Request;
var Headers = fetch.Headers = __root__.Headers;
if (typeof module === 'object' && module.exports) {
module.exports = fetch;
// Needed for TypeScript consumers without esModuleInterop.
module.exports.default = fetch;
}


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var simpleIsEqual = function simpleIsEqual(a, b) {
  return a === b;
};

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
    return isEqual(newArg, lastArgs[index]);
  };

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_ecba6b44147cc8018369 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ecba6b44147cc8018369 */ "dll-reference dll_ecba6b44147cc8018369"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_ecba6b44147cc8018369 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ecba6b44147cc8018369 */ "dll-reference dll_ecba6b44147cc8018369"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_ecba6b44147cc8018369 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ecba6b44147cc8018369 */ "dll-reference dll_ecba6b44147cc8018369"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_ecba6b44147cc8018369 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ecba6b44147cc8018369 */ "dll-reference dll_ecba6b44147cc8018369"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var Portal = REACT_PORTAL_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Profiler = Profiler;
exports.Portal = Portal;
exports.StrictMode = StrictMode;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isProfiler = isProfiler;
exports.isPortal = isPortal;
exports.isStrictMode = isStrictMode;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ecba6b44147cc8018369 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ecba6b44147cc8018369 */ "dll-reference dll_ecba6b44147cc8018369"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, css, keyframes, createGlobalStyle, isStyledComponent, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, ServerStyleSheet, StyleSheetManager, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js");









// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 


var SC_ATTR = typeof process !== 'undefined' && process.env.SC_ATTR || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper (see https://www.styled-components.com/docs/api#css), which ensures the styles are injected correctly.\n"
} : undefined;

/**
 * super basic version of sprintf
 */
function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c = void 0;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len2 = arguments.length, interpolations = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      interpolations[_key2 - 1] = arguments[_key2];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : undefined;
});

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = document.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.0.3");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.0.3" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.0.3", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(id) {
  return document.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

/* wraps a given tag so that rehydration is performed once when necessary */
var makeRehydrationTag = function makeRehydrationTag(tag, els, extracted, immediateRehydration) {
  /* rehydration function that adds all rules to the new tag */
  var rehydrate = once(function () {
    /* add all extracted components to the new tag */
    for (var i = 0, len = extracted.length; i < len; i += 1) {
      var _extracted$i = extracted[i],
          componentId = _extracted$i.componentId,
          cssFromDOM = _extracted$i.cssFromDOM;

      var cssRules = splitByRules(cssFromDOM);
      tag.insertRules(componentId, cssRules);
    }

    /* remove old HTMLStyleElements, since they have been rehydrated */
    for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
      var el = els[_i];
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  });

  if (immediateRehydration) rehydrate();

  return _extends({}, tag, {

    /* add rehydration hook to methods */
    insertMarker: function insertMarker(id) {
      rehydrate();
      return tag.insertMarker(id);
    },

    insertRules: function insertRules(id, cssRules, name) {
      rehydrate();
      return tag.insertRules(id, cssRules, name);
    },

    removeRules: function removeRules(id) {
      rehydrate();
      return tag.removeRules(id);
    }
  });
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate() {
    if (!IS_BROWSER || this.forceServer) {
      return this;
    }
    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.0.3" + '"]');
    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (nodesSize === 0) {
      return this;
    }

    for (var i = 0; i < nodesSize; i += 1) {
      // $FlowFixMe: We can trust that all elements in this query are style elements
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0; j < elNamesSize; j += 1) {
        var name = elNames[j];
        /* add rehydrated name to sheet to avoid readding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (extractedSize === 0) {
      return this;
    }

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);
    var rehydrationTag = makeRehydrationTag(tag, els, extracted, isStreamed);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(rehydrationTag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = rehydrationTag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (executionContext) {
      if (true) {
        /* Warn if not referring styled component */
        try {
          // eslint-disable-next-line new-cap
          if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isElement"])(new chunk(executionContext))) {
            console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
          }
          // eslint-disable-next-line no-empty
        } catch (e) {}
      }

      return flatten(chunk(executionContext), executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCss(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: _extends({}, options.attrs || EMPTY_OBJECT, attrs)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      var value = attrs[key];
      if (isFunction(value)) {
        return false;
      }
    }
  }

  return true;
}

//

// 

var isHMREnabled = "development" !== 'production' && typeof module !== 'undefined' && module.hot;

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      var placeholder =  true ? ['.' + componentId + ' {}'] : undefined;

      StyleSheet.master.deferredInject(componentId, placeholder);
    }
  }

  /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && lastClassName !== undefined && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

// 

function generateDisplayName(target) {
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_3__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Provider,
      { value: context },
      react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(this.props.children)
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ("development" !== 'production' && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

// 

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        /* prepend style html to chunk */
        this.push(html + chunk);
        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });
    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;

    var context = this.getContext(sheet, target);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetContext.Provider,
      { value: context },
      react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children)
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    appendChild: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  })
} : undefined;

// 

var didWarnAboutClassNameUsage = new Set();

var classNameUsageCheckInjector = (function (target) {
  var elementClassName = '';

  var targetCDM = target.componentDidMount;

  // eslint-disable-next-line no-param-reassign
  target.componentDidMount = function componentDidMount() {
    if (typeof targetCDM === 'function') {
      targetCDM.call(this);
    }

    var forwardTarget = this.props.forwardedClass.target;

    if (target.props && target.props.suppressClassNameWarning || target.attrs && target.attrs.suppressClassNameWarning || didWarnAboutClassNameUsage.has(forwardTarget)) {
      return;
    }

    didWarnAboutClassNameUsage.add(forwardTarget);

    var classNames = elementClassName.replace(/ +/g, ' ').trim().split(' ');
    // eslint-disable-next-line react/no-find-dom-node
    var node = react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(this);
    var selector = classNames.map(function (s) {
      return '.' + s;
    }).join('');

    if (node && node.nodeType === 1 && !classNames.every(function (className) {
      return node.classList && node.classList.contains(className);
    }) && !node.querySelector(selector)) {
      console.warn('It looks like you\'ve wrapped styled() around your React component (' + getComponentName(forwardTarget) + '), but the className prop is not being passed down to a child. No styles will be rendered unless className is composed within your React component.');
    }
  };

  var prevRenderInner = target.renderInner;

  // eslint-disable-next-line no-param-reassign
  target.renderInner = function renderInner() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var element = prevRenderInner.apply(this, args);

    elementClassName = element.props.className;

    return element;
  };
});

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

var warnInnerRef = once(function () {
  return (
    // eslint-disable-next-line no-console
    console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component.')
  );
});

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if ("development" !== 'production' && IS_BROWSER) {
      classNameUsageCheckInjector(_this);
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter(styleSheet) {
    this.styleSheet = styleSheet;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedClass = this.props.forwardedClass,
        componentStyle = _props$forwardedClass.componentStyle,
        defaultProps = _props$forwardedClass.defaultProps,
        styledComponentId = _props$forwardedClass.styledComponentId,
        target = _props$forwardedClass.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props, this.styleSheet);
    } else if (theme !== undefined) {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps), this.props, this.styleSheet);
    } else {
      generatedClassName = this.generateAndInjectStyles(this.props.theme || EMPTY_OBJECT, this.props, this.styleSheet);
    }
    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.attrs, this.props);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ("development" !== 'production' && key === 'innerRef') {
        warnInnerRef();
      }

      if (key === 'forwardedClass' || key === 'as') continue;else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = [this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var context = _extends({}, props, { theme: theme });

    if (attrs === undefined) return context;

    this.attrs = {};

    var attr = void 0;
    var key = void 0;

    /* eslint-disable guard-for-in */
    for (key in attrs) {
      attr = attrs[key];

      if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
        attr = attr(context);

        if ("development" !== 'production' && react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(attr)) {
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a component as value for the ' + key + ' prop in the attrs constructor.\n' + "You'll need to wrap it in a function to make it available inside the styled component.\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'));
        }
      }

      this.attrs[key] = attr;
    }
    /* eslint-enable */

    return _extends({}, context, this.attrs);
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var styleSheet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : StyleSheet.master;
    var _props$forwardedClass2 = props.forwardedClass,
        attrs = _props$forwardedClass2.attrs,
        componentStyle = _props$forwardedClass2.componentStyle,
        warnTooManyClasses = _props$forwardedClass2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && attrs === undefined) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, props.forwardedClass.attrs), styleSheet);

    if (warnTooManyClasses) {
      warnTooManyClasses(className);
    }

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      attrs = options.attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? _extends({}, target.attrs, attrs) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, { forwardedClass: WrappedStyledComponent, forwardedRef: ref }));
  });

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      styledComponentId: true,
      target: true,
      warnTooManyClasses: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent() {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatiblility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentDidMount = function componentDidMount() {
      if ("development" !== 'production' && IS_BROWSER && window.scCGSHMRCache[this.state.styledComponentId] > 1 && !this.props.suppressMultiMountWarning) {
        console.warn('The global style component ' + this.state.styledComponentId + ' was composed and rendered multiple times in your React component tree. Only the last-rendered copy will have its styles remain in <head> (or your StyleSheetManager target.)');
      }
    };

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ("development" !== 'production' && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(this.props.children)) {
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.defaultProps = {
    suppressMultiMountWarning: false
  };
  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;
   true ? GlobalStyleComponent.propTypes = {
    suppressMultiMountWarning: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
  } : undefined;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ("development" !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ("development" !== 'production' && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class ' + getComponentName(Component$$1));
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ("development" !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ("development" !== 'production' && "development" !== 'test' && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e(null):undefined}(function e(a){"use strict";var c=/^\0+/g,r=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,k=/::(place)/g,p=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,F="-webkit-",N="-moz-",S="-ms-",B=59,W=125,q=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,ce=0,re=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,ke=1,pe=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Fe=0,Ne=1,Se=2,Be=3,We=0,qe=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(r,"");if(Te.trim().length>0){switch(C){case M:case K:case B:case J:case I:break;default:Te+=s.charAt(R)}C=B}}if(1===$e)switch(C){case q:case W:case B:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=B;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case B:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case q:je=ze}}switch(C){case q:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case q:y++;break;case W:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===ce)g=(Te=Te.replace(c,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(r,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(Be,Ue,f,a,ke,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(qe>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+F+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case W:case B:if((je=(Te=(we>0?Te.replace(r,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Ne,Te,a,e,ke,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case ce:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case B:case q:case W:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*We>0)Pe(Fe,Te,a,e,ke,be,Ve.length,t,i,t);be=1,ke++;break;case B:case W:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case ce:Re="\\0";break;case re:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+pe===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)pe=w;case 8:if(m===le)pe=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==B)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case ce:case q:case W:case B:case U:case re:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,c,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(c=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=c.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:c=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:c=a+c+Ee;break;case V:switch(2*c.charCodeAt(1)+3*c.charCodeAt(2)){case 530:if(Ce>0){c=a+c.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)c=a+Ee+c}break;case U:a="";default:if(h>1&&c.indexOf(":")>0)c=a+c.replace(v,"$1"+Ee+"$2");else c=a+c+Ee}n+=c}i[s]=n.replace(r,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Se,Ve,f,e,ke,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*pe!=0){if(2===Ae&&!Le(Ve,2))pe=0;switch(pe){case le:Ve=Ve.replace(p,":"+N+"$1")+Ve;break;case ne:Ve=Ve.replace(k,"::"+F+"input-$1")+Ve.replace(k,"::"+N+"$1")+Ve.replace(k,":"+S+"input-$1")+Ve}pe=0}}return Ye+Ve+Xe}function Ie(e,a,c){var r=a.trim().split(o),s=r,t=r.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],c,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",r[f],c,i).trim()}return s}function Je(e,a,c,r){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+r){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(c*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,c,r){var l,o=0,h=e+";",u=2*a+3*c+4*r;if(944===u)return function(e){var a=e.length,c=e.indexOf(":",9)+1,r=e.substring(0,c).trim(),s=e.substring(c,a-1).trim();switch(e.charCodeAt(9)*qe){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,c=0,a=t.length;i<a;c=0,++i){for(var l=t[i],o=l.split(n);l=o[c];){var h=l.charCodeAt(0);if(1===qe&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[c++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=r+s+";",1===Ae||2===Ae&&Le(s,1))return F+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?F+h+h:h;case 951:return 116===h.charCodeAt(3)?F+h+h:h;case 963:return 110===h.charCodeAt(5)?F+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return F+h+h;case 978:return F+h+N+h+h;case 1019:case 983:return F+h+N+h+S+h+h;case 883:if(h.charCodeAt(8)===Q)return F+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+F+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return F+"box-"+h.replace("-grow","")+F+h+S+h.replace("grow","positive")+h;case 115:return F+h+S+h.replace("shrink","negative")+h;case 98:return F+h+S+h.replace("basis","preferred-size")+h}return F+h+S+h+h;case 964:return F+h+S+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),F+"box-pack"+l+F+h+S+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+F)+h.replace(s,":"+N)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return F+h+S+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,F+l)+";"+h;break;case 207:case 102:h=h.replace(l,F+(u>102?"inline-":"")+"box")+";"+h.replace(l,F+l)+";"+h.replace(l,S+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),F+h+F+"box-"+l+S+"flex-"+l+h;case 115:return F+h+S+"flex-item-"+h.replace(y,"")+h;default:return F+h+S+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,c,r).replace(":fill-available",":stretch");else return h.replace(l,F+l)+h.replace(l,N+l.replace("fill-",""))+h;break;case 962:if(h=F+h+(102===h.charCodeAt(5)?S+h:"")+h,c+r===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+F+"$2")+h}return h}function Le(e,a){var c=e.indexOf(1===a?":":"{"),r=e.substring(0,3!==a?c:10),s=e.substring(c+1,e.length-1);return Oe(2!==a?r:r.replace(O,"$1"),s,a)}function Me(e,a){var c=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return c!==a+";"?c.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,c,r,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,c,r,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}switch(u){case void 0:case false:case true:case null:case a:break;default:return u}}function Qe(e,a,c,r){for(var s=a+1;s<c;++s)switch(r.charCodeAt(s)){case Z:if(e===T)if(r.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var c=e[a];switch(a){case"keyframe":qe=0|c;break;case"global":Ce=0|c;break;case"cascade":ge=0|c;break;case"compress":we=0|c;break;case"semicolon":ve=0|c;break;case"preserve":me=0|c;break;case"prefix":if(Oe=null,!c)Ae=0;else if("function"!=typeof c)Ae=1;else Ae=2,Oe=c}}return Re}function Te(a,c){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(qe>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,c,f,f,ke,be,0,0,0,0))&&"string"==typeof i)c=i;var n=He(xe,f,c,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,ke,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",pe=0,ke=1,be=1,we*t==0?n:n.replace(r,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:switch(a.constructor){case Array:for(var c=0,r=a.length;c<r;++c)e(a[c]);break;case Function:$e[ye++]=a;break;case Boolean:We=0|!!a}}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/wtf_wikipedia/package.json":
/*!*************************************************!*\
  !*** ./node_modules/wtf_wikipedia/package.json ***!
  \*************************************************/
/*! exports provided: name, description, version, author, repository, main, unpkg, scripts, bin, engines, files, keywords, dependencies, devDependencies, license, default */
/***/ (function(module) {

module.exports = {"name":"wtf_wikipedia","description":"parse wikiscript into json","version":"6.2.1","author":"Spencer Kelly <spencermountain@gmail.com> (http://spencermounta.in)","repository":{"type":"git","url":"git://github.com/spencermountain/wtf_wikipedia.git"},"main":"./src/index.js","unpkg":"./builds/wtf_wikipedia.min.js","scripts":{"start":"node ./scripts/demo.js","test":"node ./scripts/test.js","test-spec":"tape ./tests/*.test.js | tap-spec","coverage":"node scripts/coverage.js","postpublish":"node ./scripts/coverage.js","testb":"TESTENV=prod node ./scripts/test.js","watch":"amble ./scratch.js","build":"node ./scripts/build.js"},"bin":{"wtf_wikipedia":"./bin/wtf.js"},"engines":{"node":">=6.0.0"},"files":["builds","api","src","bin"],"keywords":["wikipedia","wikimedia","wikipedia markup","wikiscript"],"dependencies":{"cross-fetch":"2.2.3"},"devDependencies":{"amble":"0.0.6","babel-cli":"6.26.0","babel-preset-env":"1.7.0","babelify":"8.0.0","browserify":"16.2.3","codacy-coverage":"3.2.0","derequire":"2.0.6","istanbul":"0.4.5","shelljs":"0.8.2","tap-dancer":"0.1.2","tap-spec":"^5.0.0","tape":"4.9.1","uglify-js":"3.4.9"},"license":"MIT"};

/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/Document.js":
/*!****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/Document.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const sectionMap = __webpack_require__(/*! ./_sectionMap */ "./node_modules/wtf_wikipedia/src/01-document/_sectionMap.js");
const toMarkdown = __webpack_require__(/*! ./toMarkdown */ "./node_modules/wtf_wikipedia/src/01-document/toMarkdown.js");
const toHtml = __webpack_require__(/*! ./toHtml */ "./node_modules/wtf_wikipedia/src/01-document/toHtml.js");
const toJSON = __webpack_require__(/*! ./toJson */ "./node_modules/wtf_wikipedia/src/01-document/toJson.js");
const toLatex = __webpack_require__(/*! ./toLatex */ "./node_modules/wtf_wikipedia/src/01-document/toLatex.js");
const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const aliasList = __webpack_require__(/*! ../lib/aliases */ "./node_modules/wtf_wikipedia/src/lib/aliases.js");
const Image = __webpack_require__(/*! ../image/Image */ "./node_modules/wtf_wikipedia/src/image/Image.js");

const defaults = {
  tables: true,
  lists: true,
  paragraphs: true,
};

//
const Document = function(data, options) {
  this.options = options || {};
  Object.defineProperty(this, 'data', {
    enumerable: false,
    value: data
  });
};

const methods = {
  title : function() {
    if (this.options.title) {
      return this.options.title;
    }
    let guess = null;
    //guess the title of this page from first sentence bolding
    let sen = this.sentences(0);
    if (sen) {
      guess = sen.bolds(0);
    }
    return guess;
  },
  isRedirect : function() {
    return this.data.type === 'redirect';
  },
  redirectTo: function() {
    return this.data.redirectTo;
  },
  isDisambiguation : function() {
    return this.data.type === 'disambiguation';
  },
  categories : function(clue) {
    if (typeof clue === 'number') {
      return this.data.categories[clue];
    }
    return this.data.categories || [];
  },
  sections : function(clue) {
    let arr = this.data.sections || [];
    arr.forEach((sec) => sec.doc = this);
    //grab a specific section, by its title
    if (typeof clue === 'string') {
      let str = clue.toLowerCase().trim();
      return arr.find((s) => {
        return s.title().toLowerCase() === str;
      });
    }
    if (typeof clue === 'number') {
      return arr[clue];
    }
    return arr;
  },
  paragraphs : function(n) {
    let arr = [];
    this.data.sections.forEach((s) => {
      arr = arr.concat(s.paragraphs());
    });
    if (typeof n === 'number') {
      return arr[n];
    }
    return arr;
  },
  paragraph : function(n) {
    let arr = this.paragraphs() || [];
    if (typeof n === 'number') {
      return arr[n];
    }
    return arr[0];
  },
  sentences : function(n) {
    let arr = [];
    this.sections().forEach((sec) => {
      arr = arr.concat(sec.sentences());
    });
    if (typeof n === 'number') {
      return arr[n];
    }
    return arr;
  },
  images : function(clue) {
    let arr = sectionMap(this, 'images', null);
    //grab image from infobox, first
    this.infoboxes().forEach((info) => {
      if (info.data.image) {
        arr.unshift(info.image()); //put it at the top
      }
    });
    //look for 'gallery' templates, too
    this.templates().forEach((obj) => {
      if (obj.template === 'gallery') {
        obj.images = obj.images || [];
        obj.images.forEach((img) => {
          if (img instanceof Image === false) {
            img = new Image(img);
          }
          arr.push(img);
        });
      }
    });
    if (typeof clue === 'number') {
      return arr[clue];
    }
    return arr;
  },
  links : function(clue) {
    return sectionMap(this, 'links', clue);
  },
  interwiki : function(clue) {
    return sectionMap(this, 'interwiki', clue);
  },
  lists : function(clue) {
    return sectionMap(this, 'lists', clue);
  },
  tables : function(clue) {
    return sectionMap(this, 'tables', clue);
  },
  templates : function(clue) {
    return sectionMap(this, 'templates', clue);
  },
  infoboxes : function(clue) {
    return sectionMap(this, 'infoboxes', clue);
  },
  references : function(clue) {
    return sectionMap(this, 'references', clue);
  },
  coordinates : function(clue) {
    return sectionMap(this, 'coordinates', clue);
  },
  text : function(options) {
    options = setDefaults(options, defaults);
    //nah, skip these.
    if (this.isRedirect() === true) {
      return '';
    }
    let arr = this.sections().map(sec => sec.text(options));
    return arr.join('\n\n');
  },
  markdown : function(options) {
    options = setDefaults(options, defaults);
    return toMarkdown(this, options);
  },
  latex : function(options) {
    options = setDefaults(options, defaults);
    return toLatex(this, options);
  },
  html : function(options) {
    options = setDefaults(options, defaults);
    return toHtml(this, options);
  },
  json : function(options) {
    options = setDefaults(options, defaults);
    return toJSON(this, options);
  },
  debug: function() {
    console.log('\n');
    this.sections().forEach((sec) => {
      let indent = ' - ';
      for(let i = 0; i < sec.depth; i += 1) {
        indent = ' -' + indent;
      }
      console.log(indent + (sec.title() || '(Intro)'));
    });
    return this;
  }
};

//add alises
Object.keys(aliasList).forEach((k) => {
  Document.prototype[k] = methods[aliasList[k]];
});
//add singular-methods, too
let plurals = ['sections', 'infoboxes', 'sentences', 'citations', 'references', 'coordinates', 'tables', 'links', 'images', 'categories'];
plurals.forEach((fn) => {
  let sing = fn.replace(/ies$/, 'y');
  sing = sing.replace(/e?s$/, '');
  methods[sing] = function(n) {
    n = n || 0;
    return this[fn](n);
  };
});

Object.keys(methods).forEach((k) => {
  Document.prototype[k] = methods[k];
});

//alias these ones
Document.prototype.isDisambig = Document.prototype.isDisambiguation;
Document.prototype.citations = Document.prototype.references;
Document.prototype.redirectsTo = Document.prototype.redirectTo;
Document.prototype.redirect = Document.prototype.redirectTo;
Document.prototype.redirects = Document.prototype.redirectTo;

module.exports = Document;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/_sectionMap.js":
/*!*******************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/_sectionMap.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//helper for looping around all sections of a document
const sectionMap = function(doc, fn, clue) {
  let arr = [];
  doc.sections().forEach((sec) => {
    let list = [];
    if (typeof clue === 'string') {
      list = sec[fn](clue);
    } else {
      list = sec[fn]();
    }
    list.forEach((t) => {
      arr.push(t);
    });
  });
  if (typeof clue === 'number') {
    return arr[clue];
  }
  return arr;
};
module.exports = sectionMap;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/categories.js":
/*!******************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/categories.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const i18n = __webpack_require__(/*! ../data/i18n */ "./node_modules/wtf_wikipedia/src/data/i18n.js");
const cat_reg = new RegExp('\\[\\[:?(' + i18n.categories.join('|') + '):(.{2,60}?)]](w{0,10})', 'ig');
const cat_remove_reg = new RegExp('^\\[\\[:?(' + i18n.categories.join('|') + '):', 'ig');

const parse_categories = function(r, wiki) {
  r.categories = [];
  let tmp = wiki.match(cat_reg); //regular links
  if (tmp) {
    tmp.forEach(function(c) {
      c = c.replace(cat_remove_reg, '');
      c = c.replace(/\|?[ \*]?\]\]$/i, ''); //parse fancy onces..
      c = c.replace(/\|.*/, ''); //everything after the '|' is metadata
      if (c && !c.match(/[\[\]]/)) {
        r.categories.push(c);
      }
    });
  }
  wiki = wiki.replace(cat_reg, '');
  return wiki;
};
module.exports = parse_categories;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/disambig.js":
/*!****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/disambig.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const i18n = __webpack_require__(/*! ../data/i18n */ "./node_modules/wtf_wikipedia/src/data/i18n.js");
const template_reg = new RegExp('\\{\\{ ?(' + i18n.disambigs.join('|') + ')(\\|[a-z, =]*?)? ?\\}\\}', 'i');

//special disambig-templates en-wikipedia uses
let d = ' disambiguation';
const english = [
  'airport',
  'biology' + d,
  'call sign' + d,
  'caselaw' + d,
  'chinese title' + d,
  'dab',
  'dab',
  'disamb',
  'disambig',
  'disambiguation cleanup',
  'genus' + d,
  'geodis',
  'hndis',
  'hospital' + d,
  'lake index',
  'letter' + d,
  'letter-number combination' + d,
  'mathematical' + d,
  'military unit' + d,
  'mountainindex',
  'number' + d,
  'phonetics' + d,
  'place name' + d,
  'place name' + d,
  'portal' + d,
  'road' + d,
  'school' + d,
  'setindex',
  'ship index',
  'species latin name abbreviation' + d,
  'species latin name' + d,
  'split dab',
  'sport index',
  'station' + d,
  'synagogue' + d,
  'taxonomic authority' + d,
  'taxonomy' + d,
  'wp disambig',
];
const enDisambigs = new RegExp('\\{\\{ ?(' + english.join('|') + ')(\\|[a-z, =]*?)? ?\\}\\}', 'i');

const isDisambig = function(wiki) {
  //test for {{disambiguation}} templates
  if (template_reg.test(wiki) === true) {
    return true;
  }
  //more english-centric disambiguation templates

  //{{hndis}}, etc
  if (enDisambigs.test(wiki) === true) {
    return true;
  }

  //try 'may refer to' on first line for en-wiki?
  // let firstLine = wiki.match(/^.+?\n/);
  // if (firstLine !== null && firstLine[0]) {
  //   if (/ may refer to/i.test(firstLine) === true) {
  //     return true;
  //   }
  // }
  return false;
};

module.exports = {
  isDisambig: isDisambig
};


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Document = __webpack_require__(/*! ./Document */ "./node_modules/wtf_wikipedia/src/01-document/Document.js");
const redirects = __webpack_require__(/*! ./redirects */ "./node_modules/wtf_wikipedia/src/01-document/redirects.js");
const disambig = __webpack_require__(/*! ./disambig */ "./node_modules/wtf_wikipedia/src/01-document/disambig.js");
const preProcess = __webpack_require__(/*! ./preProcess */ "./node_modules/wtf_wikipedia/src/01-document/preProcess/index.js");
const parse = {
  section: __webpack_require__(/*! ../02-section */ "./node_modules/wtf_wikipedia/src/02-section/index.js"),
  categories: __webpack_require__(/*! ./categories */ "./node_modules/wtf_wikipedia/src/01-document/categories.js")
};

//convert wikiscript markup lang to json
const main = function(wiki, options) {
  options = options || {};
  wiki = wiki || '';
  let data = {
    type: 'page',
    sections: [],
    categories: [],
    coordinates: [],
  };
  //detect if page is just redirect, and return it
  if (redirects.isRedirect(wiki) === true) {
    data.type = 'redirect';
    data.redirectTo = redirects.parse(wiki);
    parse.categories(data, wiki);
    return new Document(data, options);
  }
  //detect if page is just disambiguator page, and return
  if (disambig.isDisambig(wiki) === true) {
    data.type = 'disambiguation';
  }
  if (options.page_identifier) {
    data.page_identifier = options.page_identifier;
  }
  if (options.lang_or_wikiid) {
    data.lang_or_wikiid = options.lang_or_wikiid;
  }
  //give ourselves a little head-start
  wiki = preProcess(data, wiki, options);
  //pull-out [[category:whatevers]]
  wiki = parse.categories(data, wiki);
  //parse all the headings, and their texts/sentences
  data.sections = parse.section(wiki, options) || [];
  //all together now
  return new Document(data, options);
};

module.exports = main;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/preProcess/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/preProcess/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const kill_xml = __webpack_require__(/*! ./kill_xml */ "./node_modules/wtf_wikipedia/src/01-document/preProcess/kill_xml.js");

//this mostly-formatting stuff can be cleaned-up first, to make life easier
function preProcess(r, wiki, options) {
  //remove comments
  wiki = wiki.replace(/<!--[\s\S]{0,2000}?-->/g, '');
  wiki = wiki.replace(/__(NOTOC|NOEDITSECTION|FORCETOC|TOC)__/ig, '');
  //signitures
  wiki = wiki.replace(/~~{1,3}/g, '');
  //windows newlines
  wiki = wiki.replace(/\r/g, '');
  //horizontal rule
  wiki = wiki.replace(/----/g, '');
  //{{!}} - this weird thing https://www.mediawiki.org/wiki/Help:Magic_words#Other
  wiki = wiki.replace(/\{\{!\}\}/g, '|');
  //formatting for templates-in-templates...
  wiki = wiki.replace(/\{\{(–|ndash|en dash)\}\}/ig, '–');
  wiki = wiki.replace(/\{\{(—|em dash)\}\}/ig, '—');
  wiki = wiki.replace(/\{\{\}\}/g, ' – ');
  wiki = wiki.replace(/\{\{•\}\}/g, ' •');
  wiki = wiki.replace(/\{\{\\\}\}/g, ' / ');
  wiki = wiki.replace(/\{\{ambersand\}\}/ig, '&');
  wiki = wiki.replace(/\{\{snds\}\}/ig, ' – ');
  // these '{{^}}' things are nuts, and used as some ilicit spacing thing.
  wiki = wiki.replace(/\{\{\^\}\}/g, '');
  //yup, oxford comma template
  wiki = wiki.replace(/\{\{\,\}\}/g, ',');
  //space
  wiki = wiki.replace(/&nbsp;/g, ' ');
  //give it the inglorious send-off it deserves..
  wiki = kill_xml(wiki, r, options);
  //({{template}},{{template}}) leaves empty parentheses
  wiki = wiki.replace(/\([,;: ]+?\)/g, '');
  return wiki;
}
module.exports = preProcess;
// console.log(preProcess("hi [[as:Plancton]] there"));
// console.log(preProcess('hello <br/> world'))
// console.log(preProcess("hello <asd f> world </h2>"))


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/preProcess/kill_xml.js":
/*!***************************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/preProcess/kill_xml.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//okay, i know you're not supposed to regex html, but...
//https://en.wikipedia.org/wiki/Help:HTML_in_wikitext

//these are things we throw-away
//these will mess-up if they're nested, but they're not usually.
const ignore = [
  'table',
  'code',
  'score',
  'data',
  'categorytree',
  'charinsert',
  'hiero',
  'imagemap',
  'inputbox',
  'math',
  'nowiki',
  'poem',
  'references',
  'source',
  'syntaxhighlight',
  'timeline'
];
const openTag = `< ?(${ignore.join('|')}) ?[^>]{0,200}?>`;
const closeTag = `< ?/ ?(${ignore.join('|')}) ?>`;
const anyChar = '\\s\\S'; //including newline
const noThanks = new RegExp(`${openTag}[${anyChar}]+?${closeTag}`, 'ig');

const kill_xml = function(wiki) {
  //(<ref> tags are parsed in Section class) - luckily, refs can't be recursive.
  //types of html/xml that we want to trash completely.
  wiki = wiki.replace(noThanks, ' ');
  //some xml-like fragments we can also kill
  wiki = wiki.replace(/ ?< ?(span|div|table|data) [a-zA-Z0-9=" ]{2,100}\/? ?> ?/g, ' '); //<ref name="asd">
  //only kill ref tags if they are selfclosing
  wiki = wiki.replace(/ ?< ?(ref) [a-zA-Z0-9=" ]{2,100}\/ ?> ?/g, ' '); //<ref name="asd"/>
  //some formatting xml, we'll keep their insides though
  wiki = wiki.replace(/ ?<[ \/]?(p|sub|sup|span|nowiki|div|table|br|tr|td|th|pre|pre2|hr)[ \/]?> ?/g, ' '); //<sub>, </sub>
  wiki = wiki.replace(/ ?<[ \/]?(abbr|bdi|bdo|blockquote|cite|del|dfn|em|i|ins|kbd|mark|q|s)[ \/]?> ?/g, ' '); //<abbr>, </abbr>
  wiki = wiki.replace(/ ?<[ \/]?h[0-9][ \/]?> ?/g, ' '); //<h2>, </h2>
  wiki = wiki.replace(/ ?< ?br ?\/> ?/g, '\n'); //<br />
  return wiki.trim();
};
module.exports = kill_xml;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/redirects.js":
/*!*****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/redirects.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const i18n = __webpack_require__(/*! ../data/i18n */ "./node_modules/wtf_wikipedia/src/data/i18n.js");
const parseLink = __webpack_require__(/*! ../04-sentence/links */ "./node_modules/wtf_wikipedia/src/04-sentence/links.js");
//pulls target link out of redirect page
const REDIRECT_REGEX = new RegExp('^[ \n\t]*?#(' + i18n.redirects.join('|') + ') *?(\\[\\[.{2,180}?\\]\\])', 'i');

const isRedirect = function(wiki) {
  //too long to be a redirect?
  if (!wiki || wiki.length > 500) {
    return false;
  }
  return REDIRECT_REGEX.test(wiki);
};

const parse = function(wiki) {
  let m = wiki.match(REDIRECT_REGEX);
  if (m && m[2]) {
    let links = parseLink(m[2]) || [];
    return links[0];
  }
  return {};
};

module.exports = {
  isRedirect: isRedirect,
  parse: parse
};


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/toHtml.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/toHtml.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const defaults = {
  title: true,
  infoboxes: true,
  headers: true,
  sections: true,
  links: true,
};
// we should try to make this look like the wikipedia does, i guess.
const softRedirect = function(doc) {
  let link = doc.redirectTo();
  let href = link.page;
  href = './' + href.replace(/ /g, '_');
  if (link.anchor) {
    href += '#' + link.anchor;
  }
  return `  <div class="redirect">
  ↳ <a class="link" href="./${href}">${link.text}</a>
  </div>`;
};

//turn a Doc object into a HTML string
const toHtml = function(doc, options) {
  options = setDefaults(options, defaults);
  let data = doc.data;
  let html = '';
  html += '<!DOCTYPE html>\n';
  html += '<html>\n';
  html += '<head>\n';
  //add page title
  if (options.title === true && data.title) {
    html += '<title>' + data.title + '</title>\n';
  }
  html += '</head>\n';
  html += '<body>\n';

  //if it's a redirect page, give it a 'soft landing':
  if (doc.isRedirect() === true) {
    html += softRedirect(doc);
    return html + '\n</body>\n</html>'; //end it here.
  }
  //render infoboxes (up at the top)
  if (options.infoboxes === true) {
    html += doc.infoboxes().map(i => i.html(options)).join('\n');
  }
  //render each section
  if (options.sections === true && (options.paragraphs === true || options.sentences === true)) {
    html += data.sections.map(s => s.html(options)).join('\n');
  }
  //default off
  if (options.references === true) {
    html += '<h2>References</h2>';
    html += doc.references().map((c) => c.json(options)).join('\n');
  }
  html += '</body>\n';
  html += '</html>';
  return html;
};
module.exports = toHtml;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/toJson.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/toJson.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const redirects = __webpack_require__(/*! ./redirects */ "./node_modules/wtf_wikipedia/src/01-document/redirects.js");
const defaults = {
  title: true,
  sections: true,
  pageID: true,
  categories: true,
};

//an opinionated output of the most-wanted data
const toJSON = function(doc, options) {
  options = setDefaults(options, defaults);
  let data = {};
  if (options.title) {
    data.title = doc.options.title || doc.title();
  }
  if (options.pageID && doc.options.pageID) {
    data.pageID = doc.options.pageID;
  }
  if (options.categories) {
    data.categories = doc.categories();
  }
  if (options.sections) {
    data.sections = doc.sections().map(i => i.json(options));
  }
  if (doc.isRedirect() === true) {
    data.isRedirect = true;
    data.redirectTo = doc.data.redirectTo;
    data.sections = [];
  }

  //these are default-off
  if (options.coordinates) {
    data.coordinates = doc.coordinates();
  }
  if (options.infoboxes) {
    data.infoboxes = doc.infoboxes().map(i => i.json(options));
  }
  if (options.images) {
    data.images = doc.images().map(i => i.json(options));
  }
  if (options.plaintext) {
    data.plaintext = doc.plaintext(options);
  }
  if (options.citations) {
    data.references = doc.references();
  }
  if (options.markdown) {
    data.markdown = doc.markdown(options);
  }
  if (options.html) {
    data.html = doc.html(options);
  }
  if (options.latex) {
    data.latex = doc.latex(options);
  }
  return data;
};
module.exports = toJSON;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/toLatex.js":
/*!***************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/toLatex.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const defaults = {
  infoboxes: true,
  sections: true,
};

// we should try to make this look like the wikipedia does, i guess.
const softRedirect = function(doc) {
  let link = doc.redirectTo();
  let href = link.page;
  href = './' + href.replace(/ /g, '_');
  //add anchor
  if (link.anchor) {
    href += '#' + link.anchor;
  }
  return '↳ \\href{' + href + '}{' + link.text + '}';
};

//
const toLatex = function(doc, options) {
  options = setDefaults(options, defaults);
  let out = '';
  //if it's a redirect page, give it a 'soft landing':
  if (doc.isRedirect() === true) {
    return softRedirect(doc); //end it here.
  }
  //render infoboxes (up at the top)
  if (options.infoboxes === true) {
    out += doc.infoboxes().map(i => i.latex(options)).join('\n');
  }
  //render each section
  if (options.sections === true || options.paragraphs === true || options.sentences === true) {
    out += doc.sections().map(s => s.latex(options)).join('\n');
  }
  //default off
  //render citations
  if (options.citations === true) {
    out += doc.citations().map(c => c.latex(options)).join('\n');
  }
  return out;
};
module.exports = toLatex;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/01-document/toMarkdown.js":
/*!******************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/01-document/toMarkdown.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const defaults = {
  redirects: true,
  infoboxes: true,
  templates: true,
  sections: true,
};
// we should try to make this look like the wikipedia does, i guess.
const softRedirect = function(doc) {
  let link = doc.redirectTo();
  let href = link.page;
  href = './' + href.replace(/ /g, '_');
  if (link.anchor) {
    href += '#' + link.anchor;
  }
  return `↳ [${link.text}](${href})`;
};

//turn a Doc object into a markdown string
const toMarkdown = function(doc, options) {
  options = setDefaults(options, defaults);
  let data = doc.data;
  let md = '';
  //if it's a redirect page, give it a 'soft landing':
  if (options.redirects === true && doc.isRedirect() === true) {
    return softRedirect(doc); //end it here
  }
  //render infoboxes (up at the top)
  if (options.infoboxes === true && options.templates === true) {
    md += doc.infoboxes().map(infobox => infobox.markdown(options)).join('\n\n');
  }
  //render each section
  if (options.sections === true || options.paragraphs === true || options.sentences === true) {
    md += data.sections.map(s => s.markdown(options)).join('\n\n');
  }
  //default false
  if (options.citations === true) {
    md += '## References';
    md += doc.citations().map(c => c.json(options)).join('\n');

  }
  return md;
};
module.exports = toMarkdown;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/02-section/Section.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/02-section/Section.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const toMarkdown = __webpack_require__(/*! ./toMarkdown */ "./node_modules/wtf_wikipedia/src/02-section/toMarkdown.js");
const toHtml = __webpack_require__(/*! ./toHtml */ "./node_modules/wtf_wikipedia/src/02-section/toHtml.js");
const toJSON = __webpack_require__(/*! ./toJson */ "./node_modules/wtf_wikipedia/src/02-section/toJson.js");
const toLatex = __webpack_require__(/*! ./toLatex */ "./node_modules/wtf_wikipedia/src/02-section/toLatex.js");
const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const aliasList = __webpack_require__(/*! ../lib/aliases */ "./node_modules/wtf_wikipedia/src/lib/aliases.js");

const defaults = {
  tables: true,
  references: true,
  paragraphs: true,
  templates: true,
  infoboxes: true,
};

//the stuff between headings - 'History' section for example
const Section = function(data) {
  this.depth = data.depth;
  this.doc = null;
  Object.defineProperty(this, 'doc', {
    enumerable: false,
    value: null
  });
  Object.defineProperty(this, 'data', {
    enumerable: false,
    value: data
  });
};

const methods = {
  title: function() {
    return this.data.title || '';
  },
  index: function() {
    if (!this.doc) {
      return null;
    }
    let index = this.doc.sections().indexOf(this);
    if (index === -1) {
      return null;
    }
    return index;
  },
  indentation: function() {
    return this.depth;
  },
  sentences: function(n) {
    let arr = this.paragraphs().reduce((list, p) => {
      return list.concat(p.sentences());
    }, []);
    if (typeof n === 'number') {
      return arr[n];
    }
    return arr || [];
  },
  paragraphs: function(n) {
    let arr = this.data.paragraphs || [];
    if (typeof n === 'number') {
      return arr[n];
    }
    return arr || [];
  },
  paragraph: function(n) {
    let arr = this.data.paragraphs || [];
    if (typeof n === 'number') {
      return arr[n];
    }
    return arr[0];
  },
  links: function(n) {
    let arr = [];
    this.infoboxes().forEach(templ => {
      templ.links(n).forEach(link => arr.push(link));
    });
    this.sentences().forEach(s => {
      s.links(n).forEach(link => arr.push(link));
    });
    this.tables().forEach(t => {
      t.links(n).forEach(link => arr.push(link));
    });
    this.lists().forEach(list => {
      list.links(n).forEach(link => arr.push(link));
    });
    if (typeof n === 'number') {
      return arr[n];
    } else if (typeof n === 'string') { //grab a link like .links('Fortnight')
      n = n.charAt(0).toUpperCase() + n.substring(1); //titlecase it
      let link = arr.find(o => o.page === n);
      return link === undefined ? [] : [link];
    }
    return arr;
  },
  tables: function(clue) {
    if (typeof clue === 'number') {
      return this.data.tables[clue];
    }
    return this.data.tables || [];
  },
  templates: function(clue) {
    let arr = this.data.templates || [];
    if (typeof clue === 'number') {
      return arr[clue];
    }
    if (typeof clue === 'string') {
      clue = clue.toLowerCase();
      return arr.filter(o => o.template === clue || o.name === clue);
    }
    return arr;
  },
  infoboxes: function(clue) {
    let arr = this.data.infoboxes || [];
    if (typeof clue === 'number') {
      return arr[clue];
    }
    return arr;
  },
  coordinates: function(clue) {
    let arr = this.templates('coord');
    if (typeof clue === 'number') {
      return arr[clue];
    }
    return arr;
  },
  lists: function(clue) {
    let arr = [];
    this.paragraphs().forEach((p) => {
      arr = arr.concat(p.lists());
    });
    if (typeof clue === 'number') {
      return arr[clue];
    }
    return arr;
  },
  interwiki(num) {
    let arr = [];
    this.paragraphs().forEach(p => {
      arr = arr.concat(p.interwiki());
    });
    if (typeof num === 'number') {
      return arr[num];
    }
    return arr || [];
  },
  images: function(clue) {
    let arr = [];
    this.paragraphs().forEach((p) => {
      arr = arr.concat(p.images());
    });
    if (typeof clue === 'number') {
      return arr[clue];
    }
    return arr || [];
  },
  references: function(clue) {
    let arr = this.data.references || [];
    if (typeof clue === 'number') {
      return arr[clue];
    }
    return arr;
  },

  //transformations
  remove: function() {
    if (!this.doc) {
      return null;
    }
    let bads = {};
    bads[this.title()] = true;
    //remove children too
    this.children().forEach(sec => (bads[sec.title()] = true));
    let arr = this.doc.data.sections;
    arr = arr.filter(sec => bads.hasOwnProperty(sec.title()) !== true);
    this.doc.data.sections = arr;
    return this.doc;
  },

  //move-around sections like in jquery
  nextSibling: function() {
    if (!this.doc) {
      return null;
    }
    let sections = this.doc.sections();
    let index = this.index();
    for (let i = index + 1; i < sections.length; i += 1) {
      if (sections[i].depth < this.depth) {
        return null;
      }
      if (sections[i].depth === this.depth) {
        return sections[i];
      }
    }
    return null;
  },
  lastSibling: function() {
    if (!this.doc) {
      return null;
    }
    let sections = this.doc.sections();
    let index = this.index();
    return sections[index - 1] || null;
  },
  children: function(n) {
    if (!this.doc) {
      return null;
    }

    let sections = this.doc.sections();
    let index = this.index();
    let children = [];
    //(immediately preceding sections with higher depth)
    if (sections[index + 1] && sections[index + 1].depth > this.depth) {
      for (let i = index + 1; i < sections.length; i += 1) {
        if (sections[i].depth > this.depth) {
          children.push(sections[i]);
        } else {
          break;
        }
      }
    }
    if (typeof n === 'string') {
      n = n.toLowerCase();
      // children.forEach((c) => console.log(c));
      return children.find(s => s.title().toLowerCase() === n);
    }
    if (typeof n === 'number') {
      return children[n];
    }
    return children;
  },
  parent: function() {
    if (!this.doc) {
      return null;
    }
    let sections = this.doc.sections();
    let index = this.index();
    for (let i = index; i >= 0; i -= 1) {
      if (sections[i] && sections[i].depth < this.depth) {
        return sections[i];
      }
    }
    return null;
  },

  markdown: function(options) {
    options = setDefaults(options, defaults);
    return toMarkdown(this, options);
  },
  html: function(options) {
    options = setDefaults(options, defaults);
    return toHtml(this, options);
  },
  text: function(options) {
    options = setDefaults(options, defaults);
    let pList = this.paragraphs();
    pList = pList.map(p => p.text(options));
    return pList.join('\n\n');
  },
  latex: function(options) {
    options = setDefaults(options, defaults);
    return toLatex(this, options);
  },
  json: function(options) {
    options = setDefaults(options, defaults);
    return toJSON(this, options);
  }
};
//aliases
methods.next = methods.nextSibling;
methods.last = methods.lastSibling;
methods.previousSibling = methods.lastSibling;
methods.previous = methods.lastSibling;
methods.citations = methods.references;
Object.keys(methods).forEach(k => {
  Section.prototype[k] = methods[k];
});
//add alises, too
Object.keys(aliasList).forEach(k => {
  Section.prototype[k] = methods[aliasList[k]];
});
module.exports = Section;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/02-section/heading.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/02-section/heading.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fns = __webpack_require__(/*! ../lib/helpers */ "./node_modules/wtf_wikipedia/src/lib/helpers.js");
const parseSentence = __webpack_require__(/*! ../04-sentence/ */ "./node_modules/wtf_wikipedia/src/04-sentence/index.js").oneSentence;
const parseReferences = __webpack_require__(/*! ../reference/ */ "./node_modules/wtf_wikipedia/src/reference/index.js");
const heading_reg = /^(={1,5})(.{1,200}?)={1,5}$/;

//interpret depth, title of headings like '==See also=='
const parseHeading = function(data, str) {

  let heading = str.match(heading_reg);
  if (!heading) {
    data.title = '';
    data.depth = 0;
    return data;
  }
  let title = heading[2] || '';
  title = parseSentence(title).text();
  //amazingly, you can see inline {{templates}} in this text, too
  //... let's not think about that now.
  title = title.replace(/\{\{.+?\}\}/, '');
  //same for references (i know..)
  title = parseReferences(title, {});
  //trim leading/trailing whitespace
  title = fns.trim_whitespace(title);
  let depth = 0;
  if (heading[1]) {
    depth = heading[1].length - 2;
  }
  data.title = title;
  data.depth = depth;
  return data;
};
module.exports = parseHeading;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/02-section/index.js":
/*!************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/02-section/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Section = __webpack_require__(/*! ./Section */ "./node_modules/wtf_wikipedia/src/02-section/Section.js");
const isReference = /^(references?|einzelnachweise|referencias|références|notes et références|脚注|referenser|bronnen|примечания):?/i; //todo support more languages
const section_reg = /(?:\n|^)(={2,5}.{1,200}?={2,5})/g;

//interpret ==heading== lines
const parse = {
  heading: __webpack_require__(/*! ./heading */ "./node_modules/wtf_wikipedia/src/02-section/heading.js"),
  table: __webpack_require__(/*! ../table */ "./node_modules/wtf_wikipedia/src/table/index.js"),
  paragraphs: __webpack_require__(/*! ../03-paragraph */ "./node_modules/wtf_wikipedia/src/03-paragraph/index.js"),
  templates: __webpack_require__(/*! ../templates */ "./node_modules/wtf_wikipedia/src/templates/index.js"),
  references: __webpack_require__(/*! ../reference */ "./node_modules/wtf_wikipedia/src/reference/index.js"),
  xmlTemplates: __webpack_require__(/*! ./xml-templates */ "./node_modules/wtf_wikipedia/src/02-section/xml-templates.js")
};

const oneSection = function( wiki, data, options) {
  wiki = parse.xmlTemplates(data, wiki, options);
  //parse-out the <ref></ref> tags
  wiki = parse.references(wiki, data);
  //parse-out all {{templates}}
  wiki = parse.templates(wiki, data, options);
  // //parse the tables
  wiki = parse.table(data, wiki);
  //now parse all double-newlines
  let res = parse.paragraphs(wiki, options);
  data.paragraphs = res.paragraphs;
  wiki = res.wiki;
  data = new Section(data, wiki);
  return data;
};

//we re-create this in html/markdown outputs
const removeReferenceSection = function(sections) {
  return sections.filter((s, i) => {
    if (isReference.test(s.title()) === true) {
      if (s.paragraphs().length > 0) {
        return true;
      }
      //does it have some wacky templates?
      if (s.templates().length > 0) {
        return true;
      }
      //what it has children? awkward
      if (sections[i + 1] && sections[i + 1].depth > s.depth) {
        sections[i + 1].depth -= 1; //move it up a level?...
      }
      return false;
    }
    return true;
  });
};

const parseSections = function(wiki, options) {
  let split = wiki.split(section_reg);
  let sections = [];
  for (let i = 0; i < split.length; i += 2) {
    let heading = split[i - 1] || '';
    let content = split[i] || '';
    if (content === '' && heading === '') { //usually an empty 'intro' section
      continue;
    }
    let data = {
      title: '',
      depth: null,
      templates: [],
      infoboxes: [],
      references: [],
    };
    //figure-out title/depth
    parse.heading(data, heading);
    //parse it up
    let s = oneSection(content, data, options);
    sections.push(s);
  }
  //remove empty references section
  sections = removeReferenceSection(sections);

  return sections;
};

module.exports = parseSections;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/02-section/toHtml.js":
/*!*************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/02-section/toHtml.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const defaults = {
  headers: true,
  images: true,
  tables: true,
  lists: true,
  paragraphs: true,
};
const doSection = (section, options) => {
  options = setDefaults(options, defaults);
  let html = '';
  //make the header
  if (options.headers === true && section.title()) {
    let num = 1 + section.depth;
    html += '  <h' + num + '>' + section.title() + '</h' + num + '>';
    html += '\n';
  }
  //put any images under the header
  if (options.images === true) {
    let imgs = section.images();
    if (imgs.length > 0) {
      html += imgs.map((image) => image.html(options)).join('\n');
    }
  }
  //make a html table
  if (options.tables === true) {
    html += section.tables().map((t) => t.html(options)).join('\n');
  }
  // //make a html bullet-list
  if (options.lists === true) {
    html += section.lists().map((list) => list.html(options)).join('\n');
  }
  //finally, write the sentence text.
  if (options.paragraphs === true && section.paragraphs().length > 0) {
    html += '  <div class="text">\n';
    section.paragraphs().forEach((p) => {
      html += '    <p class="paragraph">\n';
      html += '      ' + p.sentences().map((s) => s.html(options)).join(' ');
      html += '\n    </p>\n';
    });
    html += '  </div>\n';
  } else if (options.sentences === true) {
    html += '      ' + section.sentences().map((s) => s.html(options)).join(' ');
  }
  return '<div class="section">\n' + html + '</div>\n';
};
module.exports = doSection;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/02-section/toJson.js":
/*!*************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/02-section/toJson.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const encode = __webpack_require__(/*! ../lib/encode */ "./node_modules/wtf_wikipedia/src/lib/encode.js");

const defaults = {
  headers: true,
  depth: true,
  paragraphs: true,
  images: true,
  tables: true,
  templates: true,
  infoboxes: true,
  lists: true,
};
//
const toJSON = function(section, options) {
  options = setDefaults(options, defaults);
  let data = {};
  if (options.headers === true) {
    data.title = section.title();
  }
  if (options.depth === true) {
    data.depth = section.depth;
  }
  //these return objects
  if (options.paragraphs === true) {
    data.paragraphs = section.paragraphs().map(p => p.json(options));
  }
  //image json data
  if (options.images === true) {
    data.images = section.images().map(img => img.json(options));
  }
  //table json data
  if (options.tables === true) {
    data.tables = section.tables().map(t => t.json(options));
  }
  //template json data
  if (options.templates === true) {
    data.templates = section.templates();
    //encode them, for mongodb
    if (options.encode === true) {
      data.templates.forEach((t) => {
        if (t.data) {
          t.data = encode.encodeObj(t.data);
        }
      });
    }
  }
  //infobox json data
  if (options.infoboxes === true) {
    data.infoboxes = section.infoboxes().map(i => i.json(options));
  }
  //list json data
  if (options.lists === true) {
    data.lists = section.lists().map(list => list.json(options));
  }
  //default off
  if (options.sentences === true) {
    data.sentences = section.sentences().map(s => s.json(options));
  }
  return data;
};
module.exports = toJSON;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/02-section/toLatex.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/02-section/toLatex.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const defaults = {
  headers: true,
  images: true,
  tables: true,
  lists: true,
  paragraphs: true,
};
//map '==' depth to 'subsection', 'subsubsection', etc
const doSection = (section, options) => {
  options = setDefaults(options, defaults);
  let out = '';
  let num = 1;
  //make the header
  if (options.headers === true && section.title()) {
    num = 1 + section.depth;
    var vOpen = '\n';
    var vClose = '}';
    switch (num) {
      case 1:
        vOpen += '\\chapter{';
        break;
      case 2:
        vOpen += '\\section{';
        break;
      case 3:
        vOpen += '\\subsection{';
        break;
      case 4:
        vOpen += '\\subsubsection{';
        break;
      case 5:
        vOpen += '\\paragraph{';
        vClose = '} \\\\ \n';
        break;
      case 6:
        vOpen += '\\subparagraph{';
        vClose = '} \\\\ \n';
        break;
      default:
        vOpen += '\n% section with depth=' + num + ' undefined - use subparagraph instead\n\\subparagraph{';
        vClose = '} \\\\ \n';
    }
    out += vOpen + section.title() + vClose;
    out += '\n';
  }
  //put any images under the header
  if (options.images === true && section.images()) {
    out += section.images().map((img) => img.latex(options)).join('\n');
  //out += '\n';
  }
  //make a out tablew
  if (options.tables === true && section.tables()) {
    out += section.tables().map((t) => t.latex(options)).join('\n');
  }
  // //make a out bullet-list
  if (options.lists === true && section.lists()) {
    out += section.lists().map((list) => list.latex(options)).join('\n');
  }
  //finally, write the sentence text.
  if (options.paragraphs === true || options.sentences === true) {
    out += section.paragraphs().map((s) => s.latex(options)).join(' ');
    out += '\n';
  }
  // var title_tag = ' SECTION depth=' + num + ' - TITLE: ' + section.title + '\n';
  // wrap a section comment
  //out = '\n% BEGIN' + title_tag + out + '\n% END' + title_tag;
  return out;
};
module.exports = doSection;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/02-section/toMarkdown.js":
/*!*****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/02-section/toMarkdown.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");

const defaults = {
  headers: true,
  images: true,
  tables: true,
  lists: true,
  paragraphs: true,
};

const doSection = (section, options) => {
  options = setDefaults(options, defaults);
  let md = '';
  //make the header
  if (options.headers === true && section.title()) {
    let header = '##';
    for(let i = 0; i < section.depth; i += 1) {
      header += '#';
    }
    md += header + ' ' + section.title() + '\n';
  }
  //put any images under the header
  if (options.images === true) {
    let images = section.images();
    if (images.length > 0) {
      md += images.map((img) => img.markdown()).join('\n');
      md += '\n';
    }
  }
  //make a mardown table
  if (options.tables === true) {
    let tables = section.tables();
    if (tables.length > 0) {
      md += '\n';
      md += tables.map((table) => table.markdown(options)).join('\n');
      md += '\n';
    }
  }
  //make a mardown bullet-list
  if (options.lists === true) {
    let lists = section.lists();
    if (lists.length > 0) {
      md += lists.map((list) => list.markdown(options)).join('\n');
      md += '\n';
    }
  }
  //finally, write the sentence text.
  if (options.paragraphs === true || options.sentences === true) {
    md += section.paragraphs().map((p) => {
      return p.sentences().map(s => s.markdown(options)).join(' ');
    }).join('\n\n');
  }
  return md;
};
module.exports = doSection;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/02-section/xml-templates.js":
/*!********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/02-section/xml-templates.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parseSentence = __webpack_require__(/*! ../04-sentence/ */ "./node_modules/wtf_wikipedia/src/04-sentence/index.js").oneSentence;
const Image = __webpack_require__(/*! ../image/Image */ "./node_modules/wtf_wikipedia/src/image/Image.js");
// Most templates are '{{template}}', but then, some are '<template></template>'.
// -> this is those ones.

//okay, <gallery> is a xml-tag, with newline-seperated data, somehow pivoted by '|'...
//all deities help us. truly -> https://en.wikipedia.org/wiki/Help:Gallery_tag
// - not to be confused with https://en.wikipedia.org/wiki/Template:Gallery...
const parseGallery = function(wiki, section) {
  wiki = wiki.replace(/<gallery([^>]*?)>([\s\S]+?)<\/gallery>/g, (_, attrs, inside) => {
    let images = inside.split(/\n/g);
    images = images.filter(str => str && str.trim() !== '');
    //parse the line, which has an image and sometimes a caption
    images = images.map((str) => {
      let arr = str.split(/\|/);
      let obj = {
        file: arr[0].trim()
      };
      let img = new Image(obj).json();
      let caption = arr.slice(1).join('|');
      if (caption !== '') {
        img.caption = parseSentence(caption);
      }
      return img;
    });
    //add it to our templates list
    if (images.length > 0) {
      section.templates.push({
        template: 'gallery',
        images: images
      });
    }
    return '';
  });
  return wiki;
};

const xmlTemplates = function(section, wiki) {
  wiki = parseGallery(wiki, section);
  return wiki;
};

module.exports = xmlTemplates;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/03-paragraph/Paragraph.js":
/*!******************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/03-paragraph/Paragraph.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const toJSON = __webpack_require__(/*! ./toJson */ "./node_modules/wtf_wikipedia/src/03-paragraph/toJson.js");
const toMarkdown = __webpack_require__(/*! ./toMarkdown */ "./node_modules/wtf_wikipedia/src/03-paragraph/toMarkdown.js");
const toHtml = __webpack_require__(/*! ./toHtml */ "./node_modules/wtf_wikipedia/src/03-paragraph/toHtml.js");
const toLatex = __webpack_require__(/*! ./toLatex */ "./node_modules/wtf_wikipedia/src/03-paragraph/toLatex.js");
const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const defaults = {
  sentences: true,
  lists: true,
  images: true,
};

const Paragraph = function(data) {
  Object.defineProperty(this, 'data', {
    enumerable: false,
    value: data
  });
};

const methods = {
  sentences: function(num) {
    if (typeof num === 'number') {
      return this.data.sentences[num];
    }
    return this.data.sentences || [];
  },
  references: function(num) {
    if (typeof num === 'number') {
      return this.data.references[num];
    }
    return this.data.references;
  },
  lists: function(num) {
    if (typeof num === 'number') {
      return this.data.lists[num];
    }
    return this.data.lists;
  },
  images(num) {
    if (typeof num === 'number') {
      return this.data.images[num];
    }
    return this.data.images || [];
  },
  links: function(n) {
    let arr = [];
    this.sentences().forEach(s => {
      arr = arr.concat(s.links(n));
    });
    if (typeof n === 'number') {
      return arr[n];
    } else if (typeof n === 'string') { //grab a specific link like .links('Fortnight')
      n = n.charAt(0).toUpperCase() + n.substring(1); //titlecase it
      let link = arr.find(o => o.page === n);
      return link === undefined ? [] : [link];
    }
    return arr || [];
  },
  interwiki(num) {
    let arr = [];
    this.sentences().forEach(s => {
      arr = arr.concat(s.interwiki());
    });
    if (typeof num === 'number') {
      return arr[num];
    }
    return arr || [];
  },
  markdown: function(options) {
    options = setDefaults(options, defaults);
    return toMarkdown(this, options);
  },
  html: function(options) {
    options = setDefaults(options, defaults);
    return toHtml(this, options);
  },
  text: function(options) {
    options = setDefaults(options, defaults);
    let str = this.sentences()
      .map(s => s.text(options))
      .join(' ');
    this.lists().forEach((list) => {
      str += '\n' + list.text();
    });
    return str;
  },
  latex: function(options) {
    options = setDefaults(options, defaults);
    return toLatex(this, options);
  },
  json: function(options) {
    options = setDefaults(options, defaults);
    return toJSON(this, options);
  }
};
methods.citations = methods.references;
Object.keys(methods).forEach(k => {
  Paragraph.prototype[k] = methods[k];
});
module.exports = Paragraph;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/03-paragraph/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/03-paragraph/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Paragraph = __webpack_require__(/*! ./Paragraph */ "./node_modules/wtf_wikipedia/src/03-paragraph/Paragraph.js");
const find_recursive = __webpack_require__(/*! ../lib/recursive_match */ "./node_modules/wtf_wikipedia/src/lib/recursive_match.js");
const parseSentences = __webpack_require__(/*! ../04-sentence */ "./node_modules/wtf_wikipedia/src/04-sentence/index.js").addSentences;

const twoNewLines = /\r?\n\W*\r?\n/;
const hasChar = /\w/;
const parse = {
  image: __webpack_require__(/*! ../image */ "./node_modules/wtf_wikipedia/src/image/index.js"),
  list: __webpack_require__(/*! ../list */ "./node_modules/wtf_wikipedia/src/list/index.js"),
};

const parseParagraphs = function(wiki) {
  let pList = wiki.split(twoNewLines);
  //don't create empty paragraphs
  pList = pList.filter(p => p && hasChar.test(p) === true);

  pList = pList.map(str => {
    let data = {
      lists: [],
      sentences: [],
      images: []
    };
    //parse the lists
    str = parse.list(str, data);
    //parse+remove scary '[[ [[]] ]]' stuff
    let matches = find_recursive('[', ']', str);
    // parse images
    str = parse.image(matches, data, str);
    //parse the sentences
    parseSentences(str, data);
    return new Paragraph(data);
  });
  return {
    paragraphs: pList,
    wiki: wiki
  };
};
module.exports = parseParagraphs;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/03-paragraph/toHtml.js":
/*!***************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/03-paragraph/toHtml.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");

const defaults = {
  sentences: true
};

const toHtml = function(p, options) {
  options = setDefaults(options, defaults);
  let html = '';
  if (options.sentences === true) {
    html += p.sentences().map(s => s.html(options)).join('\n');
  }
  return html;
};
module.exports = toHtml;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/03-paragraph/toJson.js":
/*!***************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/03-paragraph/toJson.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");

const defaults = {
  sentences: true
};

const toJson = function(p, options) {
  options = setDefaults(options, defaults);
  let data = {};
  if (options.sentences === true) {
    data.sentences = p.sentences().map(s => s.json(options));
  }
  return data;
};
module.exports = toJson;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/03-paragraph/toLatex.js":
/*!****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/03-paragraph/toLatex.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");

const defaults = {
  sentences: true
};

const toLatex = function(p, options) {
  options = setDefaults(options, defaults);
  let out = '';
  if (options.sentences === true) {
    out += '\n\n% BEGIN Paragraph\n';
    out += p.sentences().reduce((str, s) => {
      str += s.latex(options) + '\n';
      return str;
    }, '');
    out += '% END Paragraph';
  }
  return out;
};
module.exports = toLatex;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/03-paragraph/toMarkdown.js":
/*!*******************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/03-paragraph/toMarkdown.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");

const defaults = {
  sentences: true
};

const toMarkdown = function(p, options) {
  options = setDefaults(options, defaults);
  let md = '';
  if (options.sentences === true) {
    md += p.sentences().reduce((str, s) => {
      str += s.markdown(options) + '\n';
      return str;
    }, {});
  }
  return md;
};
module.exports = toMarkdown;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/04-sentence/Sentence.js":
/*!****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/04-sentence/Sentence.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const toHtml = __webpack_require__(/*! ./toHtml */ "./node_modules/wtf_wikipedia/src/04-sentence/toHtml.js");
const toMarkdown = __webpack_require__(/*! ./toMarkdown */ "./node_modules/wtf_wikipedia/src/04-sentence/toMarkdown.js");
const toJSON = __webpack_require__(/*! ./toJson */ "./node_modules/wtf_wikipedia/src/04-sentence/toJson.js");
const toLatex = __webpack_require__(/*! ./toLatex */ "./node_modules/wtf_wikipedia/src/04-sentence/toLatex.js");
const aliasList = __webpack_require__(/*! ../lib/aliases */ "./node_modules/wtf_wikipedia/src/lib/aliases.js");

//where we store the formatting, link, date information
const Sentence = function(data) {
  Object.defineProperty(this, 'data', {
    enumerable: false,
    value: data
  });
};

const methods = {
  links: function(n) {
    let arr = this.data.links || [];
    if (typeof n === 'number') {
      return arr[n];
    } else if (typeof n === 'string') { //grab a link like .links('Fortnight')
      n = n.charAt(0).toUpperCase() + n.substring(1); //titlecase it
      let link = arr.find(o => o.page === n);
      return link === undefined ? [] : [link];
    }
    return arr;
  },
  interwiki: function(n) {
    let arr = this.links().filter(l => l.wiki !== undefined);
    if (typeof n === 'number') {
      return arr[n];
    }
    return arr;
  },
  bolds: function(n) {
    let arr = [];
    if (this.data && this.data.fmt && this.data.fmt.bold) {
      arr = this.data.fmt.bold || [];
    }
    if (typeof n === 'number') {
      return arr[n];
    }
    return arr;
  },
  italics: function(n) {
    let arr = [];
    if (this.data && this.data.fmt && this.data.fmt.italic) {
      arr = this.data.fmt.italic || [];
    }
    if (typeof n === 'number') {
      return arr[n];
    }
    return arr;
  },
  dates: function(n) {
    let arr = [];
    if (this.data && this.data.dates) {
      arr = this.data.dates || [];
    }
    if (typeof n === 'number') {
      return arr[n];
    }
    return arr;
  },
  markdown : function(options) {
    options = options || {};
    return toMarkdown(this, options);
  },
  html : function(options) {
    options = options || {};
    return toHtml(this, options);
  },
  text : function(str) {
    if (str !== undefined && typeof str === 'string') { //set the text?
      this.data.text = str;
    }
    return this.data.text || '';
  },
  json : function(options) {
    return toJSON(this, options);
  },
  latex : function(options) {
    return toLatex(this, options);
  }
};

Object.keys(methods).forEach((k) => {
  Sentence.prototype[k] = methods[k];
});
//add alises, too
Object.keys(aliasList).forEach((k) => {
  Sentence.prototype[k] = methods[aliasList[k]];
});
Sentence.prototype.italic = Sentence.prototype.italics;
Sentence.prototype.bold = Sentence.prototype.bolds;
Sentence.prototype.plaintext = Sentence.prototype.text;

module.exports = Sentence;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/04-sentence/formatting.js":
/*!******************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/04-sentence/formatting.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//handle the bold/italics
const formatting = function(obj) {
  let bolds = [];
  let italics = [];
  let wiki = obj.text || '';
  //bold and italics combined 5 's
  wiki = wiki.replace(/'''''(.{0,200}?)'''''/g, (a, b) => {
    bolds.push(b);
    italics.push(b);
    return b;
  });
  //''''four'''' → bold with quotes
  wiki = wiki.replace(/''''(.{0,200}?)''''/g, (a, b) => {
    bolds.push(`'${b}'`);
    return `'${b}'`;
  });
  //'''bold'''
  wiki = wiki.replace(/'''(.{0,200}?)'''/g, (a, b) => {
    bolds.push(b);
    return b;
  });
  //''italic''
  wiki = wiki.replace(/''(.{0,200}?)''/g, (a, b) => {
    italics.push(b);
    return b;
  });

  //pack it all up..
  obj.text = wiki;
  if (bolds.length > 0) {
    obj.fmt = obj.fmt || {};
    obj.fmt.bold = bolds;
  }
  if (italics.length > 0) {
    obj.fmt = obj.fmt || {};
    obj.fmt.italic = italics;
  }
  return obj;
};
module.exports = formatting;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/04-sentence/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/04-sentence/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const helpers = __webpack_require__(/*! ../lib/helpers */ "./node_modules/wtf_wikipedia/src/lib/helpers.js");
const parseLinks = __webpack_require__(/*! ./links */ "./node_modules/wtf_wikipedia/src/04-sentence/links.js");
const parseFmt = __webpack_require__(/*! ./formatting */ "./node_modules/wtf_wikipedia/src/04-sentence/formatting.js");
const Sentence = __webpack_require__(/*! ./Sentence */ "./node_modules/wtf_wikipedia/src/04-sentence/Sentence.js");
// const templates = require('./templates');
const sentenceParser = __webpack_require__(/*! ./sentence-parser */ "./node_modules/wtf_wikipedia/src/04-sentence/sentence-parser.js");
const i18n = __webpack_require__(/*! ../data/i18n */ "./node_modules/wtf_wikipedia/src/data/i18n.js");
const cat_reg = new RegExp(
  '\\[\\[:?(' + i18n.categories.join('|') + '):[^\\]\\]]{2,80}\\]\\]',
  'gi'
);

//return only rendered text of wiki links
const resolve_links = function(line) {
  // categories, images, files
  line = line.replace(cat_reg, '');
  // [[Common links]]
  line = line.replace(/\[\[:?([^|]{1,80}?)\]\](\w{0,5})/g, '$1$2');
  // [[File:with|Size]]
  line = line.replace(/\[\[File:(.{2,80}?)\|([^\]]+?)\]\](\w{0,5})/g, '');
  // [[Replaced|Links]]
  line = line.replace(/\[\[:?(.{2,80}?)\|([^\]]+?)\]\](\w{0,5})/g, '$2$3');
  // External links
  line = line.replace(
    /\[(https?|news|ftp|mailto|gopher|irc):\/\/[^\]\| ]{4,1500}([\| ].*?)?\]/g,
    '$2'
  );
  return line;
};
// console.log(resolve_links("[http://www.whistler.ca www.whistler.ca]"))

function postprocess(line) {
  //fix links
  line = resolve_links(line);
  //remove empty parentheses (sometimes caused by removing templates)
  line = line.replace(/\([,;: ]*\)/g, '');
  //these semi-colons in parentheses are particularly troublesome
  line = line.replace(/\( *(; ?)+/g, '(');
  //dangling punctuation
  line = helpers.trim_whitespace(line);
  line = line.replace(/ +\.$/, '.');
  return line;
}

function oneSentence(str) {
  let obj = {
    text: postprocess(str)
  };
  //pull-out the [[links]]
  let links = parseLinks(str);
  if (links) {
    obj.links = links;
  }
  //pull-out the bolds and ''italics''
  obj = parseFmt(obj);
  //pull-out things like {{start date|...}}
  // obj = templates(obj);
  return new Sentence(obj);
}

//turn a text into an array of sentence objects
const parseSentences = function(wiki) {
  let sentences = sentenceParser(wiki);
  sentences = sentences.map(oneSentence);

  //remove :indented first line, as it is often a disambiguation
  if (sentences[0] && sentences[0].text() && sentences[0].text()[0] === ':') {
    sentences = sentences.slice(1);
  }
  return sentences;
};

//used for consistency with other class-definitions
const addSentences = function(wiki, data) {
  data.sentences = parseSentences(wiki);
  return wiki;
};

module.exports = {
  parseSentences: parseSentences,
  oneSentence: oneSentence,
  addSentences: addSentences
};


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/04-sentence/interwiki.js":
/*!*****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/04-sentence/interwiki.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const languages = __webpack_require__(/*! ../data/languages */ "./node_modules/wtf_wikipedia/src/data/languages.js");
//some colon symbols are valid links, like `America: That place`
//so we have to whitelist allowable interwiki links
const interwikis = [
  'wiktionary',
  'wikinews',
  'wikibooks',
  'wikiquote',
  'wikisource',
  'wikispecies',
  'wikiversity',
  'wikivoyage',
  'wikipedia',
  'wikimedia',
  'foundation',
  'meta',
  'metawikipedia',
  'w',
  'wikt',
  'n',
  'b',
  'q',
  's',
  'v',
  'voy',
  'wmf',
  'c',
  'm',
  'mw',
  'phab',
  'd',
];
let allowed = interwikis.reduce((h, wik) => {
  h[wik] = true;
  return h;
}, {});
//add language prefixes too..
Object.keys(languages).forEach((k) => allowed[k] = true);

//this is predictably very complicated.
// https://meta.wikimedia.org/wiki/Help:Interwiki_linking
const parseInterwiki = function(obj) {
  let str = obj.page || '';
  if (str.indexOf(':') !== -1) {
    let m = str.match(/^(.*):(.*)/);
    if (m === null) {
      return obj;
    }
    let site = m[1] || '';
    site = site.toLowerCase();
    //only allow interwikis to these specific places
    if (allowed.hasOwnProperty(site) === false) {
      return obj;
    }
    obj.wiki = site;
    obj.page = m[2];
  }
  return obj;
};
module.exports = parseInterwiki;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/04-sentence/links.js":
/*!*************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/04-sentence/links.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const helpers = require('../lib/helpers');
const parse_interwiki = __webpack_require__(/*! ./interwiki */ "./node_modules/wtf_wikipedia/src/04-sentence/interwiki.js");
const ignore_links = /^:?(category|catégorie|Kategorie|Categoría|Categoria|Categorie|Kategoria|تصنيف|image|file|image|fichier|datei|media):/i;
const external_link = /\[(https?|news|ftp|mailto|gopher|irc)(:\/\/[^\]\| ]{4,1500})([\| ].*?)?\]/g;
const link_reg = /\[\[(.{0,160}?)\]\]([a-z']+)?(\w{0,10})/gi; //allow dangling suffixes - "[[flanders]]'s"
// const i18n = require('../data/i18n');
// const isFile = new RegExp('(' + i18n.images.concat(i18n.files).join('|') + '):', 'i');

const external_links = function(links, str) {
  str.replace(external_link, function(all, protocol, link, text) {
    text = text || '';
    links.push({
      type: 'external',
      site: protocol + link,
      text: text.trim()
    });
    return text;
  });
  return links;
};

const internal_links = function(links, str) {
  //regular links
  str.replace(link_reg, function(_, s, apostrophe) {
    var txt = null;
    //make a copy of original
    var link = s;
    if (s.match(/\|/)) {
      //replacement link [[link|text]]
      s = s.replace(/\[\[(.{2,80}?)\]\](\w{0,10})/g, '$1$2'); //remove ['s and keep suffix
      link = s.replace(/(.{2,60})\|.{0,200}/, '$1'); //replaced links
      txt = s.replace(/.{2,60}?\|/, '');
      //handle funky case of [[toronto|]]
      if (txt === null && link.match(/\|$/)) {
        link = link.replace(/\|$/, '');
        txt = link;
      }
    }
    //kill off non-wikipedia namespaces
    if (link.match(ignore_links)) {
      return s;
    }
    //kill off just these just-anchor links [[#history]]
    if (link.match(/^#/i)) {
      return s;
    }
    //remove anchors from end [[toronto#history]]
    var obj = {
      page: link,
    };
    obj.page = obj.page.replace(/#(.*)/, (a, b) => {
      obj.anchor = b;
      return '';
    });
    //grab any fr:Paris parts
    obj = parse_interwiki(obj);
    if (txt !== null && txt !== obj.page) {
      obj.text = txt;
    }
    //finally, support [[link]]'s apostrophe
    if (apostrophe === '\'s') {
      obj.text = obj.text || obj.page;
      obj.text += apostrophe;
    }

    //titlecase it, if necessary
    if (obj.page && /^[A-Z]/.test(obj.page) === false) {
      if (!obj.text) {
        obj.text = obj.page;
      }
      obj.page = obj.page.charAt(0).toUpperCase() + obj.page.substring(1);
    }
    links.push(obj);
    return s;
  });
  return links;
};

//grab an array of internal links in the text
const parse_links = function(str) {
  let links = [];
  //first, parse external links
  links = external_links(links, str);
  //internal links
  links = internal_links(links, str);

  if (links.length === 0) {
    return undefined;
  }
  return links;
};
module.exports = parse_links;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/04-sentence/sentence-parser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/04-sentence/sentence-parser.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//split text into sentences, using regex
//@spencermountain MIT

//(Rule-based sentence boundary segmentation) - chop given text into its proper sentences.
// Ignore periods/questions/exclamations used in acronyms/abbreviations/numbers, etc.
// @spencermountain 2015 MIT
const abbreviations = __webpack_require__(/*! ../data/abbreviations */ "./node_modules/wtf_wikipedia/src/data/abbreviations.js");
const abbrev_reg = new RegExp('(^| )(' + abbreviations.join('|') + ')[.!?] ?$', 'i');
const acronym_reg = new RegExp('[ |.][A-Z].? +?$', 'i');
const elipses_reg = new RegExp('\\.\\.\\.* +?$');
const hasWord = new RegExp('[a-z][a-z]', 'i');

//turn a nested array into one array
const flatten = function(arr) {
  let all = [];
  arr.forEach(function(a) {
    all = all.concat(a);
  });
  return all;
};

const naiive_split = function(text) {
  //first, split by newline
  let splits = text.split(/(\n+)/);
  splits = splits.filter(s => s.match(/\S/));
  //split by period, question-mark, and exclamation-mark
  splits = splits.map(function(str) {
    return str.split(/(\S.+?[.!?]"?)(?=\s+|$)/g);
  });
  return flatten(splits);
};

// if this looks like a period within a wikipedia link, return false
const isBalanced = function(str) {
  str = str || '';
  const open = str.split(/\[\[/) || [];
  const closed = str.split(/\]\]/) || [];
  if (open.length > closed.length) {
    return false;
  }
  //make sure quotes are closed too
  const quotes = str.match(/"/g);
  if (quotes && quotes.length % 2 !== 0 && str.length < 900) {
    return false;
  }
  return true;
};

const sentence_parser = function(text) {
  let sentences = [];
  //first do a greedy-split..
  let chunks = [];
  //ensure it 'smells like' a sentence
  if (!text || typeof text !== 'string' || !text.match(/\w/)) {
    return sentences;
  }
  // This was the splitter regex updated to fix quoted punctuation marks.
  // let splits = text.split(/(\S.+?[.\?!])(?=\s+|$|")/g);
  // todo: look for side effects in this regex replacement:
  let splits = naiive_split(text);
  //filter-out the grap ones
  for (let i = 0; i < splits.length; i++) {
    let s = splits[i];
    if (!s || s === '') {
      continue;
    }
    //this is meaningful whitespace
    if (!s.match(/\S/)) {
      //add it to the last one
      if (chunks[chunks.length - 1]) {
        chunks[chunks.length - 1] += s;
        continue;
      } else if (splits[i + 1]) {
        //add it to the next one
        splits[i + 1] = s + splits[i + 1];
        continue;
      }
    }
    chunks.push(s);
  }

  //detection of non-sentence chunks
  const isSentence = function(hmm) {
    if (hmm.match(abbrev_reg) || hmm.match(acronym_reg) || hmm.match(elipses_reg)) {
      return false;
    }
    //too short? - no consecutive letters
    if (hasWord.test(hmm) === false) {
      return false;
    }
    if (!isBalanced(hmm)) {
      return false;
    }
    return true;
  };

  //loop through these chunks, and join the non-sentence chunks back together..
  for (let i = 0; i < chunks.length; i++) {
    //should this chunk be combined with the next one?
    if (chunks[i + 1] && !isSentence(chunks[i])) {
      chunks[i + 1] = chunks[i] + (chunks[i + 1] || ''); //.replace(/ +/g, ' ');
    } else if (chunks[i] && chunks[i].length > 0) {
      //this chunk is a proper sentence..
      sentences.push(chunks[i]);
      chunks[i] = '';
    }
  }
  //if we never got a sentence, return the given text
  if (sentences.length === 0) {
    return [text];
  }
  return sentences;
};

module.exports = sentence_parser;
// console.log(sentence_parser('Tony is nice. He lives in Japan.').length === 2);


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/04-sentence/toHtml.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/04-sentence/toHtml.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const smartReplace = __webpack_require__(/*! ../lib/smartReplace */ "./node_modules/wtf_wikipedia/src/lib/smartReplace.js");
const helpers = __webpack_require__(/*! ../lib/helpers */ "./node_modules/wtf_wikipedia/src/lib/helpers.js");
const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");

const defaults = {
  links: true,
  formatting: true,
};
// create links, bold, italic in html
const doSentence = function(sentence, options) {
  options = setDefaults(options, defaults);
  let text = sentence.text();
  //turn links into <a href>
  if (options.links === true) {
    sentence.links().forEach((link) => {
      let href = '';
      let classNames = 'link';
      if (link.site) {
        //use an external link
        href = link.site;
        classNames += ' external';
      } else {
        //otherwise, make it a relative internal link
        href = helpers.capitalise(link.page);
        href = './' + href.replace(/ /g, '_');
        //add anchor
        if (link.anchor) {
          href += `#${link.anchor}`;
        }
      }
      let str = link.text || link.page;
      let tag = `<a class="${classNames}" href="${href}">${str}</a>`;
      text = smartReplace(text, str, tag);
    });
  }
  if (options.formatting === true) {
    //support bolds
    sentence.bold().forEach((str) => {
      let tag = '<b>' + str + '</b>';
      text = smartReplace(text, str, tag);
    });
    //do italics
    sentence.italic().forEach((str) => {
      let tag = '<i>' + str + '</i>';
      text = smartReplace(text, str, tag);
    });
  }
  return '<span class="sentence">' + text + '</span>';
};
module.exports = doSentence;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/04-sentence/toJson.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/04-sentence/toJson.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const defaults = {
  text: true,
  links: true,
  formatting: true,
  dates: true,
};

const toJSON = function(s, options) {
  options = setDefaults(options, defaults);
  let data = {};
  if (options.text) {
    data.text = s.plaintext();
  }
  if (options.links && s.links().length > 0) {
    data.links = s.links();
  }
  if (options.formatting && s.data.fmt) {
    data.formatting = s.data.fmt;
  }
  if (options.dates && s.data.dates !== undefined) {
    data.dates = s.data.dates;
  }
  return data;
};
module.exports = toJSON;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/04-sentence/toLatex.js":
/*!***************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/04-sentence/toLatex.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const smartReplace = __webpack_require__(/*! ../lib/smartReplace */ "./node_modules/wtf_wikipedia/src/lib/smartReplace.js");
const helpers = __webpack_require__(/*! ../lib/helpers */ "./node_modules/wtf_wikipedia/src/lib/helpers.js");
const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");

const defaults = {
  links: true,
  formatting: true,
};
// create links, bold, italic in html
const toLatex = function(sentence, options ) {
  options = setDefaults(options, defaults);
  let text = sentence.plaintext();
  //turn links back into links
  if (options.links === true && sentence.links().length > 0) {
    sentence.links().forEach((link) => {
      let href = '';
      if (link.site) {
        //use an external link
        href = link.site;
      } else {
        //otherwise, make it a relative internal link
        href = helpers.capitalise(link.page);
        href = './' + href.replace(/ /g, '_');
        //add anchor
        if (link.anchor) {
          href += `#${link.anchor}`;
        }
      }
      let str = link.text || link.page;
      let tag = '\\href{' + href + '}{' + str + '}';
      text = smartReplace(text, str, tag);
    });
  }
  if (options.formatting === true) {
    if (sentence.data.fmt) {
      if (sentence.data.fmt.bold) {
        sentence.data.fmt.bold.forEach((str) => {
          let tag = '\\textbf{' + str + '}';
          text = smartReplace(text, str, tag);
        });
      }
      if (sentence.data.fmt.italic) {
        sentence.data.fmt.italic.forEach((str) => {
          let tag = '\\textit{' + str + '}';
          text = smartReplace(text, str, tag);
        });
      }
    }
  }
  return text;
};
module.exports = toLatex;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/04-sentence/toMarkdown.js":
/*!******************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/04-sentence/toMarkdown.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const smartReplace = __webpack_require__(/*! ../lib/smartReplace */ "./node_modules/wtf_wikipedia/src/lib/smartReplace.js");
const helpers = __webpack_require__(/*! ../lib/helpers */ "./node_modules/wtf_wikipedia/src/lib/helpers.js");
const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");

const defaults = {
  links: true,
  formatting: true,
};
// add `[text](href)` to the text
const doLink = function(md, link) {
  let href = '';
  //if it's an external link, we good
  if (link.site) {
    href = link.site;
  } else {
    //otherwise, make it a relative internal link
    href = helpers.capitalise(link.page);
    href = './' + href.replace(/ /g, '_');
    //add anchor
    if (link.anchor) {
      href += `#${link.anchor}`;
    }
  }
  let str = link.text || link.page;
  let mdLink = '[' + str + '](' + href + ')';
  md = smartReplace(md, str, mdLink);
  return md;
};

//create links, bold, italic in markdown
const toMarkdown = (sentence, options) => {
  options = setDefaults(options, defaults);
  let md = sentence.text();
  //turn links back into links
  if (options.links === true) {
    sentence.links().forEach((link) => {
      md = doLink(md, link);
    });
  }
  //turn bolds into **bold**
  if (options.formatting === true) {
    sentence.bold().forEach((b) => {
      md = smartReplace(md, b, '**' + b + '**');
    });
    //support *italics*
    sentence.italic().forEach((i) => {
      md = smartReplace(md, i, '*' + i + '*');
    });
  }
  return md;
};
module.exports = toMarkdown;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/data/abbreviations.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/data/abbreviations.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//these are used for the sentence-splitter
module.exports = [
  'jr',
  'mr',
  'mrs',
  'ms',
  'dr',
  'prof',
  'sr',
  'sen',
  'corp',
  'calif',
  'rep',
  'gov',
  'atty',
  'supt',
  'det',
  'rev',
  'col',
  'gen',
  'lt',
  'cmdr',
  'adm',
  'capt',
  'sgt',
  'cpl',
  'maj',
  'dept',
  'univ',
  'assn',
  'bros',
  'inc',
  'ltd',
  'co',
  'corp',
  'arc',
  'al',
  'ave',
  'blvd',
  'cl',
  'ct',
  'cres',
  'exp',
  'rd',
  'st',
  'dist',
  'mt',
  'ft',
  'fy',
  'hwy',
  'la',
  'pd',
  'pl',
  'plz',
  'tce',
  'Ala',
  'Ariz',
  'Ark',
  'Cal',
  'Calif',
  'Col',
  'Colo',
  'Conn',
  'Del',
  'Fed',
  'Fla',
  'Ga',
  'Ida',
  'Id',
  'Ill',
  'Ind',
  'Ia',
  'Kan',
  'Kans',
  'Ken',
  'Ky',
  'La',
  'Me',
  'Md',
  'Mass',
  'Mich',
  'Minn',
  'Miss',
  'Mo',
  'Mont',
  'Neb',
  'Nebr',
  'Nev',
  'Mex',
  'Okla',
  'Ok',
  'Ore',
  'Penna',
  'Penn',
  'Pa',
  'Dak',
  'Tenn',
  'Tex',
  'Ut',
  'Vt',
  'Va',
  'Wash',
  'Wis',
  'Wisc',
  'Wy',
  'Wyo',
  'USAFA',
  'Alta',
  'Ont',
  'QuÔøΩ',
  'Sask',
  'Yuk',
  'jan',
  'feb',
  'mar',
  'apr',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
  'sept',
  'vs',
  'etc',
  'esp',
  'llb',
  'md',
  'bl',
  'phd',
  'ma',
  'ba',
  'miss',
  'misses',
  'mister',
  'sir',
  'esq',
  'mstr',
  'lit',
  'fl',
  'ex',
  'eg',
  'sep',
  'sept',
  '..'
];


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/data/i18n.js":
/*!*****************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/data/i18n.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// wikipedia special terms lifted and augmented from parsoid parser april 2015
// (not even close to being complete)
let i18n = {
  files: [
    'файл',
    'fitxer',
    'soubor',
    'datei',
    'file',
    'archivo',
    'پرونده',
    'tiedosto',
    'mynd',
    'su\'wret',
    'fichier',
    'bestand',
    'датотека',
    'dosya',
    'fil'
  ],
  images: ['image'],
  templates: [
    'шаблён',
    'plantilla',
    'šablona',
    'vorlage',
    'template',
    'الگو',
    'malline',
    'snið',
    'shablon',
    'modèle',
    'sjabloon',
    'шаблон',
    'şablon'
  ],
  categories: [
    'катэгорыя',
    'categoria',
    'kategorie',
    'category',
    'categoría',
    'رده',
    'luokka',
    'flokkur',
    'kategoriya',
    'catégorie',
    'categorie',
    'категорија',
    'kategori',
    'kategoria',
    'تصنيف'
  ],
  redirects: [
    'перанакіраваньне',
    'redirect',
    'přesměruj',
    'weiterleitung',
    'redirección',
    'redireccion',
    'تغییر_مسیر',
    'تغییرمسیر',
    'ohjaus',
    'uudelleenohjaus',
    'tilvísun',
    'aýdaw',
    'айдау',
    'redirection',
    'doorverwijzing',
    'преусмери',
    'преусмјери',
    'yönlendi̇rme',
    'yönlendi̇r',
    '重定向',
    'redirección',
    'redireccion',
    '重定向',
    'yönlendirm?e?',
    'تغییر_مسیر',
    'تغییرمسیر',
    'перанакіраваньне',
    'yönlendirme'
  ],
  specials: [
    'спэцыяльныя',
    'especial',
    'speciální',
    'spezial',
    'special',
    'ویژه',
    'toiminnot',
    'kerfissíða',
    'arnawlı',
    'spécial',
    'speciaal',
    'посебно',
    'özel'
  ],
  users: [
    'удзельнік',
    'usuari',
    'uživatel',
    'benutzer',
    'user',
    'usuario',
    'کاربر',
    'käyttäjä',
    'notandi',
    'paydalanıwshı',
    'utilisateur',
    'gebruiker',
    'корисник',
    'kullanıcı'
  ],
  disambigs: [
    'disambig', //en
    'disambiguation', //en
    'dab', //en
    'disamb', //en
    'begriffsklärung', //de
    'ujednoznacznienie', //pl
    'doorverwijspagina', //nl
    '消歧义', //zh
    'desambiguación', //es
    'dubbelsinnig', //af
    'disambigua', //it
    'desambiguação', //pt
    'homonymie', //fr
    'неоднозначность', //ru
    'anlam ayrımı' //tr
  ],
  infoboxes: [
    'infobox',
    'ficha',
    'канадский',
    'inligtingskas',
    'inligtingskas3', //af
    'لغة',
    'bilgi kutusu', //tr
    'yerleşim bilgi kutusu',
    'infoboks' //nn, no
  ],
  sources: [
    //blacklist these headings, as they're not plain-text
    'references',
    'see also',
    'external links',
    'further reading',
    'notes et références',
    'voir aussi',
    'liens externes'
  ]
};

let dictionary = {};
Object.keys(i18n).forEach(k => {
  i18n[k].forEach(w => {
    dictionary[w] = true;
  });
});
i18n.dictionary = dictionary;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/data/languages.js":
/*!**********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/data/languages.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  aa: {
    english_title: 'Afar',
    direction: 'ltr',
    local_title: 'Afar'
  },
  ab: {
    english_title: 'Abkhazian',
    direction: 'ltr',
    local_title: 'Аҧсуа'
  },
  af: {
    english_title: 'Afrikaans',
    direction: 'ltr',
    local_title: 'Afrikaans'
  },
  ak: {
    english_title: 'Akan',
    direction: 'ltr',
    local_title: 'Akana'
  },
  als: {
    english_title: 'Alemannic',
    direction: 'ltr',
    local_title: 'Alemannisch'
  },
  am: {
    english_title: 'Amharic',
    direction: 'ltr',
    local_title: 'አማርኛ'
  },
  an: {
    english_title: 'Aragonese',
    direction: 'ltr',
    local_title: 'Aragonés'
  },
  ang: {
    english_title: 'Anglo-Saxon',
    direction: 'ltr',
    local_title: 'Englisc'
  },
  ar: {
    english_title: 'Arabic',
    direction: 'rtl',
    local_title: 'العربية'
  },
  arc: {
    english_title: 'Aramaic',
    direction: 'rtl',
    local_title: 'ܣܘܪܬ'
  },
  as: {
    english_title: 'Assamese',
    direction: 'ltr',
    local_title: 'অসমীয়া'
  },
  ast: {
    english_title: 'Asturian',
    direction: 'ltr',
    local_title: 'Asturianu'
  },
  av: {
    english_title: 'Avar',
    direction: 'ltr',
    local_title: 'Авар'
  },
  ay: {
    english_title: 'Aymara',
    direction: 'ltr',
    local_title: 'Aymar'
  },
  az: {
    english_title: 'Azerbaijani',
    direction: 'ltr',
    local_title: 'Azərbaycanca'
  },
  ba: {
    english_title: 'Bashkir',
    direction: 'ltr',
    local_title: 'Башҡорт'
  },
  bar: {
    english_title: 'Bavarian',
    direction: 'ltr',
    local_title: 'Boarisch'
  },
  'bat-smg': {
    english_title: 'Samogitian',
    direction: 'ltr',
    local_title: 'Žemaitėška'
  },
  bcl: {
    english_title: 'Bikol',
    direction: 'ltr',
    local_title: 'Bikol'
  },
  be: {
    english_title: 'Belarusian',
    direction: 'ltr',
    local_title: 'Беларуская'
  },
  'be-x-old': {
    english_title: 'Belarusian',
    direction: '(Taraškievica)',
    local_title: 'ltr'
  },
  bg: {
    english_title: 'Bulgarian',
    direction: 'ltr',
    local_title: 'Български'
  },
  bh: {
    english_title: 'Bihari',
    direction: 'ltr',
    local_title: 'भोजपुरी'
  },
  bi: {
    english_title: 'Bislama',
    direction: 'ltr',
    local_title: 'Bislama'
  },
  bm: {
    english_title: 'Bambara',
    direction: 'ltr',
    local_title: 'Bamanankan'
  },
  bn: {
    english_title: 'Bengali',
    direction: 'ltr',
    local_title: 'বাংলা'
  },
  bo: {
    english_title: 'Tibetan',
    direction: 'ltr',
    local_title: 'བོད་ཡིག'
  },
  bpy: {
    english_title: 'Bishnupriya',
    direction: 'Manipuri',
    local_title: 'ltr'
  },
  br: {
    english_title: 'Breton',
    direction: 'ltr',
    local_title: 'Brezhoneg'
  },
  bs: {
    english_title: 'Bosnian',
    direction: 'ltr',
    local_title: 'Bosanski'
  },
  bug: {
    english_title: 'Buginese',
    direction: 'ltr',
    local_title: 'ᨅᨔ'
  },
  bxr: {
    english_title: 'Buriat',
    direction: '(Russia)',
    local_title: 'ltr'
  },
  ca: {
    english_title: 'Catalan',
    direction: 'ltr',
    local_title: 'Català'
  },
  cdo: {
    english_title: 'Min',
    direction: 'Dong',
    local_title: 'Chinese'
  },
  ce: {
    english_title: 'Chechen',
    direction: 'ltr',
    local_title: 'Нохчийн'
  },
  ceb: {
    english_title: 'Cebuano',
    direction: 'ltr',
    local_title: 'Sinugboanong'
  },
  ch: {
    english_title: 'Chamorro',
    direction: 'ltr',
    local_title: 'Chamoru'
  },
  cho: {
    english_title: 'Choctaw',
    direction: 'ltr',
    local_title: 'Choctaw'
  },
  chr: {
    english_title: 'Cherokee',
    direction: 'ltr',
    local_title: 'ᏣᎳᎩ'
  },
  chy: {
    english_title: 'Cheyenne',
    direction: 'ltr',
    local_title: 'Tsetsêhestâhese'
  },
  co: {
    english_title: 'Corsican',
    direction: 'ltr',
    local_title: 'Corsu'
  },
  cr: {
    english_title: 'Cree',
    direction: 'ltr',
    local_title: 'Nehiyaw'
  },
  cs: {
    english_title: 'Czech',
    direction: 'ltr',
    local_title: 'Česky'
  },
  csb: {
    english_title: 'Kashubian',
    direction: 'ltr',
    local_title: 'Kaszëbsczi'
  },
  cu: {
    english_title: 'Old',
    direction: 'Church',
    local_title: 'Slavonic'
  },
  cv: {
    english_title: 'Chuvash',
    direction: 'ltr',
    local_title: 'Чăваш'
  },
  cy: {
    english_title: 'Welsh',
    direction: 'ltr',
    local_title: 'Cymraeg'
  },
  da: {
    english_title: 'Danish',
    direction: 'ltr',
    local_title: 'Dansk'
  },
  de: {
    english_title: 'German',
    direction: 'ltr',
    local_title: 'Deutsch'
  },
  diq: {
    english_title: 'Dimli',
    direction: 'ltr',
    local_title: 'Zazaki'
  },
  dsb: {
    english_title: 'Lower',
    direction: 'Sorbian',
    local_title: 'ltr'
  },
  dv: {
    english_title: 'Divehi',
    direction: 'rtl',
    local_title: 'ދިވެހިބަސް'
  },
  dz: {
    english_title: 'Dzongkha',
    direction: 'ltr',
    local_title: 'ཇོང་ཁ'
  },
  ee: {
    english_title: 'Ewe',
    direction: 'ltr',
    local_title: 'Ɛʋɛ'
  },
  far: {
    english_title: 'Farsi',
    direction: 'ltr',
    local_title: 'فارسی'
  },
  el: {
    english_title: 'Greek',
    direction: 'ltr',
    local_title: 'Ελληνικά'
  },
  en: {
    english_title: 'English',
    direction: 'ltr',
    local_title: 'English'
  },
  eo: {
    english_title: 'Esperanto',
    direction: 'ltr',
    local_title: 'Esperanto'
  },
  es: {
    english_title: 'Spanish',
    direction: 'ltr',
    local_title: 'Español'
  },
  et: {
    english_title: 'Estonian',
    direction: 'ltr',
    local_title: 'Eesti'
  },
  eu: {
    english_title: 'Basque',
    direction: 'ltr',
    local_title: 'Euskara'
  },
  ext: {
    english_title: 'Extremaduran',
    direction: 'ltr',
    local_title: 'Estremeñu'
  },
  ff: {
    english_title: 'Peul',
    direction: 'ltr',
    local_title: 'Fulfulde'
  },
  fi: {
    english_title: 'Finnish',
    direction: 'ltr',
    local_title: 'Suomi'
  },
  'fiu-vro': {
    english_title: 'Võro',
    direction: 'ltr',
    local_title: 'Võro'
  },
  fj: {
    english_title: 'Fijian',
    direction: 'ltr',
    local_title: 'Na'
  },
  fo: {
    english_title: 'Faroese',
    direction: 'ltr',
    local_title: 'Føroyskt'
  },
  fr: {
    english_title: 'French',
    direction: 'ltr',
    local_title: 'Français'
  },
  frp: {
    english_title: 'Arpitan',
    direction: 'ltr',
    local_title: 'Arpitan'
  },
  fur: {
    english_title: 'Friulian',
    direction: 'ltr',
    local_title: 'Furlan'
  },
  fy: {
    english_title: 'West',
    direction: 'Frisian',
    local_title: 'ltr'
  },
  ga: {
    english_title: 'Irish',
    direction: 'ltr',
    local_title: 'Gaeilge'
  },
  gan: {
    english_title: 'Gan',
    direction: 'Chinese',
    local_title: 'ltr'
  },
  gd: {
    english_title: 'Scottish',
    direction: 'Gaelic',
    local_title: 'ltr'
  },
  gil: {
    english_title: 'Gilbertese',
    direction: 'ltr',
    local_title: 'Taetae'
  },
  gl: {
    english_title: 'Galician',
    direction: 'ltr',
    local_title: 'Galego'
  },
  gn: {
    english_title: 'Guarani',
    direction: 'ltr',
    local_title: "Avañe'ẽ"
  },
  got: {
    english_title: 'Gothic',
    direction: 'ltr',
    local_title: 'gutisk'
  },
  gu: {
    english_title: 'Gujarati',
    direction: 'ltr',
    local_title: 'ગુજરાતી'
  },
  gv: {
    english_title: 'Manx',
    direction: 'ltr',
    local_title: 'Gaelg'
  },
  ha: {
    english_title: 'Hausa',
    direction: 'rtl',
    local_title: 'هَوُسَ'
  },
  hak: {
    english_title: 'Hakka',
    direction: 'Chinese',
    local_title: 'ltr'
  },
  haw: {
    english_title: 'Hawaiian',
    direction: 'ltr',
    local_title: 'Hawai`i'
  },
  he: {
    english_title: 'Hebrew',
    direction: 'rtl',
    local_title: 'עברית'
  },
  hi: {
    english_title: 'Hindi',
    direction: 'ltr',
    local_title: 'हिन्दी'
  },
  ho: {
    english_title: 'Hiri',
    direction: 'Motu',
    local_title: 'ltr'
  },
  hr: {
    english_title: 'Croatian',
    direction: 'ltr',
    local_title: 'Hrvatski'
  },
  ht: {
    english_title: 'Haitian',
    direction: 'ltr',
    local_title: 'Krèyol'
  },
  hu: {
    english_title: 'Hungarian',
    direction: 'ltr',
    local_title: 'Magyar'
  },
  hy: {
    english_title: 'Armenian',
    direction: 'ltr',
    local_title: 'Հայերեն'
  },
  hz: {
    english_title: 'Herero',
    direction: 'ltr',
    local_title: 'Otsiherero'
  },
  ia: {
    english_title: 'Interlingua',
    direction: 'ltr',
    local_title: 'Interlingua'
  },
  id: {
    english_title: 'Indonesian',
    direction: 'ltr',
    local_title: 'Bahasa'
  },
  ie: {
    english_title: 'Interlingue',
    direction: 'ltr',
    local_title: 'Interlingue'
  },
  ig: {
    english_title: 'Igbo',
    direction: 'ltr',
    local_title: 'Igbo'
  },
  ii: {
    english_title: 'Sichuan',
    direction: 'Yi',
    local_title: 'ltr'
  },
  ik: {
    english_title: 'Inupiak',
    direction: 'ltr',
    local_title: 'Iñupiak'
  },
  ilo: {
    english_title: 'Ilokano',
    direction: 'ltr',
    local_title: 'Ilokano'
  },
  io: {
    english_title: 'Ido',
    direction: 'ltr',
    local_title: 'Ido'
  },
  is: {
    english_title: 'Icelandic',
    direction: 'ltr',
    local_title: 'Íslenska'
  },
  it: {
    english_title: 'Italian',
    direction: 'ltr',
    local_title: 'Italiano'
  },
  iu: {
    english_title: 'Inuktitut',
    direction: 'ltr',
    local_title: 'ᐃᓄᒃᑎᑐᑦ'
  },
  ja: {
    english_title: 'Japanese',
    direction: 'ltr',
    local_title: '日本語'
  },
  jbo: {
    english_title: 'Lojban',
    direction: 'ltr',
    local_title: 'Lojban'
  },
  jv: {
    english_title: 'Javanese',
    direction: 'ltr',
    local_title: 'Basa'
  },
  ka: {
    english_title: 'Georgian',
    direction: 'ltr',
    local_title: 'ქართული'
  },
  kg: {
    english_title: 'Kongo',
    direction: 'ltr',
    local_title: 'KiKongo'
  },
  ki: {
    english_title: 'Kikuyu',
    direction: 'ltr',
    local_title: 'Gĩkũyũ'
  },
  kj: {
    english_title: 'Kuanyama',
    direction: 'ltr',
    local_title: 'Kuanyama'
  },
  kk: {
    english_title: 'Kazakh',
    direction: 'ltr',
    local_title: 'Қазақша'
  },
  kl: {
    english_title: 'Greenlandic',
    direction: 'ltr',
    local_title: 'Kalaallisut'
  },
  km: {
    english_title: 'Cambodian',
    direction: 'ltr',
    local_title: 'ភាសាខ្មែរ'
  },
  kn: {
    english_title: 'Kannada',
    direction: 'ltr',
    local_title: 'ಕನ್ನಡ'
  },
  khw: {
    english_title: 'Khowar',
    direction: 'rtl',
    local_title: 'کھوار'
  },
  ko: {
    english_title: 'Korean',
    direction: 'ltr',
    local_title: '한국어'
  },
  kr: {
    english_title: 'Kanuri',
    direction: 'ltr',
    local_title: 'Kanuri'
  },
  ks: {
    english_title: 'Kashmiri',
    direction: 'rtl',
    local_title: 'कश्मीरी'
  },
  ksh: {
    english_title: 'Ripuarian',
    direction: 'ltr',
    local_title: 'Ripoarisch'
  },
  ku: {
    english_title: 'Kurdish',
    direction: 'rtl',
    local_title: 'Kurdî'
  },
  kv: {
    english_title: 'Komi',
    direction: 'ltr',
    local_title: 'Коми'
  },
  kw: {
    english_title: 'Cornish',
    direction: 'ltr',
    local_title: 'Kernewek'
  },
  ky: {
    english_title: 'Kirghiz',
    direction: 'ltr',
    local_title: 'Kırgızca'
  },
  la: {
    english_title: 'Latin',
    direction: 'ltr',
    local_title: 'Latina'
  },
  lad: {
    english_title: 'Ladino',
    direction: 'ltr',
    local_title: 'Dzhudezmo'
  },
  lan: {
    english_title: 'Lango',
    direction: 'ltr',
    local_title: 'Leb'
  },
  lb: {
    english_title: 'Luxembourgish',
    direction: 'ltr',
    local_title: 'Lëtzebuergesch'
  },
  lg: {
    english_title: 'Ganda',
    direction: 'ltr',
    local_title: 'Luganda'
  },
  li: {
    english_title: 'Limburgian',
    direction: 'ltr',
    local_title: 'Limburgs'
  },
  lij: {
    english_title: 'Ligurian',
    direction: 'ltr',
    local_title: 'Líguru'
  },
  lmo: {
    english_title: 'Lombard',
    direction: 'ltr',
    local_title: 'Lumbaart'
  },
  ln: {
    english_title: 'Lingala',
    direction: 'ltr',
    local_title: 'Lingála'
  },
  lo: {
    english_title: 'Laotian',
    direction: 'ltr',
    local_title: 'ລາວ'
  },
  lt: {
    english_title: 'Lithuanian',
    direction: 'ltr',
    local_title: 'Lietuvių'
  },
  lv: {
    english_title: 'Latvian',
    direction: 'ltr',
    local_title: 'Latviešu'
  },
  'map-bms': {
    english_title: 'Banyumasan',
    direction: 'ltr',
    local_title: 'Basa'
  },
  mg: {
    english_title: 'Malagasy',
    direction: 'ltr',
    local_title: 'Malagasy'
  },
  man: {
    english_title: 'Mandarin',
    direction: 'ltr',
    local_title: '官話'
  },
  mh: {
    english_title: 'Marshallese',
    direction: 'ltr',
    local_title: 'Kajin'
  },
  mi: {
    english_title: 'Maori',
    direction: 'ltr',
    local_title: 'Māori'
  },
  min: {
    english_title: 'Minangkabau',
    direction: 'ltr',
    local_title: 'Minangkabau'
  },
  mk: {
    english_title: 'Macedonian',
    direction: 'ltr',
    local_title: 'Македонски'
  },
  ml: {
    english_title: 'Malayalam',
    direction: 'ltr',
    local_title: 'മലയാളം'
  },
  mn: {
    english_title: 'Mongolian',
    direction: 'ltr',
    local_title: 'Монгол'
  },
  mo: {
    english_title: 'Moldovan',
    direction: 'ltr',
    local_title: 'Moldovenească'
  },
  mr: {
    english_title: 'Marathi',
    direction: 'ltr',
    local_title: 'मराठी'
  },
  ms: {
    english_title: 'Malay',
    direction: 'ltr',
    local_title: 'Bahasa'
  },
  mt: {
    english_title: 'Maltese',
    direction: 'ltr',
    local_title: 'bil-Malti'
  },
  mus: {
    english_title: 'Creek',
    direction: 'ltr',
    local_title: 'Muskogee'
  },
  my: {
    english_title: 'Burmese',
    direction: 'ltr',
    local_title: 'Myanmasa'
  },
  na: {
    english_title: 'Nauruan',
    direction: 'ltr',
    local_title: 'Dorerin'
  },
  nah: {
    english_title: 'Nahuatl',
    direction: 'ltr',
    local_title: 'Nahuatl'
  },
  nap: {
    english_title: 'Neapolitan',
    direction: 'ltr',
    local_title: 'Nnapulitano'
  },
  nd: {
    english_title: 'North',
    direction: 'Ndebele',
    local_title: 'ltr'
  },
  nds: {
    english_title: 'Low German',
    direction: 'ltr',
    local_title: 'Plattdüütsch'
  },
  'nds-nl': {
    english_title: 'Dutch',
    direction: 'Low',
    local_title: 'Saxon'
  },
  ne: {
    english_title: 'Nepali',
    direction: 'ltr',
    local_title: 'नेपाली'
  },
  new: {
    english_title: 'Newar',
    direction: 'ltr',
    local_title: 'नेपालभाषा'
  },
  ng: {
    english_title: 'Ndonga',
    direction: 'ltr',
    local_title: 'Oshiwambo'
  },
  nl: {
    english_title: 'Dutch',
    direction: 'ltr',
    local_title: 'Nederlands'
  },
  nn: {
    english_title: 'Norwegian',
    direction: 'Nynorsk',
    local_title: 'ltr'
  },
  no: {
    english_title: 'Norwegian',
    direction: 'ltr',
    local_title: 'Norsk'
  },
  nr: {
    english_title: 'South',
    direction: 'Ndebele',
    local_title: 'ltr'
  },
  nso: {
    english_title: 'Northern',
    direction: 'Sotho',
    local_title: 'ltr'
  },
  nrm: {
    english_title: 'Norman',
    direction: 'ltr',
    local_title: 'Nouormand'
  },
  nv: {
    english_title: 'Navajo',
    direction: 'ltr',
    local_title: 'Diné'
  },
  ny: {
    english_title: 'Chichewa',
    direction: 'ltr',
    local_title: 'Chi-Chewa'
  },
  oc: {
    english_title: 'Occitan',
    direction: 'ltr',
    local_title: 'Occitan'
  },
  oj: {
    english_title: 'Ojibwa',
    direction: 'ltr',
    local_title: 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
  },
  om: {
    english_title: 'Oromo',
    direction: 'ltr',
    local_title: 'Oromoo'
  },
  or: {
    english_title: 'Oriya',
    direction: 'ltr',
    local_title: 'ଓଡ଼ିଆ'
  },
  os: {
    english_title: 'Ossetian',
    direction: 'ltr',
    local_title: 'Иронау'
  },
  pa: {
    english_title: 'Panjabi',
    direction: 'ltr',
    local_title: 'ਪੰਜਾਬੀ'
  },
  pag: {
    english_title: 'Pangasinan',
    direction: 'ltr',
    local_title: 'Pangasinan'
  },
  pam: {
    english_title: 'Kapampangan',
    direction: 'ltr',
    local_title: 'Kapampangan'
  },
  pap: {
    english_title: 'Papiamentu',
    direction: 'ltr',
    local_title: 'Papiamentu'
  },
  pdc: {
    english_title: 'Pennsylvania',
    direction: 'German',
    local_title: 'ltr'
  },
  pi: {
    english_title: 'Pali',
    direction: 'ltr',
    local_title: 'Pāli'
  },
  pih: {
    english_title: 'Norfolk',
    direction: 'ltr',
    local_title: 'Norfuk'
  },
  pl: {
    english_title: 'Polish',
    direction: 'ltr',
    local_title: 'Polski'
  },
  pms: {
    english_title: 'Piedmontese',
    direction: 'ltr',
    local_title: 'Piemontèis'
  },
  ps: {
    english_title: 'Pashto',
    direction: 'rtl',
    local_title: 'پښتو'
  },
  pt: {
    english_title: 'Portuguese',
    direction: 'ltr',
    local_title: 'Português'
  },
  qu: {
    english_title: 'Quechua',
    direction: 'ltr',
    local_title: 'Runa'
  },
  rm: {
    english_title: 'Raeto',
    direction: 'Romance',
    local_title: 'ltr'
  },
  rmy: {
    english_title: 'Romani',
    direction: 'ltr',
    local_title: 'Romani'
  },
  rn: {
    english_title: 'Kirundi',
    direction: 'ltr',
    local_title: 'Kirundi'
  },
  ro: {
    english_title: 'Romanian',
    direction: 'ltr',
    local_title: 'Română'
  },
  'roa-rup': {
    english_title: 'Aromanian',
    direction: 'ltr',
    local_title: 'Armâneashti'
  },
  ru: {
    english_title: 'Russian',
    direction: 'ltr',
    local_title: 'Русский'
  },
  rw: {
    english_title: 'Rwandi',
    direction: 'ltr',
    local_title: 'Kinyarwandi'
  },
  sa: {
    english_title: 'Sanskrit',
    direction: 'ltr',
    local_title: 'संस्कृतम्'
  },
  sc: {
    english_title: 'Sardinian',
    direction: 'ltr',
    local_title: 'Sardu'
  },
  scn: {
    english_title: 'Sicilian',
    direction: 'ltr',
    local_title: 'Sicilianu'
  },
  sco: {
    english_title: 'Scots',
    direction: 'ltr',
    local_title: 'Scots'
  },
  sd: {
    english_title: 'Sindhi',
    direction: 'ltr',
    local_title: 'सिनधि'
  },
  se: {
    english_title: 'Northern',
    direction: 'Sami',
    local_title: 'ltr'
  },
  sg: {
    english_title: 'Sango',
    direction: 'ltr',
    local_title: 'Sängö'
  },
  sh: {
    english_title: 'Serbo-Croatian',
    direction: 'ltr',
    local_title: 'Srpskohrvatski'
  },
  si: {
    english_title: 'Sinhalese',
    direction: 'ltr',
    local_title: 'සිංහල'
  },
  simple: {
    english_title: 'Simple',
    direction: 'English',
    local_title: 'ltr'
  },
  sk: {
    english_title: 'Slovak',
    direction: 'ltr',
    local_title: 'Slovenčina'
  },
  sl: {
    english_title: 'Slovenian',
    direction: 'ltr',
    local_title: 'Slovenščina'
  },
  sm: {
    english_title: 'Samoan',
    direction: 'ltr',
    local_title: 'Gagana'
  },
  sn: {
    english_title: 'Shona',
    direction: 'ltr',
    local_title: 'chiShona'
  },
  so: {
    english_title: 'Somalia',
    direction: 'ltr',
    local_title: 'Soomaaliga'
  },
  sq: {
    english_title: 'Albanian',
    direction: 'ltr',
    local_title: 'Shqip'
  },
  sr: {
    english_title: 'Serbian',
    direction: 'ltr',
    local_title: 'Српски'
  },
  ss: {
    english_title: 'Swati',
    direction: 'ltr',
    local_title: 'SiSwati'
  },
  st: {
    english_title: 'Southern',
    direction: 'Sotho',
    local_title: 'ltr'
  },
  su: {
    english_title: 'Sundanese',
    direction: 'ltr',
    local_title: 'Basa'
  },
  sv: {
    english_title: 'Swedish',
    direction: 'ltr',
    local_title: 'Svenska'
  },
  sw: {
    english_title: 'Swahili',
    direction: 'ltr',
    local_title: 'Kiswahili'
  },
  ta: {
    english_title: 'Tamil',
    direction: 'ltr',
    local_title: 'தமிழ்'
  },
  te: {
    english_title: 'Telugu',
    direction: 'ltr',
    local_title: 'తెలుగు'
  },
  tet: {
    english_title: 'Tetum',
    direction: 'ltr',
    local_title: 'Tetun'
  },
  tg: {
    english_title: 'Tajik',
    direction: 'ltr',
    local_title: 'Тоҷикӣ'
  },
  th: {
    english_title: 'Thai',
    direction: 'ltr',
    local_title: 'ไทย'
  },
  ti: {
    english_title: 'Tigrinya',
    direction: 'ltr',
    local_title: 'ትግርኛ'
  },
  tk: {
    english_title: 'Turkmen',
    direction: 'ltr',
    local_title: 'Туркмен'
  },
  tl: {
    english_title: 'Tagalog',
    direction: 'ltr',
    local_title: 'Tagalog'
  },
  tlh: {
    english_title: 'Klingon',
    direction: 'ltr',
    local_title: 'tlhIngan-Hol'
  },
  tn: {
    english_title: 'Tswana',
    direction: 'ltr',
    local_title: 'Setswana'
  },
  to: {
    english_title: 'Tonga',
    direction: 'ltr',
    local_title: 'Lea'
  },
  tpi: {
    english_title: 'Tok',
    direction: 'Pisin',
    local_title: 'ltr'
  },
  tr: {
    english_title: 'Turkish',
    direction: 'ltr',
    local_title: 'Türkçe'
  },
  ts: {
    english_title: 'Tsonga',
    direction: 'ltr',
    local_title: 'Xitsonga'
  },
  tt: {
    english_title: 'Tatar',
    direction: 'ltr',
    local_title: 'Tatarça'
  },
  tum: {
    english_title: 'Tumbuka',
    direction: 'ltr',
    local_title: 'chiTumbuka'
  },
  tw: {
    english_title: 'Twi',
    direction: 'ltr',
    local_title: 'Twi'
  },
  ty: {
    english_title: 'Tahitian',
    direction: 'ltr',
    local_title: 'Reo'
  },
  udm: {
    english_title: 'Udmurt',
    direction: 'ltr',
    local_title: 'Удмурт'
  },
  ug: {
    english_title: 'Uyghur',
    direction: 'ltr',
    local_title: 'Uyƣurqə'
  },
  uk: {
    english_title: 'Ukrainian',
    direction: 'ltr',
    local_title: 'Українська'
  },
  ur: {
    english_title: 'Urdu',
    direction: 'rtl',
    local_title: 'اردو'
  },
  uz: {
    english_title: 'Uzbek',
    direction: 'ltr',
    local_title: 'Ўзбек'
  },
  ve: {
    english_title: 'Venda',
    direction: 'ltr',
    local_title: 'Tshivenḓa'
  },
  vi: {
    english_title: 'Vietnamese',
    direction: 'ltr',
    local_title: 'Việtnam'
  },
  vec: {
    english_title: 'Venetian',
    direction: 'ltr',
    local_title: 'Vèneto'
  },
  vls: {
    english_title: 'West',
    direction: 'Flemish',
    local_title: 'ltr'
  },
  vo: {
    english_title: 'Volapük',
    direction: 'ltr',
    local_title: 'Volapük'
  },
  wa: {
    english_title: 'Walloon',
    direction: 'ltr',
    local_title: 'Walon'
  },
  war: {
    english_title: 'Waray-Waray',
    direction: 'ltr',
    local_title: 'Winaray'
  },
  wo: {
    english_title: 'Wolof',
    direction: 'ltr',
    local_title: 'Wollof'
  },
  xal: {
    english_title: 'Kalmyk',
    direction: 'ltr',
    local_title: 'Хальмг'
  },
  xh: {
    english_title: 'Xhosa',
    direction: 'ltr',
    local_title: 'isiXhosa'
  },
  yi: {
    english_title: 'Yiddish',
    direction: 'rtl',
    local_title: 'ייִדיש'
  },
  yo: {
    english_title: 'Yoruba',
    direction: 'ltr',
    local_title: 'Yorùbá'
  },
  za: {
    english_title: 'Zhuang',
    direction: 'ltr',
    local_title: 'Cuengh'
  },
  zh: {
    english_title: 'Chinese',
    direction: 'ltr',
    local_title: '中文'
  },
  'zh-classical': {
    english_title: 'Classical',
    direction: 'Chinese',
    local_title: 'ltr'
  },
  'zh-min-nan': {
    english_title: 'Minnan',
    direction: 'ltr',
    local_title: 'Bân-lâm-gú'
  },
  'zh-yue': {
    english_title: 'Cantonese',
    direction: 'ltr',
    local_title: '粵語'
  },
  zu: {
    english_title: 'Zulu',
    direction: 'ltr',
    local_title: 'isiZulu'
  }
};


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/data/site_map.js":
/*!*********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/data/site_map.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//from https://en.wikipedia.org/w/api.php?action=sitematrix&format=json
const site_map = {
  aawiki: 'https://aa.wikipedia.org',
  aawikipedia: 'https://aa.wikipedia.org',
  aawiktionary: 'https://aa.wiktionary.org',
  aawikibooks: 'https://aa.wikibooks.org',
  abwiki: 'https://ab.wikipedia.org',
  abwikipedia: 'https://ab.wikipedia.org',
  abwiktionary: 'https://ab.wiktionary.org',
  acewiki: 'https://ace.wikipedia.org',
  acewikipedia: 'https://ace.wikipedia.org',
  adywiki: 'https://ady.wikipedia.org',
  adywikipedia: 'https://ady.wikipedia.org',
  afwiki: 'https://af.wikipedia.org',
  afwikipedia: 'https://af.wikipedia.org',
  afwiktionary: 'https://af.wiktionary.org',
  afwikibooks: 'https://af.wikibooks.org',
  afwikiquote: 'https://af.wikiquote.org',
  akwiki: 'https://ak.wikipedia.org',
  akwikipedia: 'https://ak.wikipedia.org',
  akwiktionary: 'https://ak.wiktionary.org',
  akwikibooks: 'https://ak.wikibooks.org',
  alswiki: 'https://als.wikipedia.org',
  alswikipedia: 'https://als.wikipedia.org',
  amwiki: 'https://am.wikipedia.org',
  amwikipedia: 'https://am.wikipedia.org',
  amwiktionary: 'https://am.wiktionary.org',
  amwikiquote: 'https://am.wikiquote.org',
  anwiki: 'https://an.wikipedia.org',
  anwikipedia: 'https://an.wikipedia.org',
  anwiktionary: 'https://an.wiktionary.org',
  angwiki: 'https://ang.wikipedia.org',
  angwikipedia: 'https://ang.wikipedia.org',
  angwiktionary: 'https://ang.wiktionary.org',
  angwikibooks: 'https://ang.wikibooks.org',
  angwikiquote: 'https://ang.wikiquote.org',
  angwikisource: 'https://ang.wikisource.org',
  arwiki: 'https://ar.wikipedia.org',
  arwikipedia: 'https://ar.wikipedia.org',
  arwiktionary: 'https://ar.wiktionary.org',
  arwikibooks: 'https://ar.wikibooks.org',
  arwikinews: 'https://ar.wikinews.org',
  arwikiquote: 'https://ar.wikiquote.org',
  arwikisource: 'https://ar.wikisource.org',
  arwikiversity: 'https://ar.wikiversity.org',
  arcwiki: 'https://arc.wikipedia.org',
  arcwikipedia: 'https://arc.wikipedia.org',
  arzwiki: 'https://arz.wikipedia.org',
  arzwikipedia: 'https://arz.wikipedia.org',
  aswiki: 'https://as.wikipedia.org',
  aswikipedia: 'https://as.wikipedia.org',
  aswiktionary: 'https://as.wiktionary.org',
  aswikibooks: 'https://as.wikibooks.org',
  aswikisource: 'https://as.wikisource.org',
  astwiki: 'https://ast.wikipedia.org',
  astwikipedia: 'https://ast.wikipedia.org',
  astwiktionary: 'https://ast.wiktionary.org',
  astwikibooks: 'https://ast.wikibooks.org',
  astwikiquote: 'https://ast.wikiquote.org',
  atjwiki: 'https://atj.wikipedia.org',
  atjwikipedia: 'https://atj.wikipedia.org',
  avwiki: 'https://av.wikipedia.org',
  avwikipedia: 'https://av.wikipedia.org',
  avwiktionary: 'https://av.wiktionary.org',
  aywiki: 'https://ay.wikipedia.org',
  aywikipedia: 'https://ay.wikipedia.org',
  aywiktionary: 'https://ay.wiktionary.org',
  aywikibooks: 'https://ay.wikibooks.org',
  azwiki: 'https://az.wikipedia.org',
  azwikipedia: 'https://az.wikipedia.org',
  azwiktionary: 'https://az.wiktionary.org',
  azwikibooks: 'https://az.wikibooks.org',
  azwikiquote: 'https://az.wikiquote.org',
  azwikisource: 'https://az.wikisource.org',
  azbwiki: 'https://azb.wikipedia.org',
  azbwikipedia: 'https://azb.wikipedia.org',
  bawiki: 'https://ba.wikipedia.org',
  bawikipedia: 'https://ba.wikipedia.org',
  bawikibooks: 'https://ba.wikibooks.org',
  barwiki: 'https://bar.wikipedia.org',
  barwikipedia: 'https://bar.wikipedia.org',
  bat_smgwiki: 'https://bat-smg.wikipedia.org',
  bat_smgwikipedia: 'https://bat-smg.wikipedia.org',
  bclwiki: 'https://bcl.wikipedia.org',
  bclwikipedia: 'https://bcl.wikipedia.org',
  bewiki: 'https://be.wikipedia.org',
  bewikipedia: 'https://be.wikipedia.org',
  bewiktionary: 'https://be.wiktionary.org',
  bewikibooks: 'https://be.wikibooks.org',
  bewikiquote: 'https://be.wikiquote.org',
  bewikisource: 'https://be.wikisource.org',
  be_x_oldwiki: 'https://be-tarask.wikipedia.org',
  be_x_oldwikipedia: 'https://be-tarask.wikipedia.org',
  bgwiki: 'https://bg.wikipedia.org',
  bgwikipedia: 'https://bg.wikipedia.org',
  bgwiktionary: 'https://bg.wiktionary.org',
  bgwikibooks: 'https://bg.wikibooks.org',
  bgwikinews: 'https://bg.wikinews.org',
  bgwikiquote: 'https://bg.wikiquote.org',
  bgwikisource: 'https://bg.wikisource.org',
  bhwiki: 'https://bh.wikipedia.org',
  bhwikipedia: 'https://bh.wikipedia.org',
  bhwiktionary: 'https://bh.wiktionary.org',
  biwiki: 'https://bi.wikipedia.org',
  biwikipedia: 'https://bi.wikipedia.org',
  biwiktionary: 'https://bi.wiktionary.org',
  biwikibooks: 'https://bi.wikibooks.org',
  bjnwiki: 'https://bjn.wikipedia.org',
  bjnwikipedia: 'https://bjn.wikipedia.org',
  bmwiki: 'https://bm.wikipedia.org',
  bmwikipedia: 'https://bm.wikipedia.org',
  bmwiktionary: 'https://bm.wiktionary.org',
  bmwikibooks: 'https://bm.wikibooks.org',
  bmwikiquote: 'https://bm.wikiquote.org',
  bnwiki: 'https://bn.wikipedia.org',
  bnwikipedia: 'https://bn.wikipedia.org',
  bnwiktionary: 'https://bn.wiktionary.org',
  bnwikibooks: 'https://bn.wikibooks.org',
  bnwikisource: 'https://bn.wikisource.org',
  bnwikivoyage: 'https://bn.wikivoyage.org',
  bowiki: 'https://bo.wikipedia.org',
  bowikipedia: 'https://bo.wikipedia.org',
  bowiktionary: 'https://bo.wiktionary.org',
  bowikibooks: 'https://bo.wikibooks.org',
  bpywiki: 'https://bpy.wikipedia.org',
  bpywikipedia: 'https://bpy.wikipedia.org',
  brwiki: 'https://br.wikipedia.org',
  brwikipedia: 'https://br.wikipedia.org',
  brwiktionary: 'https://br.wiktionary.org',
  brwikiquote: 'https://br.wikiquote.org',
  brwikisource: 'https://br.wikisource.org',
  bswiki: 'https://bs.wikipedia.org',
  bswikipedia: 'https://bs.wikipedia.org',
  bswiktionary: 'https://bs.wiktionary.org',
  bswikibooks: 'https://bs.wikibooks.org',
  bswikinews: 'https://bs.wikinews.org',
  bswikiquote: 'https://bs.wikiquote.org',
  bswikisource: 'https://bs.wikisource.org',
  bugwiki: 'https://bug.wikipedia.org',
  bugwikipedia: 'https://bug.wikipedia.org',
  bxrwiki: 'https://bxr.wikipedia.org',
  bxrwikipedia: 'https://bxr.wikipedia.org',
  cawiki: 'https://ca.wikipedia.org',
  cawikipedia: 'https://ca.wikipedia.org',
  cawiktionary: 'https://ca.wiktionary.org',
  cawikibooks: 'https://ca.wikibooks.org',
  cawikinews: 'https://ca.wikinews.org',
  cawikiquote: 'https://ca.wikiquote.org',
  cawikisource: 'https://ca.wikisource.org',
  cbk_zamwiki: 'https://cbk-zam.wikipedia.org',
  cbk_zamwikipedia: 'https://cbk-zam.wikipedia.org',
  cdowiki: 'https://cdo.wikipedia.org',
  cdowikipedia: 'https://cdo.wikipedia.org',
  cewiki: 'https://ce.wikipedia.org',
  cewikipedia: 'https://ce.wikipedia.org',
  cebwiki: 'https://ceb.wikipedia.org',
  cebwikipedia: 'https://ceb.wikipedia.org',
  chwiki: 'https://ch.wikipedia.org',
  chwikipedia: 'https://ch.wikipedia.org',
  chwiktionary: 'https://ch.wiktionary.org',
  chwikibooks: 'https://ch.wikibooks.org',
  chowiki: 'https://cho.wikipedia.org',
  chowikipedia: 'https://cho.wikipedia.org',
  chrwiki: 'https://chr.wikipedia.org',
  chrwikipedia: 'https://chr.wikipedia.org',
  chrwiktionary: 'https://chr.wiktionary.org',
  chywiki: 'https://chy.wikipedia.org',
  chywikipedia: 'https://chy.wikipedia.org',
  ckbwiki: 'https://ckb.wikipedia.org',
  ckbwikipedia: 'https://ckb.wikipedia.org',
  cowiki: 'https://co.wikipedia.org',
  cowikipedia: 'https://co.wikipedia.org',
  cowiktionary: 'https://co.wiktionary.org',
  cowikibooks: 'https://co.wikibooks.org',
  cowikiquote: 'https://co.wikiquote.org',
  crwiki: 'https://cr.wikipedia.org',
  crwikipedia: 'https://cr.wikipedia.org',
  crwiktionary: 'https://cr.wiktionary.org',
  crwikiquote: 'https://cr.wikiquote.org',
  crhwiki: 'https://crh.wikipedia.org',
  crhwikipedia: 'https://crh.wikipedia.org',
  cswiki: 'https://cs.wikipedia.org',
  cswikipedia: 'https://cs.wikipedia.org',
  cswiktionary: 'https://cs.wiktionary.org',
  cswikibooks: 'https://cs.wikibooks.org',
  cswikinews: 'https://cs.wikinews.org',
  cswikiquote: 'https://cs.wikiquote.org',
  cswikisource: 'https://cs.wikisource.org',
  cswikiversity: 'https://cs.wikiversity.org',
  csbwiki: 'https://csb.wikipedia.org',
  csbwikipedia: 'https://csb.wikipedia.org',
  csbwiktionary: 'https://csb.wiktionary.org',
  cuwiki: 'https://cu.wikipedia.org',
  cuwikipedia: 'https://cu.wikipedia.org',
  cvwiki: 'https://cv.wikipedia.org',
  cvwikipedia: 'https://cv.wikipedia.org',
  cvwikibooks: 'https://cv.wikibooks.org',
  cywiki: 'https://cy.wikipedia.org',
  cywikipedia: 'https://cy.wikipedia.org',
  cywiktionary: 'https://cy.wiktionary.org',
  cywikibooks: 'https://cy.wikibooks.org',
  cywikiquote: 'https://cy.wikiquote.org',
  cywikisource: 'https://cy.wikisource.org',
  dawiki: 'https://da.wikipedia.org',
  dawikipedia: 'https://da.wikipedia.org',
  dawiktionary: 'https://da.wiktionary.org',
  dawikibooks: 'https://da.wikibooks.org',
  dawikiquote: 'https://da.wikiquote.org',
  dawikisource: 'https://da.wikisource.org',
  dewiki: 'https://de.wikipedia.org',
  dewikipedia: 'https://de.wikipedia.org',
  dewiktionary: 'https://de.wiktionary.org',
  dewikibooks: 'https://de.wikibooks.org',
  dewikinews: 'https://de.wikinews.org',
  dewikiquote: 'https://de.wikiquote.org',
  dewikisource: 'https://de.wikisource.org',
  dewikiversity: 'https://de.wikiversity.org',
  dewikivoyage: 'https://de.wikivoyage.org',
  dinwiki: 'https://din.wikipedia.org',
  dinwikipedia: 'https://din.wikipedia.org',
  diqwiki: 'https://diq.wikipedia.org',
  diqwikipedia: 'https://diq.wikipedia.org',
  dsbwiki: 'https://dsb.wikipedia.org',
  dsbwikipedia: 'https://dsb.wikipedia.org',
  dtywiki: 'https://dty.wikipedia.org',
  dtywikipedia: 'https://dty.wikipedia.org',
  dvwiki: 'https://dv.wikipedia.org',
  dvwikipedia: 'https://dv.wikipedia.org',
  dvwiktionary: 'https://dv.wiktionary.org',
  dzwiki: 'https://dz.wikipedia.org',
  dzwikipedia: 'https://dz.wikipedia.org',
  dzwiktionary: 'https://dz.wiktionary.org',
  eewiki: 'https://ee.wikipedia.org',
  eewikipedia: 'https://ee.wikipedia.org',
  elwiki: 'https://el.wikipedia.org',
  elwikipedia: 'https://el.wikipedia.org',
  elwiktionary: 'https://el.wiktionary.org',
  elwikibooks: 'https://el.wikibooks.org',
  elwikinews: 'https://el.wikinews.org',
  elwikiquote: 'https://el.wikiquote.org',
  elwikisource: 'https://el.wikisource.org',
  elwikiversity: 'https://el.wikiversity.org',
  elwikivoyage: 'https://el.wikivoyage.org',
  emlwiki: 'https://eml.wikipedia.org',
  emlwikipedia: 'https://eml.wikipedia.org',
  enwiki: 'https://en.wikipedia.org',
  enwikipedia: 'https://en.wikipedia.org',
  enwiktionary: 'https://en.wiktionary.org',
  enwikibooks: 'https://en.wikibooks.org',
  enwikinews: 'https://en.wikinews.org',
  enwikiquote: 'https://en.wikiquote.org',
  enwikisource: 'https://en.wikisource.org',
  enwikiversity: 'https://en.wikiversity.org',
  enwikivoyage: 'https://en.wikivoyage.org',
  eowiki: 'https://eo.wikipedia.org',
  eowikipedia: 'https://eo.wikipedia.org',
  eowiktionary: 'https://eo.wiktionary.org',
  eowikibooks: 'https://eo.wikibooks.org',
  eowikinews: 'https://eo.wikinews.org',
  eowikiquote: 'https://eo.wikiquote.org',
  eowikisource: 'https://eo.wikisource.org',
  eswiki: 'https://es.wikipedia.org',
  eswikipedia: 'https://es.wikipedia.org',
  eswiktionary: 'https://es.wiktionary.org',
  eswikibooks: 'https://es.wikibooks.org',
  eswikinews: 'https://es.wikinews.org',
  eswikiquote: 'https://es.wikiquote.org',
  eswikisource: 'https://es.wikisource.org',
  eswikiversity: 'https://es.wikiversity.org',
  eswikivoyage: 'https://es.wikivoyage.org',
  etwiki: 'https://et.wikipedia.org',
  etwikipedia: 'https://et.wikipedia.org',
  etwiktionary: 'https://et.wiktionary.org',
  etwikibooks: 'https://et.wikibooks.org',
  etwikiquote: 'https://et.wikiquote.org',
  etwikisource: 'https://et.wikisource.org',
  euwiki: 'https://eu.wikipedia.org',
  euwikipedia: 'https://eu.wikipedia.org',
  euwiktionary: 'https://eu.wiktionary.org',
  euwikibooks: 'https://eu.wikibooks.org',
  euwikiquote: 'https://eu.wikiquote.org',
  euwikisource: 'https://eu.wikisource.org',
  extwiki: 'https://ext.wikipedia.org',
  extwikipedia: 'https://ext.wikipedia.org',
  fawiki: 'https://fa.wikipedia.org',
  fawikipedia: 'https://fa.wikipedia.org',
  fawiktionary: 'https://fa.wiktionary.org',
  fawikibooks: 'https://fa.wikibooks.org',
  fawikinews: 'https://fa.wikinews.org',
  fawikiquote: 'https://fa.wikiquote.org',
  fawikisource: 'https://fa.wikisource.org',
  fawikivoyage: 'https://fa.wikivoyage.org',
  ffwiki: 'https://ff.wikipedia.org',
  ffwikipedia: 'https://ff.wikipedia.org',
  fiwiki: 'https://fi.wikipedia.org',
  fiwikipedia: 'https://fi.wikipedia.org',
  fiwiktionary: 'https://fi.wiktionary.org',
  fiwikibooks: 'https://fi.wikibooks.org',
  fiwikinews: 'https://fi.wikinews.org',
  fiwikiquote: 'https://fi.wikiquote.org',
  fiwikisource: 'https://fi.wikisource.org',
  fiwikiversity: 'https://fi.wikiversity.org',
  fiwikivoyage: 'https://fi.wikivoyage.org',
  fiu_vrowiki: 'https://fiu-vro.wikipedia.org',
  fiu_vrowikipedia: 'https://fiu-vro.wikipedia.org',
  fjwiki: 'https://fj.wikipedia.org',
  fjwikipedia: 'https://fj.wikipedia.org',
  fjwiktionary: 'https://fj.wiktionary.org',
  fowiki: 'https://fo.wikipedia.org',
  fowikipedia: 'https://fo.wikipedia.org',
  fowiktionary: 'https://fo.wiktionary.org',
  fowikisource: 'https://fo.wikisource.org',
  frwiki: 'https://fr.wikipedia.org',
  frwikipedia: 'https://fr.wikipedia.org',
  frwiktionary: 'https://fr.wiktionary.org',
  frwikibooks: 'https://fr.wikibooks.org',
  frwikinews: 'https://fr.wikinews.org',
  frwikiquote: 'https://fr.wikiquote.org',
  frwikisource: 'https://fr.wikisource.org',
  frwikiversity: 'https://fr.wikiversity.org',
  frwikivoyage: 'https://fr.wikivoyage.org',
  frpwiki: 'https://frp.wikipedia.org',
  frpwikipedia: 'https://frp.wikipedia.org',
  frrwiki: 'https://frr.wikipedia.org',
  frrwikipedia: 'https://frr.wikipedia.org',
  furwiki: 'https://fur.wikipedia.org',
  furwikipedia: 'https://fur.wikipedia.org',
  fywiki: 'https://fy.wikipedia.org',
  fywikipedia: 'https://fy.wikipedia.org',
  fywiktionary: 'https://fy.wiktionary.org',
  fywikibooks: 'https://fy.wikibooks.org',
  gawiki: 'https://ga.wikipedia.org',
  gawikipedia: 'https://ga.wikipedia.org',
  gawiktionary: 'https://ga.wiktionary.org',
  gawikibooks: 'https://ga.wikibooks.org',
  gawikiquote: 'https://ga.wikiquote.org',
  gagwiki: 'https://gag.wikipedia.org',
  gagwikipedia: 'https://gag.wikipedia.org',
  ganwiki: 'https://gan.wikipedia.org',
  ganwikipedia: 'https://gan.wikipedia.org',
  gdwiki: 'https://gd.wikipedia.org',
  gdwikipedia: 'https://gd.wikipedia.org',
  gdwiktionary: 'https://gd.wiktionary.org',
  glwiki: 'https://gl.wikipedia.org',
  glwikipedia: 'https://gl.wikipedia.org',
  glwiktionary: 'https://gl.wiktionary.org',
  glwikibooks: 'https://gl.wikibooks.org',
  glwikiquote: 'https://gl.wikiquote.org',
  glwikisource: 'https://gl.wikisource.org',
  glkwiki: 'https://glk.wikipedia.org',
  glkwikipedia: 'https://glk.wikipedia.org',
  gnwiki: 'https://gn.wikipedia.org',
  gnwikipedia: 'https://gn.wikipedia.org',
  gnwiktionary: 'https://gn.wiktionary.org',
  gnwikibooks: 'https://gn.wikibooks.org',
  gomwiki: 'https://gom.wikipedia.org',
  gomwikipedia: 'https://gom.wikipedia.org',
  gorwiki: 'https://gor.wikipedia.org',
  gorwikipedia: 'https://gor.wikipedia.org',
  gotwiki: 'https://got.wikipedia.org',
  gotwikipedia: 'https://got.wikipedia.org',
  gotwikibooks: 'https://got.wikibooks.org',
  guwiki: 'https://gu.wikipedia.org',
  guwikipedia: 'https://gu.wikipedia.org',
  guwiktionary: 'https://gu.wiktionary.org',
  guwikibooks: 'https://gu.wikibooks.org',
  guwikiquote: 'https://gu.wikiquote.org',
  guwikisource: 'https://gu.wikisource.org',
  gvwiki: 'https://gv.wikipedia.org',
  gvwikipedia: 'https://gv.wikipedia.org',
  gvwiktionary: 'https://gv.wiktionary.org',
  hawiki: 'https://ha.wikipedia.org',
  hawikipedia: 'https://ha.wikipedia.org',
  hawiktionary: 'https://ha.wiktionary.org',
  hakwiki: 'https://hak.wikipedia.org',
  hakwikipedia: 'https://hak.wikipedia.org',
  hawwiki: 'https://haw.wikipedia.org',
  hawwikipedia: 'https://haw.wikipedia.org',
  hewiki: 'https://he.wikipedia.org',
  hewikipedia: 'https://he.wikipedia.org',
  hewiktionary: 'https://he.wiktionary.org',
  hewikibooks: 'https://he.wikibooks.org',
  hewikinews: 'https://he.wikinews.org',
  hewikiquote: 'https://he.wikiquote.org',
  hewikisource: 'https://he.wikisource.org',
  hewikivoyage: 'https://he.wikivoyage.org',
  hiwiki: 'https://hi.wikipedia.org',
  hiwikipedia: 'https://hi.wikipedia.org',
  hiwiktionary: 'https://hi.wiktionary.org',
  hiwikibooks: 'https://hi.wikibooks.org',
  hiwikiquote: 'https://hi.wikiquote.org',
  hiwikiversity: 'https://hi.wikiversity.org',
  hiwikivoyage: 'https://hi.wikivoyage.org',
  hifwiki: 'https://hif.wikipedia.org',
  hifwikipedia: 'https://hif.wikipedia.org',
  hifwiktionary: 'https://hif.wiktionary.org',
  howiki: 'https://ho.wikipedia.org',
  howikipedia: 'https://ho.wikipedia.org',
  hrwiki: 'https://hr.wikipedia.org',
  hrwikipedia: 'https://hr.wikipedia.org',
  hrwiktionary: 'https://hr.wiktionary.org',
  hrwikibooks: 'https://hr.wikibooks.org',
  hrwikiquote: 'https://hr.wikiquote.org',
  hrwikisource: 'https://hr.wikisource.org',
  hsbwiki: 'https://hsb.wikipedia.org',
  hsbwikipedia: 'https://hsb.wikipedia.org',
  hsbwiktionary: 'https://hsb.wiktionary.org',
  htwiki: 'https://ht.wikipedia.org',
  htwikipedia: 'https://ht.wikipedia.org',
  htwikisource: 'https://ht.wikisource.org',
  huwiki: 'https://hu.wikipedia.org',
  huwikipedia: 'https://hu.wikipedia.org',
  huwiktionary: 'https://hu.wiktionary.org',
  huwikibooks: 'https://hu.wikibooks.org',
  huwikinews: 'https://hu.wikinews.org',
  huwikiquote: 'https://hu.wikiquote.org',
  huwikisource: 'https://hu.wikisource.org',
  hywiki: 'https://hy.wikipedia.org',
  hywikipedia: 'https://hy.wikipedia.org',
  hywiktionary: 'https://hy.wiktionary.org',
  hywikibooks: 'https://hy.wikibooks.org',
  hywikiquote: 'https://hy.wikiquote.org',
  hywikisource: 'https://hy.wikisource.org',
  hzwiki: 'https://hz.wikipedia.org',
  hzwikipedia: 'https://hz.wikipedia.org',
  iawiki: 'https://ia.wikipedia.org',
  iawikipedia: 'https://ia.wikipedia.org',
  iawiktionary: 'https://ia.wiktionary.org',
  iawikibooks: 'https://ia.wikibooks.org',
  idwiki: 'https://id.wikipedia.org',
  idwikipedia: 'https://id.wikipedia.org',
  idwiktionary: 'https://id.wiktionary.org',
  idwikibooks: 'https://id.wikibooks.org',
  idwikiquote: 'https://id.wikiquote.org',
  idwikisource: 'https://id.wikisource.org',
  iewiki: 'https://ie.wikipedia.org',
  iewikipedia: 'https://ie.wikipedia.org',
  iewiktionary: 'https://ie.wiktionary.org',
  iewikibooks: 'https://ie.wikibooks.org',
  igwiki: 'https://ig.wikipedia.org',
  igwikipedia: 'https://ig.wikipedia.org',
  iiwiki: 'https://ii.wikipedia.org',
  iiwikipedia: 'https://ii.wikipedia.org',
  ikwiki: 'https://ik.wikipedia.org',
  ikwikipedia: 'https://ik.wikipedia.org',
  ikwiktionary: 'https://ik.wiktionary.org',
  ilowiki: 'https://ilo.wikipedia.org',
  ilowikipedia: 'https://ilo.wikipedia.org',
  inhwiki: 'https://inh.wikipedia.org',
  inhwikipedia: 'https://inh.wikipedia.org',
  iowiki: 'https://io.wikipedia.org',
  iowikipedia: 'https://io.wikipedia.org',
  iowiktionary: 'https://io.wiktionary.org',
  iswiki: 'https://is.wikipedia.org',
  iswikipedia: 'https://is.wikipedia.org',
  iswiktionary: 'https://is.wiktionary.org',
  iswikibooks: 'https://is.wikibooks.org',
  iswikiquote: 'https://is.wikiquote.org',
  iswikisource: 'https://is.wikisource.org',
  itwiki: 'https://it.wikipedia.org',
  itwikipedia: 'https://it.wikipedia.org',
  itwiktionary: 'https://it.wiktionary.org',
  itwikibooks: 'https://it.wikibooks.org',
  itwikinews: 'https://it.wikinews.org',
  itwikiquote: 'https://it.wikiquote.org',
  itwikisource: 'https://it.wikisource.org',
  itwikiversity: 'https://it.wikiversity.org',
  itwikivoyage: 'https://it.wikivoyage.org',
  iuwiki: 'https://iu.wikipedia.org',
  iuwikipedia: 'https://iu.wikipedia.org',
  iuwiktionary: 'https://iu.wiktionary.org',
  jawiki: 'https://ja.wikipedia.org',
  jawikipedia: 'https://ja.wikipedia.org',
  jawiktionary: 'https://ja.wiktionary.org',
  jawikibooks: 'https://ja.wikibooks.org',
  jawikinews: 'https://ja.wikinews.org',
  jawikiquote: 'https://ja.wikiquote.org',
  jawikisource: 'https://ja.wikisource.org',
  jawikiversity: 'https://ja.wikiversity.org',
  jamwiki: 'https://jam.wikipedia.org',
  jamwikipedia: 'https://jam.wikipedia.org',
  jbowiki: 'https://jbo.wikipedia.org',
  jbowikipedia: 'https://jbo.wikipedia.org',
  jbowiktionary: 'https://jbo.wiktionary.org',
  jvwiki: 'https://jv.wikipedia.org',
  jvwikipedia: 'https://jv.wikipedia.org',
  jvwiktionary: 'https://jv.wiktionary.org',
  kawiki: 'https://ka.wikipedia.org',
  kawikipedia: 'https://ka.wikipedia.org',
  kawiktionary: 'https://ka.wiktionary.org',
  kawikibooks: 'https://ka.wikibooks.org',
  kawikiquote: 'https://ka.wikiquote.org',
  kaawiki: 'https://kaa.wikipedia.org',
  kaawikipedia: 'https://kaa.wikipedia.org',
  kabwiki: 'https://kab.wikipedia.org',
  kabwikipedia: 'https://kab.wikipedia.org',
  kbdwiki: 'https://kbd.wikipedia.org',
  kbdwikipedia: 'https://kbd.wikipedia.org',
  kbpwiki: 'https://kbp.wikipedia.org',
  kbpwikipedia: 'https://kbp.wikipedia.org',
  kgwiki: 'https://kg.wikipedia.org',
  kgwikipedia: 'https://kg.wikipedia.org',
  kiwiki: 'https://ki.wikipedia.org',
  kiwikipedia: 'https://ki.wikipedia.org',
  kjwiki: 'https://kj.wikipedia.org',
  kjwikipedia: 'https://kj.wikipedia.org',
  kkwiki: 'https://kk.wikipedia.org',
  kkwikipedia: 'https://kk.wikipedia.org',
  kkwiktionary: 'https://kk.wiktionary.org',
  kkwikibooks: 'https://kk.wikibooks.org',
  kkwikiquote: 'https://kk.wikiquote.org',
  klwiki: 'https://kl.wikipedia.org',
  klwikipedia: 'https://kl.wikipedia.org',
  klwiktionary: 'https://kl.wiktionary.org',
  kmwiki: 'https://km.wikipedia.org',
  kmwikipedia: 'https://km.wikipedia.org',
  kmwiktionary: 'https://km.wiktionary.org',
  kmwikibooks: 'https://km.wikibooks.org',
  knwiki: 'https://kn.wikipedia.org',
  knwikipedia: 'https://kn.wikipedia.org',
  knwiktionary: 'https://kn.wiktionary.org',
  knwikibooks: 'https://kn.wikibooks.org',
  knwikiquote: 'https://kn.wikiquote.org',
  knwikisource: 'https://kn.wikisource.org',
  kowiki: 'https://ko.wikipedia.org',
  kowikipedia: 'https://ko.wikipedia.org',
  kowiktionary: 'https://ko.wiktionary.org',
  kowikibooks: 'https://ko.wikibooks.org',
  kowikinews: 'https://ko.wikinews.org',
  kowikiquote: 'https://ko.wikiquote.org',
  kowikisource: 'https://ko.wikisource.org',
  kowikiversity: 'https://ko.wikiversity.org',
  koiwiki: 'https://koi.wikipedia.org',
  koiwikipedia: 'https://koi.wikipedia.org',
  krwiki: 'https://kr.wikipedia.org',
  krwikipedia: 'https://kr.wikipedia.org',
  krwikiquote: 'https://kr.wikiquote.org',
  krcwiki: 'https://krc.wikipedia.org',
  krcwikipedia: 'https://krc.wikipedia.org',
  kswiki: 'https://ks.wikipedia.org',
  kswikipedia: 'https://ks.wikipedia.org',
  kswiktionary: 'https://ks.wiktionary.org',
  kswikibooks: 'https://ks.wikibooks.org',
  kswikiquote: 'https://ks.wikiquote.org',
  kshwiki: 'https://ksh.wikipedia.org',
  kshwikipedia: 'https://ksh.wikipedia.org',
  kuwiki: 'https://ku.wikipedia.org',
  kuwikipedia: 'https://ku.wikipedia.org',
  kuwiktionary: 'https://ku.wiktionary.org',
  kuwikibooks: 'https://ku.wikibooks.org',
  kuwikiquote: 'https://ku.wikiquote.org',
  kvwiki: 'https://kv.wikipedia.org',
  kvwikipedia: 'https://kv.wikipedia.org',
  kwwiki: 'https://kw.wikipedia.org',
  kwwikipedia: 'https://kw.wikipedia.org',
  kwwiktionary: 'https://kw.wiktionary.org',
  kwwikiquote: 'https://kw.wikiquote.org',
  kywiki: 'https://ky.wikipedia.org',
  kywikipedia: 'https://ky.wikipedia.org',
  kywiktionary: 'https://ky.wiktionary.org',
  kywikibooks: 'https://ky.wikibooks.org',
  kywikiquote: 'https://ky.wikiquote.org',
  lawiki: 'https://la.wikipedia.org',
  lawikipedia: 'https://la.wikipedia.org',
  lawiktionary: 'https://la.wiktionary.org',
  lawikibooks: 'https://la.wikibooks.org',
  lawikiquote: 'https://la.wikiquote.org',
  lawikisource: 'https://la.wikisource.org',
  ladwiki: 'https://lad.wikipedia.org',
  ladwikipedia: 'https://lad.wikipedia.org',
  lbwiki: 'https://lb.wikipedia.org',
  lbwikipedia: 'https://lb.wikipedia.org',
  lbwiktionary: 'https://lb.wiktionary.org',
  lbwikibooks: 'https://lb.wikibooks.org',
  lbwikiquote: 'https://lb.wikiquote.org',
  lbewiki: 'https://lbe.wikipedia.org',
  lbewikipedia: 'https://lbe.wikipedia.org',
  lezwiki: 'https://lez.wikipedia.org',
  lezwikipedia: 'https://lez.wikipedia.org',
  lfnwiki: 'https://lfn.wikipedia.org',
  lfnwikipedia: 'https://lfn.wikipedia.org',
  lgwiki: 'https://lg.wikipedia.org',
  lgwikipedia: 'https://lg.wikipedia.org',
  liwiki: 'https://li.wikipedia.org',
  liwikipedia: 'https://li.wikipedia.org',
  liwiktionary: 'https://li.wiktionary.org',
  liwikibooks: 'https://li.wikibooks.org',
  liwikiquote: 'https://li.wikiquote.org',
  liwikisource: 'https://li.wikisource.org',
  lijwiki: 'https://lij.wikipedia.org',
  lijwikipedia: 'https://lij.wikipedia.org',
  lmowiki: 'https://lmo.wikipedia.org',
  lmowikipedia: 'https://lmo.wikipedia.org',
  lnwiki: 'https://ln.wikipedia.org',
  lnwikipedia: 'https://ln.wikipedia.org',
  lnwiktionary: 'https://ln.wiktionary.org',
  lnwikibooks: 'https://ln.wikibooks.org',
  lowiki: 'https://lo.wikipedia.org',
  lowikipedia: 'https://lo.wikipedia.org',
  lowiktionary: 'https://lo.wiktionary.org',
  lrcwiki: 'https://lrc.wikipedia.org',
  lrcwikipedia: 'https://lrc.wikipedia.org',
  ltwiki: 'https://lt.wikipedia.org',
  ltwikipedia: 'https://lt.wikipedia.org',
  ltwiktionary: 'https://lt.wiktionary.org',
  ltwikibooks: 'https://lt.wikibooks.org',
  ltwikiquote: 'https://lt.wikiquote.org',
  ltwikisource: 'https://lt.wikisource.org',
  ltgwiki: 'https://ltg.wikipedia.org',
  ltgwikipedia: 'https://ltg.wikipedia.org',
  lvwiki: 'https://lv.wikipedia.org',
  lvwikipedia: 'https://lv.wikipedia.org',
  lvwiktionary: 'https://lv.wiktionary.org',
  lvwikibooks: 'https://lv.wikibooks.org',
  maiwiki: 'https://mai.wikipedia.org',
  maiwikipedia: 'https://mai.wikipedia.org',
  map_bmswiki: 'https://map-bms.wikipedia.org',
  map_bmswikipedia: 'https://map-bms.wikipedia.org',
  mdfwiki: 'https://mdf.wikipedia.org',
  mdfwikipedia: 'https://mdf.wikipedia.org',
  mgwiki: 'https://mg.wikipedia.org',
  mgwikipedia: 'https://mg.wikipedia.org',
  mgwiktionary: 'https://mg.wiktionary.org',
  mgwikibooks: 'https://mg.wikibooks.org',
  mhwiki: 'https://mh.wikipedia.org',
  mhwikipedia: 'https://mh.wikipedia.org',
  mhwiktionary: 'https://mh.wiktionary.org',
  mhrwiki: 'https://mhr.wikipedia.org',
  mhrwikipedia: 'https://mhr.wikipedia.org',
  miwiki: 'https://mi.wikipedia.org',
  miwikipedia: 'https://mi.wikipedia.org',
  miwiktionary: 'https://mi.wiktionary.org',
  miwikibooks: 'https://mi.wikibooks.org',
  minwiki: 'https://min.wikipedia.org',
  minwikipedia: 'https://min.wikipedia.org',
  mkwiki: 'https://mk.wikipedia.org',
  mkwikipedia: 'https://mk.wikipedia.org',
  mkwiktionary: 'https://mk.wiktionary.org',
  mkwikibooks: 'https://mk.wikibooks.org',
  mkwikisource: 'https://mk.wikisource.org',
  mlwiki: 'https://ml.wikipedia.org',
  mlwikipedia: 'https://ml.wikipedia.org',
  mlwiktionary: 'https://ml.wiktionary.org',
  mlwikibooks: 'https://ml.wikibooks.org',
  mlwikiquote: 'https://ml.wikiquote.org',
  mlwikisource: 'https://ml.wikisource.org',
  mnwiki: 'https://mn.wikipedia.org',
  mnwikipedia: 'https://mn.wikipedia.org',
  mnwiktionary: 'https://mn.wiktionary.org',
  mnwikibooks: 'https://mn.wikibooks.org',
  mrwiki: 'https://mr.wikipedia.org',
  mrwikipedia: 'https://mr.wikipedia.org',
  mrwiktionary: 'https://mr.wiktionary.org',
  mrwikibooks: 'https://mr.wikibooks.org',
  mrwikiquote: 'https://mr.wikiquote.org',
  mrwikisource: 'https://mr.wikisource.org',
  mrjwiki: 'https://mrj.wikipedia.org',
  mrjwikipedia: 'https://mrj.wikipedia.org',
  mswiki: 'https://ms.wikipedia.org',
  mswikipedia: 'https://ms.wikipedia.org',
  mswiktionary: 'https://ms.wiktionary.org',
  mswikibooks: 'https://ms.wikibooks.org',
  mtwiki: 'https://mt.wikipedia.org',
  mtwikipedia: 'https://mt.wikipedia.org',
  mtwiktionary: 'https://mt.wiktionary.org',
  muswiki: 'https://mus.wikipedia.org',
  muswikipedia: 'https://mus.wikipedia.org',
  mwlwiki: 'https://mwl.wikipedia.org',
  mwlwikipedia: 'https://mwl.wikipedia.org',
  mywiki: 'https://my.wikipedia.org',
  mywikipedia: 'https://my.wikipedia.org',
  mywiktionary: 'https://my.wiktionary.org',
  mywikibooks: 'https://my.wikibooks.org',
  myvwiki: 'https://myv.wikipedia.org',
  myvwikipedia: 'https://myv.wikipedia.org',
  mznwiki: 'https://mzn.wikipedia.org',
  mznwikipedia: 'https://mzn.wikipedia.org',
  nawiki: 'https://na.wikipedia.org',
  nawikipedia: 'https://na.wikipedia.org',
  nawiktionary: 'https://na.wiktionary.org',
  nawikibooks: 'https://na.wikibooks.org',
  nawikiquote: 'https://na.wikiquote.org',
  nahwiki: 'https://nah.wikipedia.org',
  nahwikipedia: 'https://nah.wikipedia.org',
  nahwiktionary: 'https://nah.wiktionary.org',
  nahwikibooks: 'https://nah.wikibooks.org',
  napwiki: 'https://nap.wikipedia.org',
  napwikipedia: 'https://nap.wikipedia.org',
  ndswiki: 'https://nds.wikipedia.org',
  ndswikipedia: 'https://nds.wikipedia.org',
  ndswiktionary: 'https://nds.wiktionary.org',
  ndswikibooks: 'https://nds.wikibooks.org',
  ndswikiquote: 'https://nds.wikiquote.org',
  nds_nlwiki: 'https://nds-nl.wikipedia.org',
  nds_nlwikipedia: 'https://nds-nl.wikipedia.org',
  newiki: 'https://ne.wikipedia.org',
  newikipedia: 'https://ne.wikipedia.org',
  newiktionary: 'https://ne.wiktionary.org',
  newikibooks: 'https://ne.wikibooks.org',
  newwiki: 'https://new.wikipedia.org',
  newwikipedia: 'https://new.wikipedia.org',
  ngwiki: 'https://ng.wikipedia.org',
  ngwikipedia: 'https://ng.wikipedia.org',
  nlwiki: 'https://nl.wikipedia.org',
  nlwikipedia: 'https://nl.wikipedia.org',
  nlwiktionary: 'https://nl.wiktionary.org',
  nlwikibooks: 'https://nl.wikibooks.org',
  nlwikinews: 'https://nl.wikinews.org',
  nlwikiquote: 'https://nl.wikiquote.org',
  nlwikisource: 'https://nl.wikisource.org',
  nlwikivoyage: 'https://nl.wikivoyage.org',
  nnwiki: 'https://nn.wikipedia.org',
  nnwikipedia: 'https://nn.wikipedia.org',
  nnwiktionary: 'https://nn.wiktionary.org',
  nnwikiquote: 'https://nn.wikiquote.org',
  nowiki: 'https://no.wikipedia.org',
  nowikipedia: 'https://no.wikipedia.org',
  nowiktionary: 'https://no.wiktionary.org',
  nowikibooks: 'https://no.wikibooks.org',
  nowikinews: 'https://no.wikinews.org',
  nowikiquote: 'https://no.wikiquote.org',
  nowikisource: 'https://no.wikisource.org',
  novwiki: 'https://nov.wikipedia.org',
  novwikipedia: 'https://nov.wikipedia.org',
  nrmwiki: 'https://nrm.wikipedia.org',
  nrmwikipedia: 'https://nrm.wikipedia.org',
  nsowiki: 'https://nso.wikipedia.org',
  nsowikipedia: 'https://nso.wikipedia.org',
  nvwiki: 'https://nv.wikipedia.org',
  nvwikipedia: 'https://nv.wikipedia.org',
  nywiki: 'https://ny.wikipedia.org',
  nywikipedia: 'https://ny.wikipedia.org',
  ocwiki: 'https://oc.wikipedia.org',
  ocwikipedia: 'https://oc.wikipedia.org',
  ocwiktionary: 'https://oc.wiktionary.org',
  ocwikibooks: 'https://oc.wikibooks.org',
  olowiki: 'https://olo.wikipedia.org',
  olowikipedia: 'https://olo.wikipedia.org',
  omwiki: 'https://om.wikipedia.org',
  omwikipedia: 'https://om.wikipedia.org',
  omwiktionary: 'https://om.wiktionary.org',
  orwiki: 'https://or.wikipedia.org',
  orwikipedia: 'https://or.wikipedia.org',
  orwiktionary: 'https://or.wiktionary.org',
  orwikisource: 'https://or.wikisource.org',
  oswiki: 'https://os.wikipedia.org',
  oswikipedia: 'https://os.wikipedia.org',
  pawiki: 'https://pa.wikipedia.org',
  pawikipedia: 'https://pa.wikipedia.org',
  pawiktionary: 'https://pa.wiktionary.org',
  pawikibooks: 'https://pa.wikibooks.org',
  pawikisource: 'https://pa.wikisource.org',
  pagwiki: 'https://pag.wikipedia.org',
  pagwikipedia: 'https://pag.wikipedia.org',
  pamwiki: 'https://pam.wikipedia.org',
  pamwikipedia: 'https://pam.wikipedia.org',
  papwiki: 'https://pap.wikipedia.org',
  papwikipedia: 'https://pap.wikipedia.org',
  pcdwiki: 'https://pcd.wikipedia.org',
  pcdwikipedia: 'https://pcd.wikipedia.org',
  pdcwiki: 'https://pdc.wikipedia.org',
  pdcwikipedia: 'https://pdc.wikipedia.org',
  pflwiki: 'https://pfl.wikipedia.org',
  pflwikipedia: 'https://pfl.wikipedia.org',
  piwiki: 'https://pi.wikipedia.org',
  piwikipedia: 'https://pi.wikipedia.org',
  piwiktionary: 'https://pi.wiktionary.org',
  pihwiki: 'https://pih.wikipedia.org',
  pihwikipedia: 'https://pih.wikipedia.org',
  plwiki: 'https://pl.wikipedia.org',
  plwikipedia: 'https://pl.wikipedia.org',
  plwiktionary: 'https://pl.wiktionary.org',
  plwikibooks: 'https://pl.wikibooks.org',
  plwikinews: 'https://pl.wikinews.org',
  plwikiquote: 'https://pl.wikiquote.org',
  plwikisource: 'https://pl.wikisource.org',
  plwikivoyage: 'https://pl.wikivoyage.org',
  pmswiki: 'https://pms.wikipedia.org',
  pmswikipedia: 'https://pms.wikipedia.org',
  pmswikisource: 'https://pms.wikisource.org',
  pnbwiki: 'https://pnb.wikipedia.org',
  pnbwikipedia: 'https://pnb.wikipedia.org',
  pnbwiktionary: 'https://pnb.wiktionary.org',
  pntwiki: 'https://pnt.wikipedia.org',
  pntwikipedia: 'https://pnt.wikipedia.org',
  pswiki: 'https://ps.wikipedia.org',
  pswikipedia: 'https://ps.wikipedia.org',
  pswiktionary: 'https://ps.wiktionary.org',
  pswikibooks: 'https://ps.wikibooks.org',
  pswikivoyage: 'https://ps.wikivoyage.org',
  ptwiki: 'https://pt.wikipedia.org',
  ptwikipedia: 'https://pt.wikipedia.org',
  ptwiktionary: 'https://pt.wiktionary.org',
  ptwikibooks: 'https://pt.wikibooks.org',
  ptwikinews: 'https://pt.wikinews.org',
  ptwikiquote: 'https://pt.wikiquote.org',
  ptwikisource: 'https://pt.wikisource.org',
  ptwikiversity: 'https://pt.wikiversity.org',
  ptwikivoyage: 'https://pt.wikivoyage.org',
  quwiki: 'https://qu.wikipedia.org',
  quwikipedia: 'https://qu.wikipedia.org',
  quwiktionary: 'https://qu.wiktionary.org',
  quwikibooks: 'https://qu.wikibooks.org',
  quwikiquote: 'https://qu.wikiquote.org',
  rmwiki: 'https://rm.wikipedia.org',
  rmwikipedia: 'https://rm.wikipedia.org',
  rmwiktionary: 'https://rm.wiktionary.org',
  rmwikibooks: 'https://rm.wikibooks.org',
  rmywiki: 'https://rmy.wikipedia.org',
  rmywikipedia: 'https://rmy.wikipedia.org',
  rnwiki: 'https://rn.wikipedia.org',
  rnwikipedia: 'https://rn.wikipedia.org',
  rnwiktionary: 'https://rn.wiktionary.org',
  rowiki: 'https://ro.wikipedia.org',
  rowikipedia: 'https://ro.wikipedia.org',
  rowiktionary: 'https://ro.wiktionary.org',
  rowikibooks: 'https://ro.wikibooks.org',
  rowikinews: 'https://ro.wikinews.org',
  rowikiquote: 'https://ro.wikiquote.org',
  rowikisource: 'https://ro.wikisource.org',
  rowikivoyage: 'https://ro.wikivoyage.org',
  roa_rupwiki: 'https://roa-rup.wikipedia.org',
  roa_rupwikipedia: 'https://roa-rup.wikipedia.org',
  roa_rupwiktionary: 'https://roa-rup.wiktionary.org',
  roa_tarawiki: 'https://roa-tara.wikipedia.org',
  roa_tarawikipedia: 'https://roa-tara.wikipedia.org',
  ruwiki: 'https://ru.wikipedia.org',
  ruwikipedia: 'https://ru.wikipedia.org',
  ruwiktionary: 'https://ru.wiktionary.org',
  ruwikibooks: 'https://ru.wikibooks.org',
  ruwikinews: 'https://ru.wikinews.org',
  ruwikiquote: 'https://ru.wikiquote.org',
  ruwikisource: 'https://ru.wikisource.org',
  ruwikiversity: 'https://ru.wikiversity.org',
  ruwikivoyage: 'https://ru.wikivoyage.org',
  ruewiki: 'https://rue.wikipedia.org',
  ruewikipedia: 'https://rue.wikipedia.org',
  rwwiki: 'https://rw.wikipedia.org',
  rwwikipedia: 'https://rw.wikipedia.org',
  rwwiktionary: 'https://rw.wiktionary.org',
  sawiki: 'https://sa.wikipedia.org',
  sawikipedia: 'https://sa.wikipedia.org',
  sawiktionary: 'https://sa.wiktionary.org',
  sawikibooks: 'https://sa.wikibooks.org',
  sawikiquote: 'https://sa.wikiquote.org',
  sawikisource: 'https://sa.wikisource.org',
  sahwiki: 'https://sah.wikipedia.org',
  sahwikipedia: 'https://sah.wikipedia.org',
  sahwikiquote: 'https://sah.wikiquote.org',
  sahwikisource: 'https://sah.wikisource.org',
  satwiki: 'https://sat.wikipedia.org',
  satwikipedia: 'https://sat.wikipedia.org',
  scwiki: 'https://sc.wikipedia.org',
  scwikipedia: 'https://sc.wikipedia.org',
  scwiktionary: 'https://sc.wiktionary.org',
  scnwiki: 'https://scn.wikipedia.org',
  scnwikipedia: 'https://scn.wikipedia.org',
  scnwiktionary: 'https://scn.wiktionary.org',
  scowiki: 'https://sco.wikipedia.org',
  scowikipedia: 'https://sco.wikipedia.org',
  sdwiki: 'https://sd.wikipedia.org',
  sdwikipedia: 'https://sd.wikipedia.org',
  sdwiktionary: 'https://sd.wiktionary.org',
  sdwikinews: 'https://sd.wikinews.org',
  sewiki: 'https://se.wikipedia.org',
  sewikipedia: 'https://se.wikipedia.org',
  sewikibooks: 'https://se.wikibooks.org',
  sgwiki: 'https://sg.wikipedia.org',
  sgwikipedia: 'https://sg.wikipedia.org',
  sgwiktionary: 'https://sg.wiktionary.org',
  shwiki: 'https://sh.wikipedia.org',
  shwikipedia: 'https://sh.wikipedia.org',
  shwiktionary: 'https://sh.wiktionary.org',
  siwiki: 'https://si.wikipedia.org',
  siwikipedia: 'https://si.wikipedia.org',
  siwiktionary: 'https://si.wiktionary.org',
  siwikibooks: 'https://si.wikibooks.org',
  simplewiki: 'https://simple.wikipedia.org',
  simplewikipedia: 'https://simple.wikipedia.org',
  simplewiktionary: 'https://simple.wiktionary.org',
  simplewikibooks: 'https://simple.wikibooks.org',
  simplewikiquote: 'https://simple.wikiquote.org',
  skwiki: 'https://sk.wikipedia.org',
  skwikipedia: 'https://sk.wikipedia.org',
  skwiktionary: 'https://sk.wiktionary.org',
  skwikibooks: 'https://sk.wikibooks.org',
  skwikiquote: 'https://sk.wikiquote.org',
  skwikisource: 'https://sk.wikisource.org',
  slwiki: 'https://sl.wikipedia.org',
  slwikipedia: 'https://sl.wikipedia.org',
  slwiktionary: 'https://sl.wiktionary.org',
  slwikibooks: 'https://sl.wikibooks.org',
  slwikiquote: 'https://sl.wikiquote.org',
  slwikisource: 'https://sl.wikisource.org',
  slwikiversity: 'https://sl.wikiversity.org',
  smwiki: 'https://sm.wikipedia.org',
  smwikipedia: 'https://sm.wikipedia.org',
  smwiktionary: 'https://sm.wiktionary.org',
  snwiki: 'https://sn.wikipedia.org',
  snwikipedia: 'https://sn.wikipedia.org',
  snwiktionary: 'https://sn.wiktionary.org',
  sowiki: 'https://so.wikipedia.org',
  sowikipedia: 'https://so.wikipedia.org',
  sowiktionary: 'https://so.wiktionary.org',
  sqwiki: 'https://sq.wikipedia.org',
  sqwikipedia: 'https://sq.wikipedia.org',
  sqwiktionary: 'https://sq.wiktionary.org',
  sqwikibooks: 'https://sq.wikibooks.org',
  sqwikinews: 'https://sq.wikinews.org',
  sqwikiquote: 'https://sq.wikiquote.org',
  srwiki: 'https://sr.wikipedia.org',
  srwikipedia: 'https://sr.wikipedia.org',
  srwiktionary: 'https://sr.wiktionary.org',
  srwikibooks: 'https://sr.wikibooks.org',
  srwikinews: 'https://sr.wikinews.org',
  srwikiquote: 'https://sr.wikiquote.org',
  srwikisource: 'https://sr.wikisource.org',
  srnwiki: 'https://srn.wikipedia.org',
  srnwikipedia: 'https://srn.wikipedia.org',
  sswiki: 'https://ss.wikipedia.org',
  sswikipedia: 'https://ss.wikipedia.org',
  sswiktionary: 'https://ss.wiktionary.org',
  stwiki: 'https://st.wikipedia.org',
  stwikipedia: 'https://st.wikipedia.org',
  stwiktionary: 'https://st.wiktionary.org',
  stqwiki: 'https://stq.wikipedia.org',
  stqwikipedia: 'https://stq.wikipedia.org',
  suwiki: 'https://su.wikipedia.org',
  suwikipedia: 'https://su.wikipedia.org',
  suwiktionary: 'https://su.wiktionary.org',
  suwikibooks: 'https://su.wikibooks.org',
  suwikiquote: 'https://su.wikiquote.org',
  svwiki: 'https://sv.wikipedia.org',
  svwikipedia: 'https://sv.wikipedia.org',
  svwiktionary: 'https://sv.wiktionary.org',
  svwikibooks: 'https://sv.wikibooks.org',
  svwikinews: 'https://sv.wikinews.org',
  svwikiquote: 'https://sv.wikiquote.org',
  svwikisource: 'https://sv.wikisource.org',
  svwikiversity: 'https://sv.wikiversity.org',
  svwikivoyage: 'https://sv.wikivoyage.org',
  swwiki: 'https://sw.wikipedia.org',
  swwikipedia: 'https://sw.wikipedia.org',
  swwiktionary: 'https://sw.wiktionary.org',
  swwikibooks: 'https://sw.wikibooks.org',
  szlwiki: 'https://szl.wikipedia.org',
  szlwikipedia: 'https://szl.wikipedia.org',
  tawiki: 'https://ta.wikipedia.org',
  tawikipedia: 'https://ta.wikipedia.org',
  tawiktionary: 'https://ta.wiktionary.org',
  tawikibooks: 'https://ta.wikibooks.org',
  tawikinews: 'https://ta.wikinews.org',
  tawikiquote: 'https://ta.wikiquote.org',
  tawikisource: 'https://ta.wikisource.org',
  tcywiki: 'https://tcy.wikipedia.org',
  tcywikipedia: 'https://tcy.wikipedia.org',
  tewiki: 'https://te.wikipedia.org',
  tewikipedia: 'https://te.wikipedia.org',
  tewiktionary: 'https://te.wiktionary.org',
  tewikibooks: 'https://te.wikibooks.org',
  tewikiquote: 'https://te.wikiquote.org',
  tewikisource: 'https://te.wikisource.org',
  tetwiki: 'https://tet.wikipedia.org',
  tetwikipedia: 'https://tet.wikipedia.org',
  tgwiki: 'https://tg.wikipedia.org',
  tgwikipedia: 'https://tg.wikipedia.org',
  tgwiktionary: 'https://tg.wiktionary.org',
  tgwikibooks: 'https://tg.wikibooks.org',
  thwiki: 'https://th.wikipedia.org',
  thwikipedia: 'https://th.wikipedia.org',
  thwiktionary: 'https://th.wiktionary.org',
  thwikibooks: 'https://th.wikibooks.org',
  thwikinews: 'https://th.wikinews.org',
  thwikiquote: 'https://th.wikiquote.org',
  thwikisource: 'https://th.wikisource.org',
  tiwiki: 'https://ti.wikipedia.org',
  tiwikipedia: 'https://ti.wikipedia.org',
  tiwiktionary: 'https://ti.wiktionary.org',
  tkwiki: 'https://tk.wikipedia.org',
  tkwikipedia: 'https://tk.wikipedia.org',
  tkwiktionary: 'https://tk.wiktionary.org',
  tkwikibooks: 'https://tk.wikibooks.org',
  tkwikiquote: 'https://tk.wikiquote.org',
  tlwiki: 'https://tl.wikipedia.org',
  tlwikipedia: 'https://tl.wikipedia.org',
  tlwiktionary: 'https://tl.wiktionary.org',
  tlwikibooks: 'https://tl.wikibooks.org',
  tnwiki: 'https://tn.wikipedia.org',
  tnwikipedia: 'https://tn.wikipedia.org',
  tnwiktionary: 'https://tn.wiktionary.org',
  towiki: 'https://to.wikipedia.org',
  towikipedia: 'https://to.wikipedia.org',
  towiktionary: 'https://to.wiktionary.org',
  tpiwiki: 'https://tpi.wikipedia.org',
  tpiwikipedia: 'https://tpi.wikipedia.org',
  tpiwiktionary: 'https://tpi.wiktionary.org',
  trwiki: 'https://tr.wikipedia.org',
  trwikipedia: 'https://tr.wikipedia.org',
  trwiktionary: 'https://tr.wiktionary.org',
  trwikibooks: 'https://tr.wikibooks.org',
  trwikinews: 'https://tr.wikinews.org',
  trwikiquote: 'https://tr.wikiquote.org',
  trwikisource: 'https://tr.wikisource.org',
  tswiki: 'https://ts.wikipedia.org',
  tswikipedia: 'https://ts.wikipedia.org',
  tswiktionary: 'https://ts.wiktionary.org',
  ttwiki: 'https://tt.wikipedia.org',
  ttwikipedia: 'https://tt.wikipedia.org',
  ttwiktionary: 'https://tt.wiktionary.org',
  ttwikibooks: 'https://tt.wikibooks.org',
  ttwikiquote: 'https://tt.wikiquote.org',
  tumwiki: 'https://tum.wikipedia.org',
  tumwikipedia: 'https://tum.wikipedia.org',
  twwiki: 'https://tw.wikipedia.org',
  twwikipedia: 'https://tw.wikipedia.org',
  twwiktionary: 'https://tw.wiktionary.org',
  tywiki: 'https://ty.wikipedia.org',
  tywikipedia: 'https://ty.wikipedia.org',
  tyvwiki: 'https://tyv.wikipedia.org',
  tyvwikipedia: 'https://tyv.wikipedia.org',
  udmwiki: 'https://udm.wikipedia.org',
  udmwikipedia: 'https://udm.wikipedia.org',
  ugwiki: 'https://ug.wikipedia.org',
  ugwikipedia: 'https://ug.wikipedia.org',
  ugwiktionary: 'https://ug.wiktionary.org',
  ugwikibooks: 'https://ug.wikibooks.org',
  ugwikiquote: 'https://ug.wikiquote.org',
  ukwiki: 'https://uk.wikipedia.org',
  ukwikipedia: 'https://uk.wikipedia.org',
  ukwiktionary: 'https://uk.wiktionary.org',
  ukwikibooks: 'https://uk.wikibooks.org',
  ukwikinews: 'https://uk.wikinews.org',
  ukwikiquote: 'https://uk.wikiquote.org',
  ukwikisource: 'https://uk.wikisource.org',
  ukwikivoyage: 'https://uk.wikivoyage.org',
  urwiki: 'https://ur.wikipedia.org',
  urwikipedia: 'https://ur.wikipedia.org',
  urwiktionary: 'https://ur.wiktionary.org',
  urwikibooks: 'https://ur.wikibooks.org',
  urwikiquote: 'https://ur.wikiquote.org',
  uzwiki: 'https://uz.wikipedia.org',
  uzwikipedia: 'https://uz.wikipedia.org',
  uzwiktionary: 'https://uz.wiktionary.org',
  uzwikibooks: 'https://uz.wikibooks.org',
  uzwikiquote: 'https://uz.wikiquote.org',
  vewiki: 'https://ve.wikipedia.org',
  vewikipedia: 'https://ve.wikipedia.org',
  vecwiki: 'https://vec.wikipedia.org',
  vecwikipedia: 'https://vec.wikipedia.org',
  vecwiktionary: 'https://vec.wiktionary.org',
  vecwikisource: 'https://vec.wikisource.org',
  vepwiki: 'https://vep.wikipedia.org',
  vepwikipedia: 'https://vep.wikipedia.org',
  viwiki: 'https://vi.wikipedia.org',
  viwikipedia: 'https://vi.wikipedia.org',
  viwiktionary: 'https://vi.wiktionary.org',
  viwikibooks: 'https://vi.wikibooks.org',
  viwikiquote: 'https://vi.wikiquote.org',
  viwikisource: 'https://vi.wikisource.org',
  viwikivoyage: 'https://vi.wikivoyage.org',
  vlswiki: 'https://vls.wikipedia.org',
  vlswikipedia: 'https://vls.wikipedia.org',
  vowiki: 'https://vo.wikipedia.org',
  vowikipedia: 'https://vo.wikipedia.org',
  vowiktionary: 'https://vo.wiktionary.org',
  vowikibooks: 'https://vo.wikibooks.org',
  vowikiquote: 'https://vo.wikiquote.org',
  wawiki: 'https://wa.wikipedia.org',
  wawikipedia: 'https://wa.wikipedia.org',
  wawiktionary: 'https://wa.wiktionary.org',
  wawikibooks: 'https://wa.wikibooks.org',
  warwiki: 'https://war.wikipedia.org',
  warwikipedia: 'https://war.wikipedia.org',
  wowiki: 'https://wo.wikipedia.org',
  wowikipedia: 'https://wo.wikipedia.org',
  wowiktionary: 'https://wo.wiktionary.org',
  wowikiquote: 'https://wo.wikiquote.org',
  wuuwiki: 'https://wuu.wikipedia.org',
  wuuwikipedia: 'https://wuu.wikipedia.org',
  xalwiki: 'https://xal.wikipedia.org',
  xalwikipedia: 'https://xal.wikipedia.org',
  xhwiki: 'https://xh.wikipedia.org',
  xhwikipedia: 'https://xh.wikipedia.org',
  xhwiktionary: 'https://xh.wiktionary.org',
  xhwikibooks: 'https://xh.wikibooks.org',
  xmfwiki: 'https://xmf.wikipedia.org',
  xmfwikipedia: 'https://xmf.wikipedia.org',
  yiwiki: 'https://yi.wikipedia.org',
  yiwikipedia: 'https://yi.wikipedia.org',
  yiwiktionary: 'https://yi.wiktionary.org',
  yiwikisource: 'https://yi.wikisource.org',
  yowiki: 'https://yo.wikipedia.org',
  yowikipedia: 'https://yo.wikipedia.org',
  yowiktionary: 'https://yo.wiktionary.org',
  yowikibooks: 'https://yo.wikibooks.org',
  zawiki: 'https://za.wikipedia.org',
  zawikipedia: 'https://za.wikipedia.org',
  zawiktionary: 'https://za.wiktionary.org',
  zawikibooks: 'https://za.wikibooks.org',
  zawikiquote: 'https://za.wikiquote.org',
  zeawiki: 'https://zea.wikipedia.org',
  zeawikipedia: 'https://zea.wikipedia.org',
  zhwiki: 'https://zh.wikipedia.org',
  zhwikipedia: 'https://zh.wikipedia.org',
  zhwiktionary: 'https://zh.wiktionary.org',
  zhwikibooks: 'https://zh.wikibooks.org',
  zhwikinews: 'https://zh.wikinews.org',
  zhwikiquote: 'https://zh.wikiquote.org',
  zhwikisource: 'https://zh.wikisource.org',
  zhwikiversity: 'https://zh.wikiversity.org',
  zhwikivoyage: 'https://zh.wikivoyage.org',
  zh_classicalwiki: 'https://zh-classical.wikipedia.org',
  zh_classicalwikipedia: 'https://zh-classical.wikipedia.org',
  zh_min_nanwiki: 'https://zh-min-nan.wikipedia.org',
  zh_min_nanwikipedia: 'https://zh-min-nan.wikipedia.org',
  zh_min_nanwiktionary: 'https://zh-min-nan.wiktionary.org',
  zh_min_nanwikibooks: 'https://zh-min-nan.wikibooks.org',
  zh_min_nanwikiquote: 'https://zh-min-nan.wikiquote.org',
  zh_min_nanwikisource: 'https://zh-min-nan.wikisource.org',
  zh_yuewiki: 'https://zh-yue.wikipedia.org',
  zh_yuewikipedia: 'https://zh-yue.wikipedia.org',
  zuwiki: 'https://zu.wikipedia.org',
  zuwikipedia: 'https://zu.wikipedia.org',
  zuwiktionary: 'https://zu.wiktionary.org',
  zuwikibooks: 'https://zu.wikibooks.org'
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = site_map;
}


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/fetch.js":
/*!*************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/fetch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//grab the content of any article, off the api
const fetch = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
const site_map = __webpack_require__(/*! ./data/site_map */ "./node_modules/wtf_wikipedia/src/data/site_map.js");
const parseDocument = __webpack_require__(/*! ./01-document */ "./node_modules/wtf_wikipedia/src/01-document/index.js");
// const redirects = require('../parse/page/redirects');

function isArray(arr) {
  return arr.constructor.toString().indexOf('Array') > -1;
}

//construct a lookup-url for the wikipedia api
const makeUrl = function(title, lang, options) {
  lang = lang || 'en';
  let url = `https://${lang}.wikipedia.org/w/api.php`;
  if (site_map[lang]) {
    url = site_map[lang] + '/w/api.php';
  }
  //we use the 'revisions' api here, instead of the Raw api, for its CORS-rules..
  url += '?action=query&prop=revisions&rvprop=content&maxlag=5&format=json&origin=*';
  if (options.follow_redirects !== false) {
    url += '&redirects=true';
  }
  var lookup = 'titles';
  let pages = [];
  //support one, or many pages
  if (isArray(title) === false) {
    pages = [title];
  } else {
    pages = title;
  }
  //assume numbers mean pageid, and strings are titles (like '1984')
  if (typeof pages[0] === 'number') {
    lookup = 'pageids';
  } else {
    pages = pages.map((str) => {
      if (typeof str === 'string') {
        return encodeURIComponent(str);
      }
      return str;
    });
  }
  pages = pages.join('|');
  url += '&' + lookup + '=' + pages;
  return url;
};

//this data-format from mediawiki api is nutso
const postProcess = function(data, options) {
  let pages = Object.keys(data.query.pages);
  let docs = pages.map(id => {
    let page = data.query.pages[id] || {};
    if (page.hasOwnProperty('missing') || page.hasOwnProperty('invalid')) {
      return null;
    }
    let text = page.revisions[0]['*'];
    options.title = page.title;
    options.pageID = page.pageid;
    try {
      return parseDocument(text, options);
    } catch (e) {
      console.error(e);
      throw e
    }
  });
  //return an array if there was more than one page given
  if (docs.length > 1) {
    return docs;
  }
  //just return the first one
  return docs[0];
};


const getData = function(url, options) {
  let params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Api-User-Agent': options.userAgent || options['User-Agent'] || options['Api-User-Agent'] || 'Random user of the wtf_wikipedia library'
    },
  };
  return fetch(url, params).then((response) => {
    if (response.status !== 200) {
      throw response;
    }
    return response.json();
  }).catch(console.error);
};

const getPage = function(title, a, b, c) {
  //allow quite! flexible params
  let options = {};
  let lang = 'en';
  let callback = null;
  if (typeof a === 'function') {
    callback = a;
  } else if (typeof a === 'object') {
    options = a;
  } else if (typeof a === 'string') {
    lang = a;
  }
  if (typeof b === 'function') {
    callback = b;
  } else if (typeof b === 'object') {
    options = b;
  }
  if (typeof c === 'function') {
    callback = c;
  }
  let url = makeUrl(title, lang, options);
  return new Promise(function(resolve, reject) {
    let p = getData(url, options);

    p.then((wiki) => {
      return postProcess(wiki, options);
    }).then((doc) => {
      //support 'err-back' format
      if (callback && typeof callback === 'function') {
        callback(null, doc);
      }
      resolve(doc);
    }).catch(reject);
  });
};


module.exports = getPage;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/image/Image.js":
/*!*******************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/image/Image.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fetch = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
const toMarkdown = __webpack_require__(/*! ./toMarkdown */ "./node_modules/wtf_wikipedia/src/image/toMarkdown.js");
const toHtml = __webpack_require__(/*! ./toHtml */ "./node_modules/wtf_wikipedia/src/image/toHtml.js");
const toLatex = __webpack_require__(/*! ./toLatex */ "./node_modules/wtf_wikipedia/src/image/toLatex.js");
const server = 'https://wikipedia.org/wiki/Special:Redirect/file/';
const aliasList = __webpack_require__(/*! ../lib/aliases */ "./node_modules/wtf_wikipedia/src/lib/aliases.js");

const encodeTitle = function(file) {
  let title = file.replace(/^(image|file?)\:/i, '');
  //titlecase it
  title = title.charAt(0).toUpperCase() + title.substring(1);
  //spaces to underscores
  title = title.trim().replace(/ /g, '_');
  return title;
};

//the wikimedia image url is a little silly:
const makeSrc = function(file) {
  let title = encodeTitle(file);
  title = encodeURIComponent(title);
  return title;
};

//the class for our image generation functions
const Image = function(data) {
  Object.defineProperty(this, 'data', {
    enumerable: false,
    value: data
  });
};

const methods = {
  file() {
    return this.data.file || '';
  },
  alt() {
    let str = this.data.alt || this.data.file || '';
    str = str.replace(/^(file|image):/i, '');
    str = str.replace(/\.(jpg|jpeg|png|gif|svg)/i, '');
    return str.replace(/_/g, ' ');
  },
  caption() {
    return this.data.text || '';
  },
  links() {
    return []; //not ready yet
  },
  url() {
    return server + makeSrc(this.file());
  },
  thumbnail(size) {
    size = size || 300;
    let path = makeSrc(this.file());
    return server + path + '?width=' + size;
  },
  format() {
    let arr = this.file().split('.');
    if (arr[arr.length - 1]) {
      return arr[arr.length - 1].toLowerCase();
    }
    return null;
  },
  exists(callback) { //check if the image (still) exists
    return new Promise((cb) => {
      fetch(this.url(), {
        method: 'HEAD',
      }).then(function(res) {
        const exists = res.status === 200;
        //support callback non-promise form
        if (callback) {
          callback(exists);
        }
        cb(exists);
      });
    });
  },
  markdown : function(options) {
    options = options || {};
    return toMarkdown(this, options);
  },
  latex : function(options) {
    return toLatex(this, options);
  },
  html : function(options) {
    options = options || {};
    return toHtml(this, options);
  },
  json: function() {
    return {
      file: this.file(),
      url: this.url(),
      thumb: this.thumbnail(),
    };
  },
  text: function() {
    return '';
  }
};

Object.keys(methods).forEach((k) => {
  Image.prototype[k] = methods[k];
});
//add alises, too
Object.keys(aliasList).forEach((k) => {
  Image.prototype[k] = methods[aliasList[k]];
});
Image.prototype.src = Image.prototype.url;
Image.prototype.thumb = Image.prototype.thumbnail;
module.exports = Image;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/image/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/image/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const i18n = __webpack_require__(/*! ../data/i18n */ "./node_modules/wtf_wikipedia/src/data/i18n.js");
const Image = __webpack_require__(/*! ./Image */ "./node_modules/wtf_wikipedia/src/image/Image.js");
const parseSentence = __webpack_require__(/*! ../04-sentence */ "./node_modules/wtf_wikipedia/src/04-sentence/index.js").oneSentence;
const isFile = new RegExp('(' + i18n.images.concat(i18n.files).join('|') + '):', 'i');
let fileNames = `(${i18n.images.concat(i18n.files).join('|')})`;
const file_reg = new RegExp(fileNames + ':(.+?)[\\||\\]]', 'i');

//style directives for Wikipedia:Extended_image_syntax
const imgLayouts = {
  thumb: true,
  thumbnail: true,
  border: true,
  right: true,
  left: true,
  center: true,
  top: true,
  bottom: true,
  none: true,
  upright: true,
  baseline: true,
  middle: true,
  sub: true,
  super: true,
};

//images are usually [[image:my_pic.jpg]]
const oneImage = function(img) {
  let m = img.match(file_reg);
  if (m === null || !m[2]) {
    return null;
  }
  let file = `${m[1]}:${m[2] || ''}`;
  file = file.trim();
  //titlecase it
  let title = file.charAt(0).toUpperCase() + file.substring(1);
  //spaces to underscores
  title = title.replace(/ /g, '_');
  if (title) {
    let obj = {
      file: file
    };
    //try to grab other metadata, too
    img = img.replace(/^\[\[/, '');
    img = img.replace(/\]\]$/, '');
    //https://en.wikipedia.org/wiki/Wikipedia:Extended_image_syntax
    // [[File:Name|Type|Border|Location|Alignment|Size|link=Link|alt=Alt|lang=Langtag|Caption]]
    let arr = img.split('|');
    arr = arr.slice(1);
    //remove 'thumb' and things
    arr = arr.filter((str) => imgLayouts.hasOwnProperty(str) === false);
    if (arr[arr.length - 1]) {
      obj.caption = parseSentence(arr[arr.length - 1]);
    }
    return new Image(obj, img);
  }
  return null;
};

// console.log(parse_image("[[image:my_pic.jpg]]"));


const parseImages = function(matches, r, wiki) {
  matches.forEach(function(s) {
    if (isFile.test(s) === true) {
      r.images = r.images || [];
      let img = oneImage(s);
      if (img) {
        r.images.push(img);
      }
      wiki = wiki.replace(s, '');
    }
  });
  return wiki;
};
module.exports = parseImages;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/image/toHtml.js":
/*!********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/image/toHtml.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const makeImage = (img) => {
  return '  <img src="' + img.thumbnail() + '" alt="' + img.alt() + '"/>';
};
module.exports = makeImage;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/image/toLatex.js":
/*!*********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/image/toLatex.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
const toLatex = function(image) {
  let alt = image.alt();
  var out = '\\begin{figure}';
  out += '\n\\includegraphics[width=\\linewidth]{' + image.thumb() + '}';
  out += '\n\\caption{' + alt + '}';
  // out += '\n%\\label{fig:myimage1}';
  out += '\n\\end{figure}';
  return out;
};
module.exports = toLatex;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/image/toMarkdown.js":
/*!************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/image/toMarkdown.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//markdown images are like this: ![alt text](href)
const doImage = (image) => {
  let alt = image.data.file.replace(/^(file|image):/i, '');
  alt = alt.replace(/\.(jpg|jpeg|png|gif|svg)/i, '');
  return '![' + alt + '](' + image.thumbnail() + ')';
};
module.exports = doImage;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fetch = __webpack_require__(/*! ./fetch */ "./node_modules/wtf_wikipedia/src/fetch.js");
const version = __webpack_require__(/*! ../package */ "./node_modules/wtf_wikipedia/package.json").version;
const parseDocument = __webpack_require__(/*! ./01-document/index.js */ "./node_modules/wtf_wikipedia/src/01-document/index.js");

//the main 'factory' exported method
const wtf = function(wiki, options) {
  return parseDocument(wiki, options);
};
wtf.fetch = function(title, lang, options, cb) {
  return fetch(title, lang, options, cb);
};
wtf.version = version;

module.exports = wtf;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/infobox/Infobox.js":
/*!***********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/infobox/Infobox.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const toMarkdown = __webpack_require__(/*! ./toMarkdown */ "./node_modules/wtf_wikipedia/src/infobox/toMarkdown.js");
const toHtml = __webpack_require__(/*! ./toHtml */ "./node_modules/wtf_wikipedia/src/infobox/toHtml.js");
const toLatex = __webpack_require__(/*! ./toLatex */ "./node_modules/wtf_wikipedia/src/infobox/toLatex.js");
const toJson = __webpack_require__(/*! ./toJson */ "./node_modules/wtf_wikipedia/src/infobox/toJson.js");
const Image = __webpack_require__(/*! ../image/Image */ "./node_modules/wtf_wikipedia/src/image/Image.js");
const aliasList = __webpack_require__(/*! ../lib/aliases */ "./node_modules/wtf_wikipedia/src/lib/aliases.js");

//a formal key-value data table about a topic
const Infobox = function(obj) {
  this._type = obj.type;
  Object.defineProperty(this, 'data', {
    enumerable: false,
    value: obj.data
  });
};

const methods = {
  type: function() {
    return this._type;
  },
  links: function(n) {
    let arr = [];
    Object.keys(this.data).forEach((k) => {
      this.data[k].links().forEach((l) => arr.push(l));
    });
    if (typeof n === 'number') {
      return arr[n];
    } else if (typeof n === 'string') { //grab a link like .links('Fortnight')
      n = n.charAt(0).toUpperCase() + n.substring(1); //titlecase it
      let link = arr.find(o => o.page === n);
      return link === undefined ? [] : [link];
    }
    return arr;
  },
  image: function() {
    let s = this.get('image');
    if (!s) {
      return null;
    }
    let obj = s.json();
    obj.file = obj.text;
    obj.text = '';
    return new Image(obj);
  },
  get : function(key) {
    key = key.toLowerCase();
    let keys = Object.keys(this.data);
    for(let i = 0; i < keys.length; i += 1) {
      let tmp = keys[i].toLowerCase().trim();
      if (key === tmp) {
        return this.data[keys[i]];
      }
    }
    return null;
  },
  markdown : function(options) {
    options = options || {};
    return toMarkdown(this, options);
  },
  html : function(options) {
    options = options || {};
    return toHtml(this, options);
  },
  latex : function(options) {
    options = options || {};
    return toLatex(this, options);
  },
  text : function() {
    return '';
  },
  json : function(options) {
    options = options || {};
    return toJson(this, options);
  },
  keyValue : function() {
    return Object.keys(this.data).reduce((h, k) => {
      if (this.data[k]) {
        h[k] = this.data[k].text();
      }
      return h;
    }, {});
  }
};
//aliases

Object.keys(methods).forEach((k) => {
  Infobox.prototype[k] = methods[k];
});
//add alises, too
Object.keys(aliasList).forEach((k) => {
  Infobox.prototype[k] = methods[aliasList[k]];
});
Infobox.prototype.data = Infobox.prototype.keyValue;
Infobox.prototype.template = Infobox.prototype.type;
Infobox.prototype.images = Infobox.prototype.image;
module.exports = Infobox;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/infobox/_skip-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/infobox/_skip-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  image: true,
  caption: true,
  alt: true,
  signature: true,
  'signature alt': true,
};


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/infobox/toHtml.js":
/*!**********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/infobox/toHtml.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dontDo = __webpack_require__(/*! ./_skip-keys */ "./node_modules/wtf_wikipedia/src/infobox/_skip-keys.js");
const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const defaults = {
  images: true,
};

//
const infobox = function(obj, options) {
  options = setDefaults(options, defaults);
  let html = '<table class="infobox">\n';
  html += '  <thead>\n';
  html += '  </thead>\n';
  html += '  <tbody>\n';
  //put image and caption on the top
  if (options.images === true && obj.data.image) {
    html += '    <tr>\n';
    html += '       <td colspan="2" style="text-align:center">\n';
    html += '       ' + obj.image().html() + '\n';
    html += '       </td>\n';
    if (obj.data.caption || obj.data.alt) {
      let caption = obj.data.caption ? obj.data.caption.html(options) : obj.data.alt.html(options);
      html += '       <td colspan="2" style="text-align:center">\n';
      html += '         ' + caption + '\n';
      html += '       </td>\n';
    }
    html += '    </tr>\n';
  }
  Object.keys(obj.data).forEach((k) => {
    if (dontDo[k] === true) {
      return;
    }
    let s = obj.data[k];
    let key = k.replace(/_/g, ' ');
    key = key.charAt(0).toUpperCase() + key.substring(1); //titlecase it
    let val = s.html(options);
    html += '    <tr>\n';
    html += '      <td>' + key + '</td>\n';
    html += '      <td>' + val + '</td>\n';
    html += '    </tr>\n';
  });
  html += '  </tbody>\n';
  html += '</table>\n';
  return html;
};
module.exports = infobox;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/infobox/toJson.js":
/*!**********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/infobox/toJson.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const encode = __webpack_require__(/*! ../lib/encode */ "./node_modules/wtf_wikipedia/src/lib/encode.js");

//turn an infobox into some nice json
const toJson = function(infobox, options) {
  let json = Object.keys(infobox.data).reduce((h, k) => {
    if (infobox.data[k]) {
      h[k] = infobox.data[k].json();
    }
    return h;
  }, {});

  //support mongo-encoding keys
  if (options.encode === true) {
    json = encode.encodeObj(json);
  }
  return json;
};
module.exports = toJson;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/infobox/toLatex.js":
/*!***********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/infobox/toLatex.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dontDo = __webpack_require__(/*! ./_skip-keys */ "./node_modules/wtf_wikipedia/src/infobox/_skip-keys.js");
const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const defaults = {
  images: true,
};

//
const infobox = function(obj, options) {
  options = setDefaults(options, defaults);
  let out = '\n \\vspace*{0.3cm} % Info Box\n\n';
  out += '\\begin{tabular}{|@{\\qquad}l|p{9.5cm}@{\\qquad}|} \n';
  out += '  \\hline  %horizontal line\n';
  //todo: render top image here
  Object.keys(obj.data).forEach((k) => {
    if (dontDo[k] === true) {
      return;
    }
    let s = obj.data[k];
    let val = s.latex(options);
    out += '  % ---------- \n';
    out += '      ' + k + ' & \n';
    out += '      ' + val + '\\\\ \n';
    out += '  \\hline  %horizontal line\n';
  });
  out += '\\end{tabular} \n';
  out += '\n\\vspace*{0.3cm}\n\n';
  return out;
};
module.exports = infobox;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/infobox/toMarkdown.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/infobox/toMarkdown.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dontDo = __webpack_require__(/*! ./_skip-keys */ "./node_modules/wtf_wikipedia/src/infobox/_skip-keys.js");
const pad = __webpack_require__(/*! ../lib/pad */ "./node_modules/wtf_wikipedia/src/lib/pad.js");
const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const defaults = {
  images: true,
};

// render an infobox as a table with two columns, key + value
const doInfobox = function(obj, options) {
  options = setDefaults(options, defaults);
  let md = '|' + pad('', 35) + '|' + pad('', 30) + '|\n';
  md += '|' + pad('---', 35) + '|' + pad('---', 30) + '|\n';
  //todo: render top image here (somehow)
  Object.keys(obj.data).forEach((k) => {
    if (dontDo[k] === true) {
      return;
    }
    let key = '**' + k + '**';
    let s = obj.data[k];
    let val = s.markdown(options);
    //markdown is more newline-sensitive than wiki
    val = val.split(/\n/g).join(', ');
    md += '|' + pad(key, 35) + '|' + pad(val, 30) + ' |\n';
  });
  return md;
};
module.exports = doInfobox;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/lib/aliases.js":
/*!*******************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/lib/aliases.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//alternative names for methods in API
const aliasList = {
  toMarkdown: 'markdown',

  toHtml: 'html',
  HTML: 'html',

  toJSON: 'json',
  toJson: 'json',
  JSON: 'json',

  toLatex: 'latex',

  plaintext: 'text',

  wikiscript: 'wikitext',
  wiki: 'wikitext',
  original: 'wikitext'
};
module.exports = aliasList;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/lib/encode.js":
/*!******************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/lib/encode.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// dumpster-dive throws everything into mongodb  - github.com/spencermountain/dumpster-dive
// mongo has some opinions about what characters are allowed as keys and ids.
//https://stackoverflow.com/questions/12397118/mongodb-dot-in-key-name/30254815#30254815
const specialChar = /[\\\.$]/;

const encodeStr = function(str) {
  if (typeof str !== 'string') {
    str = '';
  }
  str = str.replace(/\\/g, '\\\\');
  str = str.replace(/^\$/, '\\u0024');
  str = str.replace(/\./g, '\\u002e');
  return str;
};

const encodeObj = function( obj = {} ) {
  let keys = Object.keys(obj);
  for(let i = 0; i < keys.length; i += 1) {
    if (specialChar.test(keys[i]) === true) {
      let str = encodeStr(keys[i]);
      if (str !== keys[i]) {
        obj[str] = obj[keys[i]];
        delete obj[keys[i]];
      }
    }
  }
  return obj;
};

module.exports = {
  encodeObj: encodeObj
};


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/lib/helpers.js":
/*!*******************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/lib/helpers.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var helpers = {
  capitalise: function(str) {
    if (str && typeof str === 'string') {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return '';
  },
  onlyUnique: function(value, index, self) {
    return self.indexOf(value) === index;
  },
  trim_whitespace: function(str) {
    if (str && typeof str === 'string') {
      str = str.replace(/^\s\s*/, '');
      str = str.replace(/\s\s*$/, '');
      str = str.replace(/ {2}/, ' ');
      str = str.replace(/\s, /, ', ');
      return str;
    }
    return '';
  }
};
module.exports = helpers;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/lib/pad.js":
/*!***************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/lib/pad.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//center-pad each cell, to make the table more legible
const pad = (str, cellWidth) => {
  str = str || '';
  str = String(str);
  cellWidth = cellWidth || 15;
  let diff = cellWidth - str.length;
  diff = Math.ceil(diff / 2);
  for(let i = 0; i < diff; i += 1) {
    str = ' ' + str;
    if (str.length < cellWidth) {
      str = str + ' ';
    }
  }
  return str;
};
module.exports = pad;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/lib/recursive_match.js":
/*!***************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/lib/recursive_match.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//find all the pairs of '[[...[[..]]...]]' in the text
//used to properly root out recursive template calls, [[.. [[...]] ]]
//basically just adds open tags, and subtracts closing tags
function find_recursive(opener, closer, text) {
  var out = [];
  var last = [];
  var chars = text.split('');
  var open = 0;
  for (var i = 0; i < chars.length; i++) {
    //increment open tag
    if (chars[i] === opener) {
      open += 1;
    }
    //decrement close tag
    if (chars[i] === closer) {
      open -= 1;
      if (open < 0) {
        open = 0;
      }
    }
    if (open >= 0) {
      last.push(chars[i]);
    }
    if (open === 0 && last.length > 0) {
      //first, fix botched parse
      var open_count = last.filter(function(s) {
        return s === opener;
      });
      var close_count = last.filter(function(s) {
        return s === closer;
      });
      //is it botched?
      if (open_count.length > close_count.length) {
        last.push(closer);
      }
      //looks good, keep it
      out.push(last.join(''));
      last = [];
    }
  }
  return out;
}
module.exports = find_recursive;

// console.log(find_recursive('{', '}', 'he is president. {{nowrap|{{small|(1995–present)}}}} he lives in texas'));
// console.log(find_recursive("{", "}", "this is fun {{nowrap{{small1995–present}}}} and it works"))


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js":
/*!***********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/lib/setDefaults.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//
const setDefaults = function(options, defaults) {
  let obj = {};
  defaults = defaults || {};
  Object.keys(defaults).forEach((k) => {
    obj[k] = defaults[k];
  });
  options = options || {};
  Object.keys(options).forEach((k) => {
    obj[k] = options[k];
  });
  return obj;
};
module.exports = setDefaults;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/lib/smartReplace.js":
/*!************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/lib/smartReplace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//escape a string like 'fun*2.Co' for a regExpr
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

//sometimes text-replacements can be ambiguous - words used multiple times..
const smartReplace = function(all, text, result) {
  if (!text || !all) {
    return all;
  }

  if (typeof all === 'number') {
    all = String(all);
  }
  text = escapeRegExp(text);
  //try a word-boundary replace
  let reg = new RegExp('\\b' + text + '\\b');
  if (reg.test(all) === true) {
    all = all.replace(reg, result);
  } else {
    //otherwise, fall-back to a much messier, dangerous replacement
    // console.warn('missing \'' + text + '\'');
    all = all.replace(text, result);
  }
  return all;
};

module.exports = smartReplace;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/list/List.js":
/*!*****************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/list/List.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const aliasList = __webpack_require__(/*! ../lib/aliases */ "./node_modules/wtf_wikipedia/src/lib/aliases.js");
const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const toJson = __webpack_require__(/*! ./toJson */ "./node_modules/wtf_wikipedia/src/list/toJson.js");
const toMarkdown = __webpack_require__(/*! ./toMarkdown */ "./node_modules/wtf_wikipedia/src/list/toMarkdown.js");
const toHtml = __webpack_require__(/*! ./toHtml */ "./node_modules/wtf_wikipedia/src/list/toHtml.js");
const toLatex = __webpack_require__(/*! ./toLatex */ "./node_modules/wtf_wikipedia/src/list/toLatex.js");
const defaults = {};

const toText = (list, options) => {
  return list.map((s) => {
    let str = s.text(options);
    return ' * ' + str;
  }).join('\n');
};

const List = function(data) {
  Object.defineProperty(this, 'data', {
    enumerable: false,
    value: data
  });
};

const methods = {
  lines() {
    return this.data;
  },
  links(n) {
    let links = [];
    this.lines().forEach((s) => {
      links = links.concat(s.links());
    });
    if (typeof n === 'number') {
      return links[n];
    } else if (typeof n === 'string') { //grab a link like .links('Fortnight')
      n = n.charAt(0).toUpperCase() + n.substring(1); //titlecase it
      let link = links.find(o => o.page === n);
      return link === undefined ? [] : [link];
    }
    return links;
  },
  markdown(options) {
    options = setDefaults(options, defaults);
    return toMarkdown(this, options);
  },
  html(options) {
    options = setDefaults(options, defaults);
    return toHtml(this, options);
  },
  latex(options) {
    options = setDefaults(options, defaults);
    return toLatex(this, options);
  },
  json(options) {
    options = setDefaults(options, defaults);
    return toJson(this, options);
  },
  text() {
    return toText(this.data);
  }
};

Object.keys(methods).forEach((k) => {
  List.prototype[k] = methods[k];
});
//add alises, too
Object.keys(aliasList).forEach((k) => {
  List.prototype[k] = methods[aliasList[k]];
});
module.exports = List;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/list/index.js":
/*!******************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/list/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const List = __webpack_require__(/*! ./List */ "./node_modules/wtf_wikipedia/src/list/List.js");
const parseSentence = __webpack_require__(/*! ../04-sentence/ */ "./node_modules/wtf_wikipedia/src/04-sentence/index.js").oneSentence;
const list_reg = /^[#\*:;\|]+/;
const bullet_reg = /^\*+[^:,\|]{4}/;
const number_reg = /^ ?\#[^:,\|]{4}/;
const has_word = /[a-z_0-9\]\}]/i;

// does it start with a bullet point or something?
const isList = function(line) {
  return list_reg.test(line) || bullet_reg.test(line) || number_reg.test(line);
};

//make bullets/numbers into human-readable *'s
const cleanList = function(list) {
  let number = 1;
  list = list.filter(l => l);
  for (var i = 0; i < list.length; i++) {
    var line = list[i];
    //add # numberings formatting
    if (line.match(number_reg)) {
      line = line.replace(/^ ?#*/, number + ') ');
      line = line + '\n';
      number += 1;
    } else if (line.match(list_reg)) {
      number = 1;
      line = line.replace(list_reg, '');
    }
    list[i] = parseSentence(line);
  }
  return list;
};

const grabList = function(lines, i) {
  let sub = [];
  for (let o = i; o < lines.length; o++) {
    if (isList(lines[o])) {
      sub.push(lines[o]);
    } else {
      break;
    }
  }
  sub = sub.filter(a => a && has_word.test(a));
  sub = cleanList(sub);
  return sub;
};

const parseList = function(wiki, data) {
  let lines = wiki.split(/\n/g);
  // lines = lines.filter(l => has_word.test(l));
  let lists = [];
  let theRest = [];
  for (let i = 0; i < lines.length; i++) {
    if (isList(lines[i]) && lines[i + 1] && isList(lines[i + 1])) {
      let sub = grabList(lines, i);
      if (sub.length > 0) {
        lists.push(sub);
        i += sub.length - 1;
      }
    } else {
      theRest.push(lines[i]);
    }
  }
  data.lists = lists.map((l) => new List(l));
  wiki = theRest.join('\n');
  return wiki;
};
module.exports = parseList;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/list/toHtml.js":
/*!*******************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/list/toHtml.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//
const toHtml = (list, options) => {
  let html = '  <ul class="list">\n';
  list.lines().forEach((s) => {
    html += '    <li>' + s.html(options) + '</li>\n';
  });
  html += '  </ul>\n';
  return html;
};
module.exports = toHtml;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/list/toJson.js":
/*!*******************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/list/toJson.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//
const toJson = function(p, options) {
  return p.lines().map(s => s.json(options));
};
module.exports = toJson;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/list/toLatex.js":
/*!********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/list/toLatex.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//
const toLatex = (list, options) => {
  let out = '\\begin{itemize}\n';
  list.lines().forEach((s) => {
    out += '  \\item ' + s.text(options) + '\n';
  });
  out += '\\end{itemize}\n';
  return out;
};
module.exports = toLatex;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/list/toMarkdown.js":
/*!***********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/list/toMarkdown.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//
const toMarkdown = (list, options) => {
  return list.lines().map((s) => {
    let str = s.markdown(options);
    return ' * ' + str;
  }).join('\n');
};
module.exports = toMarkdown;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/reference/Reference.js":
/*!***************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/reference/Reference.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const toLatex = __webpack_require__(/*! ./toLatex */ "./node_modules/wtf_wikipedia/src/reference/toLatex.js");
const toHtml = __webpack_require__(/*! ./toHtml */ "./node_modules/wtf_wikipedia/src/reference/toHtml.js");
const toMarkdown = __webpack_require__(/*! ./toJson */ "./node_modules/wtf_wikipedia/src/reference/toJson.js");
const toJson = __webpack_require__(/*! ./toJson */ "./node_modules/wtf_wikipedia/src/reference/toJson.js");
const defaults = {};

//also called 'citations'
const Reference = function(data) {
  Object.defineProperty(this, 'data', {
    enumerable: false,
    value: data
  });
};

const methods = {
  title: function() {
    let data = this.data;
    return data.title || data.encyclopedia || data.author || '';
  },
  links: function(n) {
    let arr = [];
    if (typeof n === 'number') {
      return arr[n];
    }
    //grab a specific link..
    if (typeof n === 'number') {
      return arr[n];
    } else if (typeof n === 'string') { //grab a link like .links('Fortnight')
      n = n.charAt(0).toUpperCase() + n.substring(1); //titlecase it
      let link = arr.find(o => o.page === n);
      return link === undefined ? [] : [link];
    }
    return arr || [];
  },
  text: function() {
    return ''; //nah, skip these.
  },
  markdown: function(options) {
    options = setDefaults(options, defaults);
    return toMarkdown(this, options);
  },
  html: function(options) {
    options = setDefaults(options, defaults);
    return toHtml(this, options);
  },
  latex: function(options) {
    options = setDefaults(options, defaults);
    return toLatex(this, options);
  },
  json: function(options) {
    options = setDefaults(options, defaults);
    return toJson(this, options);
  }
};
Object.keys(methods).forEach((k) => {
  Reference.prototype[k] = methods[k];
});
module.exports = Reference;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/reference/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/reference/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parseGeneric = __webpack_require__(/*! ../templates/parsers/generic */ "./node_modules/wtf_wikipedia/src/templates/parsers/generic.js");
const parsePipe = __webpack_require__(/*! ../templates/misc */ "./node_modules/wtf_wikipedia/src/templates/misc.js")['cite gnis'];
const parseSentence = __webpack_require__(/*! ../04-sentence */ "./node_modules/wtf_wikipedia/src/04-sentence/index.js").oneSentence;
const Reference = __webpack_require__(/*! ./Reference */ "./node_modules/wtf_wikipedia/src/reference/Reference.js");

//structured Cite templates - <ref>{{Cite..</ref>
const hasCitation = function(str) {
  return /^ *?\{\{ *?(cite|citation)/i.test(str) && /\}\} *?$/.test(str) && /citation needed/i.test(str) === false;
};

//might as well parse it, since we're here.
const parseCitation = function(tmpl) {
  let obj = parseGeneric(tmpl);
  if (obj) {
    return obj;
  }
  //support {{cite gnis|98734}} format
  return parsePipe(tmpl);
};

//handle unstructured ones - <ref>some text</ref>
const parseInline = function(str) {
  let obj = parseSentence(str) || {};
  return {
    template: 'citation',
    type: 'inline',
    data: {},
    inline: obj
  };
};

// parse <ref></ref> xml tags
const parseRefs = function(wiki, data) {
  let references = [];
  wiki = wiki.replace(/ ?<ref>([\s\S]{0,1000}?)<\/ref> ?/gi, function(a, tmpl) {
    if (hasCitation(tmpl)) {
      let obj = parseCitation(tmpl);
      if (obj) {
        references.push(obj);
      }
      wiki = wiki.replace(tmpl, '');
    } else {
      references.push(parseInline(tmpl));
    }
    return ' ';
  });
  // <ref name=""/>
  wiki = wiki.replace(/ ?<ref [^>]{0,200}?\/> ?/gi, ' ');
  // <ref name=""></ref>
  wiki = wiki.replace(/ ?<ref [^>]{0,200}?>([\s\S]{0,1000}?)<\/ref> ?/gi, function(a, tmpl) {
    if (hasCitation(tmpl)) {
      let obj = parseCitation(tmpl);
      if (obj) {
        references.push(obj);
      }
      wiki = wiki.replace(tmpl, '');
    } else {
      references.push(parseInline(tmpl));
    }
    return ' ';
  });
  //now that we're done with xml, do a generic + dangerous xml-tag removal
  wiki = wiki.replace(/ ?<[ \/]?[a-z0-9]{1,8}[a-z0-9=" ]{2,20}[ \/]?> ?/g, ' '); //<samp name="asd">
  data.references = references.map(r => new Reference(r));
  return wiki;
};
module.exports = parseRefs;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/reference/toHtml.js":
/*!************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/reference/toHtml.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//
const toHtml = function(c, options) {
  if (c.data && c.data.url && c.data.title) {
    let str = c.data.title;
    if (options.links === true) {
      str = `<a href="${c.data.url}">${str}</a>`;
    }
    return `<div class="reference">⌃ ${str} </div>`;
  }
  if (c.data.encyclopedia) {
    return `<div class="reference">⌃ ${c.data.encyclopedia}</div>`;
  }
  if (c.data.title) { //cite book, etc
    let str = c.data.title;
    if (c.data.author) {
      str += c.data.author;
    }
    if (c.data.first && c.data.last) {
      str += c.data.first + ' ' + c.data.last;
    }
    return `<div class="reference">⌃ ${str}</div>`;
  }
  if (c.inline) {
    return `<div class="reference">⌃ ${c.inline.html()}</div>`;
  }
  return '';
};
module.exports = toHtml;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/reference/toJson.js":
/*!************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/reference/toJson.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//
const toJson = function(c) {
  return c.data;
};
module.exports = toJson;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/reference/toLatex.js":
/*!*************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/reference/toLatex.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//not so impressive right now
const toLatex = function(c) {
  let str = c.title();
  return '⌃ ' + str + '\n';
};
module.exports = toLatex;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/table/Table.js":
/*!*******************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/table/Table.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const setDefaults = __webpack_require__(/*! ../lib/setDefaults */ "./node_modules/wtf_wikipedia/src/lib/setDefaults.js");
const toHtml = __webpack_require__(/*! ./toHtml */ "./node_modules/wtf_wikipedia/src/table/toHtml.js");
const toMarkdown = __webpack_require__(/*! ./toMarkdown */ "./node_modules/wtf_wikipedia/src/table/toMarkdown.js");
const toLatex = __webpack_require__(/*! ./toLatex */ "./node_modules/wtf_wikipedia/src/table/toLatex.js");
const toJson = __webpack_require__(/*! ./toJson */ "./node_modules/wtf_wikipedia/src/table/toJson.js");
const aliasList = __webpack_require__(/*! ../lib/aliases */ "./node_modules/wtf_wikipedia/src/lib/aliases.js");
const defaults = {};

const Table = function(data) {
  Object.defineProperty(this, 'data', {
    enumerable: false,
    value: data
  });
};

const methods = {
  links(n) {
    let links = [];
    this.data.forEach((r) => {
      Object.keys(r).forEach((k) => {
        links = links.concat(r[k].links());
      });
    });
    //grab a specific link..
    if (typeof n === 'number') {
      return links[n];
    } else if (typeof n === 'string') { //grab a link like .links('Fortnight')
      n = n.charAt(0).toUpperCase() + n.substring(1); //titlecase it
      let link = links.find(o => o.page === n);
      return link === undefined ? [] : [link];
    }
    return links;
  },
  keyValue(options) {
    let rows = this.json(options);
    rows.forEach((row) => {
      Object.keys(row).forEach((k) => {
        row[k] = row[k].text;
      });
    });
    return rows;
  },
  json(options) {
    options = setDefaults(options, defaults);
    return toJson(this.data, options);
  },
  html(options) {
    options = setDefaults(options, defaults);
    return toHtml(this.data, options);
  },
  markdown(options) {
    options = setDefaults(options, defaults);
    return toMarkdown(this.data, options);
  },
  latex(options) {
    options = setDefaults(options, defaults);
    return toLatex(this.data, options);
  },
  text() {
    return '';
  }
};
Object.keys(methods).forEach((k) => {
  Table.prototype[k] = methods[k];
});
//add alises, too
Object.keys(aliasList).forEach((k) => {
  Table.prototype[k] = methods[aliasList[k]];
});
module.exports = Table;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/table/findRows.js":
/*!**********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/table/findRows.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//remove top-bottoms
const cleanup = function(lines) {
  lines = lines.filter(line => {
    //a '|+' row is a 'table caption', remove it.
    return line && /^\|\+/.test(line) !== true;
  });
  if (/^{\|/.test(lines[0]) === true) {
    lines.shift();
  }
  if (/^\|}/.test(lines[lines.length - 1]) === true) {
    lines.pop();
  }
  if (/^\|-/.test(lines[0]) === true) {
    lines.shift();
  }
  return lines;
};

//turn newline seperated into '|-' seperated
const findRows = function(lines) {
  let rows = [];
  let row = [];
  lines = cleanup(lines);
  for(let i = 0; i < lines.length; i += 1) {
    let line = lines[i];
    //'|-' is a row-seperator
    if (/^\|-/.test(line) === true) {
      //okay, we're done the row
      if (row.length > 0) {
        rows.push(row);
        row = [];
      }
    } else {
      //look for '||' inline row-splitter
      line = line.split(/(?:\|\||!!)/);
      line.forEach((l) => {
        l = l.replace(/^\| */, '');
        l = l.trim();
        row.push(l);
      });
    }
  }
  //finish the last one
  if (row.length > 0) {
    rows.push(row);
  }
  return rows;
};
module.exports = findRows;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/table/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/table/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parseTable = __webpack_require__(/*! ./parseTable */ "./node_modules/wtf_wikipedia/src/table/parseTable.js");
const Table = __webpack_require__(/*! ./Table */ "./node_modules/wtf_wikipedia/src/table/Table.js");
// const table_reg = /\{\|[\s\S]+?\|\}/g; //the largest-cities table is ~70kchars.
const openReg = /^\s*{\|/;
const closeReg = /^\s*\|}/;

//tables can be recursive, so looky-here.
const findTables = function(section, wiki) {
  let list = [];
  let lines = wiki.split('\n');
  let stack = [];
  for (let i = 0; i < lines.length; i += 1) {
    //start a table
    if (openReg.test(lines[i]) === true) {
      stack.push(lines[i]);
      continue;
    }
    //close a table
    if (closeReg.test(lines[i]) === true) {
      stack[stack.length - 1] += '\n' + lines[i];
      let table = stack.pop();
      list.push(table);
      continue;
    }
    //keep-going on one
    if (stack.length > 0) {
      stack[stack.length - 1] += '\n' + lines[i];
    }
  }
  //work-em together for a Table class
  let tables = [];
  list.forEach(str => {
    if (str) {
      //also reremove a newline at the end of the table (awkward)
      wiki = wiki.replace(str + '\n', '');
      wiki = wiki.replace(str, '');
      let data = parseTable(str);
      if (data && data.length > 0) {
        tables.push(new Table(data));
      }
    }
  });

  if (tables.length > 0) {
    section.tables = tables;
  }
  return wiki;
};

module.exports = findTables;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/table/parseTable.js":
/*!************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/table/parseTable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parseSentence = __webpack_require__(/*! ../04-sentence/ */ "./node_modules/wtf_wikipedia/src/04-sentence/index.js").oneSentence;
const findRows = __webpack_require__(/*! ./findRows */ "./node_modules/wtf_wikipedia/src/table/findRows.js");

//additional table-cruft to remove before parseLine method
const cleanText = function(str) {
  //anything before a single-pipe is styling, so remove it
  if (str.match(/\|/)) {
    str = str.replace(/.+\| ?/, ''); //class="unsortable"|title
  }
  str = str.replace(/style=".*?"/, '');
  //'!' is used as a highlighed-column
  str = str.replace(/^!/, '');
  return str;
};

//'!' starts a header-row
const findHeaders = function(rows) {
  let headings = [];
  let first = rows[0];
  if (first && first[0] && /^!/.test(first[0]) === true) {
    headings = first.map((h) => {
      h = h.replace(/^\! */, '');
      h = cleanText(h);
      return h;
    });
    rows.shift();
  }
  return headings;
};

//turn a {|...table string into an array of arrays
const parseTable = function(wiki) {
  let lines = wiki.replace(/\r/g, '').split(/\n/);
  lines = lines.map(l => l.trim());
  let rows = findRows(lines);
  let headers = findHeaders(rows);
  //index them by their header
  let table = rows.map(arr => {
    let row = {};
    arr.forEach((str, i) => {
      let header = headers[i] || 'col' + (i + 1);
      let cell = parseSentence(str);
      cell.text(cleanText(cell.text()));
      row[header] = cell;
    });
    return row;
  });
  return table;
};

module.exports = parseTable;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/table/toHtml.js":
/*!********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/table/toHtml.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//turn a json table into a html table
const toHtml = function(table, options) {
  let html = '<table class="table">\n';
  //make header
  html += '  <thead>\n';
  html += '  <tr>\n';
  Object.keys(table[0]).forEach((k) => {
    if (/^col[0-9]/.test(k) !== true) {
      html += '    <td>' + k + '</td>\n';
    }
  });
  html += '  </tr>\n';
  html += '  </thead>\n';
  html += '  <tbody>\n';
  //make rows
  table.forEach((o) => {
    html += '  <tr>\n';
    Object.keys(o).forEach((k) => {
      let val = o[k].html(options);
      html += '    <td>' + val + '</td>\n';
    });
    html += '  </tr>\n';
  });
  html += '  </tbody>\n';
  html += '</table>\n';
  return html;
};
module.exports = toHtml;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/table/toJson.js":
/*!********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/table/toJson.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const encode = __webpack_require__(/*! ../lib/encode */ "./node_modules/wtf_wikipedia/src/lib/encode.js");
//
const toJson = function(tables, options) {
  return tables.map((table) => {
    let row = {};
    Object.keys(table).forEach((k) => {
      row[k] = table[k].json(); //(they're sentence objects)
    });
    //encode them, for mongodb
    if (options.encode === true) {
      row = encode.encodeObj(row);
    }
    return row;
  });
};
module.exports = toJson;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/table/toLatex.js":
/*!*********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/table/toLatex.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


const doTable = function(table, options) {
  let out = '\n%\\vspace*{0.3cm}\n';
  out += '\n% BEGIN TABLE: only left align columns in LaTeX table with horizontal line separation between columns';
  out += '\n% Format Align Column: \'l\'=left \'r\'=right align, \'c\'=center, \'p{5cm}\'=block with column width 5cm ';
  out += '\n\\begin{tabular}{|';
  Object.keys(table[0]).forEach(() => {
    out += 'l|';
  });
  out += '} \n';
  out += '\n  \\hline  %horizontal line\n';
  //make header
  out += '\n  % BEGIN: Table Header';
  var vSep = '   ';
  Object.keys(table[0]).forEach((k) => {
    out += '\n    ' + vSep;

    if (k.indexOf('col-') === 0) {
      out += '\\textbf{' + k + '}';
    } else {
      out += '  ';
    }
    vSep = ' & ';
  });
  out += '\\\\ ';
  out += '\n  % END: Table Header';
  out += '\n  % BEGIN: Table Body';
  out += '\n  \\hline  % ----- table row -----';
  ////make rows
  table.forEach((o) => {
    vSep = ' ';
    out += '\n  % ----- table row -----';
    Object.keys(o).forEach((k) => {
      let s = o[k];
      let val = s.latex(options);
      out += '\n    ' + vSep + val + '';
      vSep = ' & ';
    });
    out += '  \\\\ '; // newline in latex table = two backslash \\
    out += '\n  \\hline  %horizontal line';
  });
  out += '\n    % END: Table Body';
  out += '\\end{tabular} \n';
  out += '\n\\vspace*{0.3cm}\n\n';
  return out;
};
module.exports = doTable;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/table/toMarkdown.js":
/*!************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/table/toMarkdown.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const pad = __webpack_require__(/*! ../lib/pad */ "./node_modules/wtf_wikipedia/src/lib/pad.js");
/* this is a markdown table:
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
*/

const makeRow = (arr) => {
  arr = arr.map(s => pad(s, 14));
  return '| ' + arr.join(' | ') + ' |';
};

//markdown tables are weird
const doTable = (table, options) => {
  let md = '';
  if (!table || table.length === 0) {
    return md;
  }
  let keys = Object.keys(table[0]);
  //first, grab the headers
  //remove auto-generated number keys
  let headers = keys.map((k) => {
    if (/^col[0-9]/.test(k) === true) {
      return '';
    }
    return k;
  });
  //draw the header (necessary!)
  md += makeRow(headers) + '\n';
  md += makeRow(['---', '---', '---']) + '\n';
  //do each row..
  md += table.map((row) => {
    //each column..
    let arr = keys.map((k) => {
      if (!row[k]) {
        return '';
      }
      return row[k].markdown(options) || '';
    });
    //make it a nice padded row
    return makeRow(arr);
  }).join('\n');
  return md + '\n';
};
module.exports = doTable;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/currencies.js":
/*!****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/currencies.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const pipeSplit = __webpack_require__(/*! ./parsers/pipeSplit */ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeSplit.js");

const codes = {
  us$: 'US$', // https://en.wikipedia.org/wiki/Template:US$
  bdt: '৳', // https://en.wikipedia.org/wiki/Template:BDT
  a$: 'A$', // https://en.wikipedia.org/wiki/Template:AUD
  ca$: 'CA$', // https://en.wikipedia.org/wiki/Template:CAD
  cny: 'CN¥', // https://en.wikipedia.org/wiki/Template:CNY
  hkd: 'HK$', // https://en.wikipedia.org/wiki/Template:HKD
  gbp: 'GB£', // https://en.wikipedia.org/wiki/Template:GBP
  '₹': '₹', // https://en.wikipedia.org/wiki/Template:Indian_Rupee
  '¥': '¥', // https://en.wikipedia.org/wiki/Template:JPY
  jpy: '¥',
  yen: '¥',
  '₱': '₱', // https://en.wikipedia.org/wiki/Template:Philippine_peso
  pkr: '₨', // https://en.wikipedia.org/wiki/Template:Pakistani_Rupee
  '€': '€', // https://en.wikipedia.org/wiki/Template:€
  'euro': '€',
  'nz$': 'NZ$',
  'nok': 'kr', //https://en.wikipedia.org/wiki/Template:NOK
  'aud': 'A$', //https://en.wikipedia.org/wiki/Template:AUD
  'zar': 'R', //https://en.wikipedia.org/wiki/Template:ZAR
};

const parseCurrency = (tmpl, r) => {
  let o = pipeSplit(tmpl, ['amount', 'code']);
  r.templates.push(o);
  let code = o.template || '';
  if (code === '' || code === 'currency') {
    code = o.code;
  }
  code = code.toLowerCase();
  let out = codes[code] || '';
  return `${out}${o.amount || ''}`;
};

const currencies = {
  //this one is generic https://en.wikipedia.org/wiki/Template:Currency
  currency: parseCurrency
};
//the others fit the same pattern..
Object.keys(codes).forEach((k) => {
  currencies[k] = parseCurrency;
});


module.exports = currencies;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/dates/dates.js":
/*!*****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/dates/dates.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//assorted parsing methods for date/time templates
const months = [
  undefined, //1-based months.. :/
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const monthName = months.reduce((h, str, i) => {
  if (i === 0) {
    return h;
  }
  h[str.toLowerCase()] = i;
  return h;
}, {});

//parse year|month|date numbers
const ymd = function(arr) {
  let obj = {};
  let units = ['year', 'month', 'date', 'hour', 'minute', 'second'];
  //parse each unit in sequence..
  for(let i = 0; i < units.length; i += 1) {
    //skip it
    if (!arr[i] && arr[1] !== 0) {
      continue;
    }
    let num = parseInt(arr[i], 10);
    if (isNaN(num) === false) {
      obj[units[i]] = num; //we good.
    } else if (units[i] === 'month' && monthName.hasOwnProperty(arr[i])) { //try for month-name, like 'january
      let month = monthName[arr[i]];
      obj[units[i]] = month;
    } else { //we dead. so skip this unit
      delete obj[units[i]];
    }
  }
  //try for timezone,too ftw
  let last = arr[arr.length - 1] || '';
  last = String(last);
  if (last.toLowerCase() === 'z') {
    obj.tz = 'UTC';
  } else if (/[+-][0-9]+:[0-9]/.test(last)) {
    obj.tz = arr[6];
  }
  return obj;
};

//zero-pad a number
const pad = function(num) {
  if (num < 10) {
    return '0' + num;
  }
  return String(num);
};

const toText = function(date) {
  //eg '1995'
  let str = String(date.year || '');
  if (date.month !== undefined && months.hasOwnProperty(date.month) === true) {
    if (date.date === undefined) {
      //January 1995
      str = `${months[date.month]} ${date.year}`;
    } else {
      //January 5, 1995
      str = `${months[date.month]} ${date.date}, ${date.year}`;
      //add times, if available
      if (date.hour !== undefined && date.minute !== undefined) {
        let time = `${pad(date.hour)}:${pad(date.minute)}`;
        if (date.second !== undefined) {
          time = time + ':' + pad(date.second);
        }
        str = time + ', ' + str;
      //add timezone, if there, at the end in brackets
      }
      if (date.tz) {
        str += ` (${date.tz})`;
      }
    }
  }
  return str;
};

module.exports = {
  toText: toText,
  ymd: ymd,
};


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/dates/delta_date.js":
/*!**********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/dates/delta_date.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//this is allowed to be rough
const day = 1000 * 60 * 60 * 24;
const month = day * 30;
const year = day * 365;

const getEpoch = function(obj) {
  return new Date(`${obj.year}-${obj.month || 0}-${obj.date || 1}`).getTime();
};

//very rough!
const delta = function(from, to) {
  from = getEpoch(from);
  to = getEpoch(to);
  let diff = to - from;
  let obj = {};
  //get years
  let years = Math.floor(diff / year, 10);
  if (years > 0) {
    obj.years = years;
    diff -= (obj.years * year);
  }
  //get months
  let months = Math.floor(diff / month, 10);
  if (months > 0) {
    obj.months = months;
    diff -= (obj.months * month);
  }
  //get days
  let days = Math.floor(diff / day, 10);
  if (days > 0) {
    obj.days = days;
  // diff -= (obj.days * day);
  }
  return obj;
};

module.exports = delta;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/dates/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/dates/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parsers = __webpack_require__(/*! ./parsers */ "./node_modules/wtf_wikipedia/src/templates/dates/parsers.js");
const pipeSplit = __webpack_require__(/*! ../parsers/pipeSplit */ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeSplit.js");
const timeSince = __webpack_require__(/*! ./timeSince */ "./node_modules/wtf_wikipedia/src/templates/dates/timeSince.js");
const date = parsers.date;
const natural_date = parsers.natural_date;

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//date- templates we support
const templates = {
  currentday: () => {
    let d = new Date();
    return String(d.getDate());
  },
  currentdayname: () => {
    let d = new Date();
    return days[d.getDay()];
  },
  currentmonth: () => {
    let d = new Date();
    return months[d.getMonth()];
  },
  currentyear: () => {
    let d = new Date();
    return String(d.getFullYear());
  },
  monthyear: () => {
    let d = new Date();
    return months[d.getMonth()] + ' ' + d.getFullYear();
  },
  'monthyear-1': () => {
    let d = new Date();
    d.setMonth(d.getMonth() - 1);
    return months[d.getMonth()] + ' ' + d.getFullYear();
  },
  'monthyear+1': () => {
    let d = new Date();
    d.setMonth(d.getMonth() + 1);
    return months[d.getMonth()] + ' ' + d.getFullYear();
  },
  //Explictly-set dates - https://en.wikipedia.org/wiki/Template:Date
  date: (tmpl) => {
    let order = ['date', 'fmt'];
    return pipeSplit(tmpl, order).date;
  },
  'time ago': (tmpl) => {
    let order = ['date', 'fmt'];
    let time = pipeSplit(tmpl, order).date;
    return timeSince(time);
  },
  //sortable dates -
  dts: (tmpl) => {
    //remove formatting stuff, ewww
    tmpl = tmpl.replace(/\|format=[ymd]+/i, '');
    tmpl = tmpl.replace(/\|abbr=(on|off)/i, '');
    let order = ['year', 'month', 'date', 'bc'];
    let obj = pipeSplit(tmpl, order);
    if (obj.date && obj.month && obj.year) {
      //render 'june 5 2018'
      if (/[a-z]/.test(obj.month) === true) {
        return [obj.month, obj.date, obj.year].join(' ');
      }
      return [obj.year, obj.month, obj.date].join('-');
    }
    if (obj.month && obj.year) {
      return [obj.year, obj.month].join('-');
    }
    if (obj.year) {
      if (obj.year < 0) {
        obj.year = Math.abs(obj.year) + ' BC';
      }
      return obj.year;
    }
    return '';
  },
  //date/age/time templates
  'start': date,
  'end': date,
  'birth': date,
  'death': date,
  'start date': date,
  'end date': date,
  'birth date': date,
  'death date': date,
  'start date and age': date,
  'end date and age': date,
  'birth date and age': date,
  'death date and age': date,
  'birth date and given age': date,
  'death date and given age': date,
  'birth year and age': parsers.one_year,
  'death year and age': parsers.one_year,

  //this is insane (hyphen ones are different)
  'start-date': natural_date,
  'end-date': natural_date,
  'birth-date': natural_date,
  'death-date': natural_date,
  'birth-date and age': natural_date,
  'birth-date and given age': natural_date,
  'death-date and age': natural_date,
  'death-date and given age': natural_date,

  'birthdeathage': parsers.two_dates,
  'dob': date,
  'bda': date,
  // 'birth date and age2': date,

  'age': parsers.age,
  'age nts': parsers.age,
  'age in years': parsers['diff-y'],
  'age in years and months': parsers['diff-ym'],
  'age in years, months and days': parsers['diff-ymd'],
  'age in years and days': parsers['diff-yd'],
  'age in days': parsers['diff-d'],
  // 'age in years, months, weeks and days': true,
  // 'age as of date': true,

};
templates.localday = templates.currentday;
templates.localdayname = templates.currentdayname;
templates.localmonth = templates.currentmonth;
templates.localyear = templates.currentyear;
templates.currentmonthname = templates.currentmonth;
templates.currentmonthabbrev = templates.currentmonth;
module.exports = templates;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/dates/parsers.js":
/*!*******************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/dates/parsers.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const dates = __webpack_require__(/*! ./dates */ "./node_modules/wtf_wikipedia/src/templates/dates/dates.js");
const ymd = dates.ymd;
const toText = dates.toText;
const delta = __webpack_require__(/*! ./delta_date */ "./node_modules/wtf_wikipedia/src/templates/dates/delta_date.js");
const strip = function(tmpl) {
  tmpl = tmpl.replace(/^\{\{/, '');
  tmpl = tmpl.replace(/\}\}$/, '');
  return tmpl;
};

//wrap it up as a template
const template = function(date) {
  return {
    template: 'date',
    data: date
  };
};

const getBoth = function(tmpl) {
  tmpl = strip(tmpl);
  let arr = tmpl.split('|');
  let from = ymd(arr.slice(1, 4));
  let to = arr.slice(4, 7);
  //assume now, if 'to' is empty
  if (to.length === 0) {
    let d = new Date();
    to = [d.getFullYear(), d.getMonth(), d.getDate()];
  }
  to = ymd(to);
  return {
    from: from,
    to: to
  };
};

const parsers = {

  //generic {{date|year|month|date}} template
  date: (tmpl, r) => {
    tmpl = strip(tmpl);
    let arr = tmpl.split('|');
    arr = arr.slice(1, 8);
    //support 'df=yes|1894|7|26'
    if (arr[0] && /^df=/.test(arr[0])) {
      arr.shift();
    }
    let date = ymd(arr);
    date.text = toText(date); //make the replacement string
    if (date.text) {
      r.templates.push(template(date));
    }
    return date.text;
  },

  //support parsing of 'February 10, 1992'
  natural_date: (tmpl, r) => {
    tmpl = strip(tmpl);
    let arr = tmpl.split('|');
    let str = arr[1] || '';
    // - just a year
    let date = {};
    if (/^[0-9]{4}$/.test(str)) {
      date.year = parseInt(str, 10);
    } else {
      //parse the date, using the js date object (for now?)
      let txt = str.replace(/[a-z]+\/[a-z]+/i);
      txt = txt.replace(/[0-9]+:[0-9]+(am|pm)?/i);
      let d = new Date(txt);
      if (isNaN(d.getTime()) === false) {
        date.year = d.getFullYear();
        date.month = d.getMonth() + 1;
        date.date = d.getDate();
      }
    }
    r.templates.push(template(date));
    return str.trim();
  },

  //just grab the first value, and assume it's a year
  one_year: (tmpl, r) => {
    tmpl = strip(tmpl);
    let arr = tmpl.split('|');
    let str = arr[1] || '';
    let year = parseInt(str, 10);
    r.templates.push(template({
      year: year
    }));
    return str.trim();
  },

  //assume 'y|m|d' | 'y|m|d'
  two_dates: (tmpl, r) => {
    tmpl = strip(tmpl);
    let arr = tmpl.split('|');
    //'b' means show birth-date, otherwise show death-date
    if (arr[1] === 'B' || arr[1] === 'b') {
      let date = ymd(arr.slice(2, 5));
      r.templates.push(template(date));
      return toText(date);
    }
    let date = ymd(arr.slice(5, 8));
    r.templates.push(template(date));
    return toText(date);
  },

  'age': (tmpl) => {
    let d = getBoth(tmpl);
    let diff = delta(d.from, d.to);
    return diff.years || 0;
  },

  'diff-y': (tmpl) => {
    let d = getBoth(tmpl);
    let diff = delta(d.from, d.to);
    if (diff.years === 1) {
      return diff.years + ' year';
    }
    return (diff.years || 0) + ' years';
  },
  'diff-ym': (tmpl) => {
    let d = getBoth(tmpl);
    let diff = delta(d.from, d.to);
    let arr = [];
    if (diff.years === 1) {
      arr.push(diff.years + ' year');
    } else if (diff.years && diff.years !== 0) {
      arr.push(diff.years + ' years');
    }
    if (diff.months === 1) {
      arr.push('1 month');
    } else if (diff.months && diff.months !== 0) {
      arr.push(diff.months + ' months');
    }
    return arr.join(', ');
  },
  'diff-ymd': (tmpl) => {
    let d = getBoth(tmpl);
    let diff = delta(d.from, d.to);
    let arr = [];
    if (diff.years === 1) {
      arr.push(diff.years + ' year');
    } else if (diff.years && diff.years !== 0) {
      arr.push(diff.years + ' years');
    }
    if (diff.months === 1) {
      arr.push('1 month');
    } else if (diff.months && diff.months !== 0) {
      arr.push(diff.months + ' months');
    }
    if (diff.days === 1) {
      arr.push('1 day');
    } else if (diff.days && diff.days !== 0) {
      arr.push(diff.days + ' days');
    }
    return arr.join(', ');
  },
  'diff-yd': (tmpl) => {
    let d = getBoth(tmpl);
    let diff = delta(d.from, d.to);
    let arr = [];
    if (diff.years === 1) {
      arr.push(diff.years + ' year');
    } else if (diff.years && diff.years !== 0) {
      arr.push(diff.years + ' years');
    }
    //ergh...
    diff.days += (diff.months || 0) * 30;
    if (diff.days === 1) {
      arr.push('1 day');
    } else if (diff.days && diff.days !== 0) {
      arr.push(diff.days + ' days');
    }
    return arr.join(', ');
  },
  'diff-d': (tmpl) => {
    let d = getBoth(tmpl);
    let diff = delta(d.from, d.to);
    let arr = [];
    //ergh...
    diff.days += (diff.years || 0) * 365;
    diff.days += (diff.months || 0) * 30;
    if (diff.days === 1) {
      arr.push('1 day');
    } else if (diff.days && diff.days !== 0) {
      arr.push(diff.days + ' days');
    }
    return arr.join(', ');
  },

};
module.exports = parsers;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/dates/timeSince.js":
/*!*********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/dates/timeSince.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//not all too fancy - used in {{timesince}}
const timeSince = function(str) {
  let d = new Date(str);
  if (isNaN(d.getTime())) {
    return '';
  }
  let now = new Date();
  let delta = now.getTime() - d.getTime();
  let predicate = 'ago';
  if (delta < 0) {
    predicate = 'from now';
    delta = Math.abs(delta);
  }
  //figure out units
  let hours = delta / 1000 / 60 / 60;
  let days = hours / 24;
  if (days < 365) {
    return parseInt(days, 10) + ' days ' + predicate;
  }
  let years = days / 365;
  return parseInt(years, 10) + ' years ' + predicate;
};
module.exports = timeSince;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/external.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/external.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const pipeSplit = __webpack_require__(/*! ./parsers/pipeSplit */ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeSplit.js");


//this format seems to be a pattern for these
const generic = (tmpl) => {
  let order = ['id', 'title', 'description', 'section'];
  return pipeSplit(tmpl, order);
};
const idName = (tmpl) => {
  let order = ['id', 'name'];
  return pipeSplit(tmpl, order);
};

//https://en.wikipedia.org/wiki/Category:External_link_templates
const externals = {

  //https://en.wikipedia.org/wiki/Template:IMDb_title
  'imdb title': generic,
  'imdb name': generic,
  'imdb episode': generic,
  'imdb event': generic,
  'discogs artist': generic,
  'discogs label': generic,
  'discogs release': generic,
  'discogs master': generic,
  'librivox author': generic,
  'musicbrainz artist': generic,
  'musicbrainz label': generic,
  'musicbrainz recording': generic,
  'musicbrainz release': generic,
  'musicbrainz work': generic,
  'youtube': generic,
  //https://en.wikipedia.org/wiki/Template:DMOZ
  dmoz: generic,
  'find a grave': (tmpl) => {
    let order = ['id', 'name', 'work', 'last', 'first', 'date', 'accessdate'];
    return pipeSplit(tmpl, order);
  },
  'congbio': (tmpl) => {
    let order = ['id', 'name', 'date'];
    return pipeSplit(tmpl, order);
  },
  'hollywood Walk of Fame': (tmpl) => {
    let order = ['name'];
    return pipeSplit(tmpl, order);
  },
  'goodreads author': idName,
  'goodreads book': generic,
  'twitter': idName,
  'facebook': idName,
  'instagram': idName,
  'tumblr': idName,
  'pinterest': idName,
  'espn nfl': idName,
  'espn nhl': idName,
  'espn fc': idName,
  'hockeydb': idName,
  'fifa player': idName,
  'worldcat': idName,
  'worldcat id': idName,
  'nfl player': idName,
  'ted speaker': idName,
  'playmate': idName,
};
//alias
externals.imdb = externals['imdb name'];
externals['imdb episodess'] = externals['imdb episode'];
module.exports = externals;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/formatting.js":
/*!****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/formatting.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getInside = __webpack_require__(/*! ./parsers/inside */ "./node_modules/wtf_wikipedia/src/templates/parsers/inside.js");
const pipeSplit = __webpack_require__(/*! ./parsers/pipeSplit */ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeSplit.js");
const keyValue = __webpack_require__(/*! ./parsers/keyValue */ "./node_modules/wtf_wikipedia/src/templates/parsers/keyValue.js");

let templates = {
  //a convulated way to make a xml tag - https://en.wikipedia.org/wiki/Template:Tag
  tag: (tmpl) => {
    let obj = keyValue(tmpl);
    if (obj.content) {
      let order = ['tagName', 'open'];
      let tagName = pipeSplit(tmpl, order).tagName;
      //ignore ref tags and all that
      if (tagName !== 'span' && tagName !== 'div') {
        return '';
      }
      return obj.content; //.text();
    }
    return '';
  },
  plural: (tmpl) => {
    let order = ['num', 'word'];
    let obj = pipeSplit(tmpl, order);
    let num = Number(obj.num);
    let word = obj.word;
    if (num !== 1) {
      if (/.y$/.test(word)) {
        word = word.replace(/y$/, 'ies');
      } else {
        word += 's';
      }
    }
    return num + ' ' + word;
  },
  'first word': (tmpl) => {
    let str = getInside(tmpl).data || '';
    return str.split(' ')[0];
  },
  'trunc': (tmpl) => {
    let order = ['str', 'len'];
    let obj = pipeSplit(tmpl, order);
    return obj.str.substr(0, obj.len);
  },
  'str mid': (tmpl) => {
    let order = ['str', 'start', 'end'];
    let obj = pipeSplit(tmpl, order);
    let start = parseInt(obj.start, 10) - 1;
    let end = parseInt(obj.end, 10);
    return obj.str.substr(start, end);
  },
  //grab the first, second or third pipe
  'p1': (tmpl) => {
    let order = ['one'];
    return pipeSplit(tmpl, order).one;
  },
  'p2': (tmpl) => {
    let order = ['one', 'two'];
    return pipeSplit(tmpl, order).two;
  },
  'p3': (tmpl) => {
    let order = ['one', 'two', 'three'];
    return pipeSplit(tmpl, order).three;
  },
};

//templates that we simply grab their insides as plaintext
let inline = [
  'nowrap',
  'big',
  'cquote',
  'pull quote',
  'small',
  'smaller',
  'midsize',
  'larger',
  'big',
  'bigger',
  'large',
  'huge',
  'resize',
  'delink', //https://en.wikipedia.org/wiki/Template:Delink
];
inline.forEach((k) => {
  templates[k] = (tmpl) => {
    let inside = getInside(tmpl);
    return (inside && inside['data']) || '';
  };
});


module.exports = templates;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/generic/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/generic/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getName = __webpack_require__(/*! ../parsers/_getName */ "./node_modules/wtf_wikipedia/src/templates/parsers/_getName.js");
const pipeList = __webpack_require__(/*! ../parsers/pipeList */ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeList.js");
const doKeyValue = __webpack_require__(/*! ./keyValue */ "./node_modules/wtf_wikipedia/src/templates/generic/keyValue.js");

const maybeKeyValue = /\| *?[a-z].+= *?[a-z0-9]{2}/i; // {{name|foo=bar}}

//does it look like {{name|foo|bar}}
const maybePipeList = (tmpl) => {
  let pipes = tmpl.split('|').length;
  if (pipes > 2) {
    let equalSigns = tmpl.split('=').length;
    if (equalSigns <= 2) {
      return true;
    }
  }
  return false;
};

//somehow, we parse this template without knowing how to already
const generic = function(tmpl) {

  let name = getName(tmpl);
  //make sure it looks like a key-value template
  if (maybeKeyValue.test(tmpl) === true) {
    return doKeyValue(tmpl, name);
  }
  if (maybePipeList(tmpl) === true) {
    return pipeList(tmpl);
  }
  return null;
};
module.exports = generic;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/generic/keyValue.js":
/*!**********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/generic/keyValue.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const i18n = __webpack_require__(/*! ../../data/i18n */ "./node_modules/wtf_wikipedia/src/data/i18n.js");
const isInfobox = new RegExp('^(subst.)?(' + i18n.infoboxes.join('|') + ')[: \n]', 'i');
const isCitation = new RegExp('^(cite |citation)', 'i');
const keyValue = __webpack_require__(/*! ../parsers/keyValue */ "./node_modules/wtf_wikipedia/src/templates/parsers/keyValue.js");

const infoboxType = function(name) {
  const reg = new RegExp('^(subst.)?(' + i18n.infoboxes.join('|') + ') *?', 'i');
  name = name.replace(reg, '');
  return name.trim();
};

//try to parse unknown template as a {{name|key=val|key2=val2}} format
const doKeyValue = function(tmpl, name) {
  //handle infoboxes
  if (name === 'infobox' || isInfobox.test(name)) {
    return {
      template: 'infobox',
      type: infoboxType(name),
      data: keyValue(tmpl, true)
    };
  }
  let data = keyValue(tmpl);
  //handle citation templates
  if (isCitation.test(name)) {
    let type = name.replace(/^cite +/, '').trim();
    return {
      template: 'citation',
      type: type,
      data: data
    };
  }
  //generic response
  //try to bury some annoying ones
  if (Object.keys(data).length === 1 && (data.date || data.state || data.format)) {
    return null;
  }
  return {
    template: name,
    data: data
  };
};
module.exports = doKeyValue;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/geo/coor.js":
/*!**************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/geo/coor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const convertDMS = __webpack_require__(/*! ./dms-format */ "./node_modules/wtf_wikipedia/src/templates/geo/dms-format.js");

const hemispheres = {
  n: true,
  s: true,
  w: true,
  e: true,
};

const round = function(num) {
  if (typeof num !== 'number') {
    return num;
  }
  let places = 100000;
  return Math.round(num * places) / places;
};

const parseCoor = function(str) {
  let obj = {
    template: 'coord',
    lat: null,
    lon: null
  };
  let arr = str.split('|');
  //turn numbers into numbers, normalize N/s
  let nums = [];
  for(let i = 0; i < arr.length; i += 1) {
    let s = arr[i].trim();
    //make it a number
    let num = parseFloat(s);
    if (num || num === 0) {
      arr[i] = num;
      nums.push(num);
    } else if (s.match(/^scale:/i)) {
      obj.scale = s.replace(/^scale:/i, '');
      continue;
    } else if (s.match(/^type:/i)) {
      obj.type = s.replace(/^type:/i, '');
      continue;
    }
    //DMS-format
    if (hemispheres[s.toLowerCase()]) {
      if (obj.lat === null) {
        nums.push(s);
        obj.lat = convertDMS(nums);
        arr = arr.slice(i, arr.length);
        nums = [];
        i = 0;
      } else {
        nums.push(s);
        obj.lon = convertDMS(nums);
      }
    }
  }
  //this is an original `lat|lon` format
  if (!obj.lon && nums.length === 2) {
    obj.lat = nums[0];
    obj.lon = nums[1];
  }
  obj.lat = round(obj.lat);
  obj.lon = round(obj.lon);
  return obj;
};

module.exports = parseCoor;
// {{Coor title dms|dd|mm|ss|N/S|dd|mm|ss|E/W|template parameters}}
// {{Coor title dec|latitude|longitude|template parameters}}
// {{Coor dms|dd|mm|ss|N/S|dd|mm|ss|E/W|template parameters}}
// {{Coor dm|dd|mm|N/S|dd|mm|E/W|template parameters}}
// {{Coor dec|latitude|longitude|template parameters}}


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/geo/coord.js":
/*!***************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/geo/coord.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const convertDMS = __webpack_require__(/*! ./dms-format */ "./node_modules/wtf_wikipedia/src/templates/geo/dms-format.js");

const hemispheres = {
  n: true,
  s: true,
  w: true,
  e: true,
};

const round = function(num) {
  if (typeof num !== 'number') {
    return num;
  }
  let places = 100000;
  return Math.round(num * places) / places;
};

const parseCoord = function(str) {
  let obj = {
    template: 'coord',
    lat: null,
    lon: null
  };
  let arr = str.split('|');
  //turn numbers into numbers, normalize N/s
  let nums = [];
  for(let i = 0; i < arr.length; i += 1) {
    let s = arr[i].trim();
    //make it a number
    let num = parseFloat(s);
    if (num || num === 0) {
      arr[i] = num;
      nums.push(num);
    } else if (s.match(/^region:/i)) {
      obj.region = s.replace(/^region:/i, '');
      continue;
    } else if (s.match(/^notes:/i)) {
      obj.notes = s.replace(/^notes:/i, '');
      continue;
    }
    //DMS-format
    if (hemispheres[s.toLowerCase()]) {
      if (obj.lat === null) {
        nums.push(s);
        obj.lat = convertDMS(nums);
        arr = arr.slice(i, arr.length);
        nums = [];
        i = 0;
      } else {
        nums.push(s);
        obj.lon = convertDMS(nums);
      }
    }
  }
  //this is an original `lat|lon` format
  if (!obj.lon && nums.length === 2) {
    obj.lat = nums[0];
    obj.lon = nums[1];
  }
  obj.lat = round(obj.lat);
  obj.lon = round(obj.lon);
  return obj;
};

module.exports = parseCoord;
// {{coord|latitude|longitude|coordinate parameters|template parameters}}
// {{coord|dd|N/S|dd|E/W|coordinate parameters|template parameters}}
// {{coord|dd|mm|N/S|dd|mm|E/W|coordinate parameters|template parameters}}
// {{coord|dd|mm|ss|N/S|dd|mm|ss|E/W|coordinate parameters|template parameters}}


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/geo/dms-format.js":
/*!********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/geo/dms-format.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//converts DMS (decimal-minute-second) geo format to lat/lng format.
//major thank you to https://github.com/gmaclennan/parse-dms
//and https://github.com/WSDOT-GIS/dms-js 👏

//accepts an array of descending Degree, Minute, Second values, with a hemisphere at the end
//must have N/S/E/W as last thing
function parseDms(arr) {
  let hemisphere = arr.pop();
  var degrees = Number(arr[0] || 0);
  var minutes = Number(arr[1] || 0);
  var seconds = Number(arr[2] || 0);
  if (typeof hemisphere !== 'string' || isNaN(degrees)) {
    return null;
  }
  var sign = 1;
  if (/[SW]/i.test(hemisphere)) {
    sign = -1;
  }
  let decDeg = sign * (degrees + minutes / 60 + seconds / 3600);
  return decDeg;
}
module.exports = parseDms;
// console.log(parseDms([57, 18, 22, 'N']));
// console.log(parseDms([4, 27, 32, 'W']));


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/geo/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/geo/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parseCoord = __webpack_require__(/*! ./coord */ "./node_modules/wtf_wikipedia/src/templates/geo/coord.js");
const parseCoor = __webpack_require__(/*! ./coor */ "./node_modules/wtf_wikipedia/src/templates/geo/coor.js");
const strip = __webpack_require__(/*! ../parsers/_strip */ "./node_modules/wtf_wikipedia/src/templates/parsers/_strip.js");

//
const geoTemplates = {
  coord: (tmpl) => {
    tmpl = strip(tmpl);
    return parseCoord(tmpl);
  },
  // these are from the nl wiki
  'coor title dms': (tmpl) => {
    tmpl = strip(tmpl);
    return parseCoor(tmpl);
  },
  'coor title dec': (tmpl) => {
    tmpl = strip(tmpl);
    return parseCoor(tmpl);
  },
  'coor dms': (tmpl) => {
    tmpl = strip(tmpl);
    return parseCoor(tmpl);
  },
  'coor dm': (tmpl) => {
    tmpl = strip(tmpl);
    return parseCoor(tmpl);
  },
  'coor dec': (tmpl) => {
    tmpl = strip(tmpl);
    return parseCoor(tmpl);
  }
};
module.exports = geoTemplates;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/ignore.js":
/*!************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/ignore.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//we explicitly ignore these, because they sometimes have resolve some data
const list = [
  //https://en.wikipedia.org/wiki/category:templates_with_no_visible_output
  'anchor',
  'defaultsort',
  'use american english',
  'use australian english',
  'use bangladeshi english',
  'use british english',
  'use british english oxford spelling',
  'use canadian english',
  'use dmy dates',
  'use harvard referencing',
  'use hong kong english',
  'use indian english',
  'use irish english',
  'use jamaican english',
  'use list-defined references',
  'use mdy dates',
  'use new zealand english',
  'use pakistani english',
  'use singapore english',
  'use south african english',
  'void',
  //https://en.wikipedia.org/wiki/Category:Protection_templates
  'pp',
  'pp-move-indef',
  'pp-semi-indef',
  'pp-vandalism',
  //https://en.wikipedia.org/wiki/Template:R
  'r',
  //out-of-scope still - https://en.wikipedia.org/wiki/Template:Tag
  '#tag',
  //https://en.wikipedia.org/wiki/Template:Navboxes
  'navboxes',
  'reflist',
  'ref-list',
  'div col',
  'flag',
  'authority control',
  //https://en.wikipedia.org/wiki/Template:Citation_needed
  'better source',
  'citation needed',
  'clarify',
  'cite quote',
  'dead link',
  'by whom',
  'dubious',
  'when',
  'who',
  'quantify',
  'refimprove',
  'weasel inline',
];
const ignore = list.reduce((h, str) => {
  h[str] = true;
  return h;
}, {});
module.exports = ignore;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Infobox = __webpack_require__(/*! ../infobox/Infobox */ "./node_modules/wtf_wikipedia/src/infobox/Infobox.js");
const Reference = __webpack_require__(/*! ../reference/Reference */ "./node_modules/wtf_wikipedia/src/reference/Reference.js");
const getName = __webpack_require__(/*! ./parsers/_getName */ "./node_modules/wtf_wikipedia/src/templates/parsers/_getName.js");
const getTemplates = __webpack_require__(/*! ./parsers/_getTemplates */ "./node_modules/wtf_wikipedia/src/templates/parsers/_getTemplates.js");

const dates = __webpack_require__(/*! ./dates */ "./node_modules/wtf_wikipedia/src/templates/dates/index.js");
const geo = __webpack_require__(/*! ./geo */ "./node_modules/wtf_wikipedia/src/templates/geo/index.js");
const inline = __webpack_require__(/*! ./inline */ "./node_modules/wtf_wikipedia/src/templates/inline.js");
const currencies = __webpack_require__(/*! ./currencies */ "./node_modules/wtf_wikipedia/src/templates/currencies.js");
const misc = __webpack_require__(/*! ./misc */ "./node_modules/wtf_wikipedia/src/templates/misc.js");
const generic = __webpack_require__(/*! ./generic */ "./node_modules/wtf_wikipedia/src/templates/generic/index.js");
const links = __webpack_require__(/*! ./links */ "./node_modules/wtf_wikipedia/src/templates/links.js");
const formatting = __webpack_require__(/*! ./formatting */ "./node_modules/wtf_wikipedia/src/templates/formatting.js");
const pronounce = __webpack_require__(/*! ./pronounce */ "./node_modules/wtf_wikipedia/src/templates/pronounce.js");
const external = __webpack_require__(/*! ./external */ "./node_modules/wtf_wikipedia/src/templates/external.js");
const ignore = __webpack_require__(/*! ./ignore */ "./node_modules/wtf_wikipedia/src/templates/ignore.js");
const wiktionary = __webpack_require__(/*! ./wiktionary */ "./node_modules/wtf_wikipedia/src/templates/wiktionary.js");

//ensure references and infoboxes at least look valid
const isObject = function(x) {
  return (typeof x === 'object') && (x !== null) && x.constructor.toString().indexOf('Array') === -1;
};

//put them all together
const inlineParsers = Object.assign(
  {},
  dates,
  inline,
  currencies,
  links,
  formatting,
  wiktionary
);
const bigParsers = Object.assign({}, geo, pronounce, misc, external);

//this gets all the {{template}} strings and decides how to parse them
const oneTemplate = function(tmpl, wiki, data, options) {
  let name = getName(tmpl);

  //we explicitly ignore these templates
  if (ignore.hasOwnProperty(name) === true) {
    wiki = wiki.replace(tmpl, '');
    return wiki;
  }

  //string-replacement templates
  if (inlineParsers.hasOwnProperty(name) === true) {
    let str = inlineParsers[name](tmpl, data);
    wiki = wiki.replace(tmpl, str);
    return wiki;
  }

  //section-template parsers
  if (bigParsers.hasOwnProperty(name) === true) {
    let obj = bigParsers[name](tmpl);
    if (obj) {
      data.templates.push(obj);
    }
    wiki = wiki.replace(tmpl, '');
    return wiki;
  }

  //fallback parser
  let obj = generic(tmpl, name);
  if (obj) {
    data.templates.push(obj);
    wiki = wiki.replace(tmpl, '');
    return wiki;
  }
  //bury this template, if we don't know it
  if (options.missing_templates === true) {
    console.log(':: ' + name);
  }
  wiki = wiki.replace(tmpl, '');

  return wiki;
};

//reduce the scary recursive situations
const parseTemplates = function(wiki, data, options) {
  let templates = getTemplates(wiki);
  //first, do the nested (second level) ones
  templates.nested.forEach(tmpl => {
    wiki = oneTemplate(tmpl, wiki, data, options);
  });
  //then, reparse wiki for the top-level ones
  templates = getTemplates(wiki);

  //okay if we have a 3-level-deep template, do it again (but no further)
  if (templates.nested.length > 0) {
    templates.nested.forEach(tmpl => {
      wiki = oneTemplate(tmpl, wiki, data, options);
    });
    templates = getTemplates(wiki); //this is getting crazy.
  }
  //okay, top-level
  templates.top.forEach(tmpl => {
    wiki = oneTemplate(tmpl, wiki, data, options);
  });
  //lastly, move citations + infoboxes out of our templates list
  let clean = [];
  data.templates.forEach((o) => {
    //it's possible that we've parsed a reference, that we missed earlier
    if (o.template === 'citation' && o.data && isObject(o.data)) {
      o.data.type = o.type || null;
      data.references.push(new Reference(o));
      return;
    }
    if (o.template === 'infobox' && o.data && isObject(o.data)) {
      data.infoboxes.push(new Infobox(o));
      return;
    }
    clean.push(o);
  });
  data.templates = clean;
  return wiki;
};

module.exports = parseTemplates;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/inline.js":
/*!************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/inline.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const languages = __webpack_require__(/*! ../data/languages */ "./node_modules/wtf_wikipedia/src/data/languages.js");
const keyValue = __webpack_require__(/*! ./parsers/keyValue */ "./node_modules/wtf_wikipedia/src/templates/parsers/keyValue.js");
const pipeSplit = __webpack_require__(/*! ./parsers/pipeSplit */ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeSplit.js");
const strip = __webpack_require__(/*! ./parsers/_strip */ "./node_modules/wtf_wikipedia/src/templates/parsers/_strip.js");

const inline = {
  //newline-based list - https://en.wikipedia.org/wiki/Template:Plainlist
  plainlist: (tmpl) => {
    tmpl = strip(tmpl);
    //remove the title
    let arr = tmpl.split('|');
    arr = arr.slice(1);
    tmpl = arr.join('|');
    //split on newline
    arr = tmpl.split(/\n ?\* ?/);
    arr = arr.filter(s => s);
    return arr.join(', ');
  },
  //https://en.wikipedia.org/wiki/Template:Collapsible_list
  'collapsible list': (tmpl) => {
    let val = strip(tmpl);
    let arr = val.split('|');
    arr = arr.map(s => s.trim());
    arr = arr.filter(str => /^title ?=/i.test(str) === false);
    return arr.slice(1).join(', ');
  },
  //https://en.wikipedia.org/wiki/Template:Convert#Ranges_of_values
  convert: (tmpl) => {
    let order = ['num', 'two', 'three', 'four'];
    let obj = pipeSplit(tmpl, order);
    //todo: support plural units
    if (obj.two === '-' || obj.two === 'to' || obj.two === 'and') {
      if (obj.four) {
        return `${obj.num} ${obj.two} ${obj.three} ${obj.four}`;
      }
      return `${obj.num} ${obj.two} ${obj.three}`;
    }
    return `${obj.num} ${obj.two}`;
  },
  //formatting things - https://en.wikipedia.org/wiki/Template:Nobold
  braces: (tmpl) => {
    let inside = strip(tmpl).replace(/^braces\s?\|/, '');
    return '{{' + inside + '}}';
  },
  nobold: (tmpl) => {
    let inside = strip(tmpl).replace(/^nobold\s?\|/, '');
    return inside;
  },
  noitalic: (tmpl) => {
    let inside = strip(tmpl).replace(/^noitalic\s?\|/, '');
    return inside;
  },
  nocaps: (tmpl) => {
    let inside = strip(tmpl).replace(/^noitalic\s?\|/, '');
    return inside.toLowerCase();
  },
  hlist: (tmpl) => {
    let val = strip(tmpl).replace(/^hlist\s?\|/, '');
    let arr = val.split('|');
    arr = arr.filter((s) => s && s.indexOf('=') === -1);
    return arr.join(' · ');
  },
  //https://en.wikipedia.org/wiki/Template:Term
  term: (tmpl) => {
    let order = ['term'];
    let obj = pipeSplit(tmpl, order);
    return `${obj.term}:`;
  },
  defn: (tmpl) => {
    let order = ['desc'];
    let obj = pipeSplit(tmpl, order);
    return obj.desc;
  },
  //https://en.wikipedia.org/wiki/Template:Interlanguage_link
  ill: (tmpl) => {
    let order = ['text', 'lan1', 'text1', 'lan2', 'text2'];
    let obj = pipeSplit(tmpl, order);
    return obj.text;
  },
  lang: (tmpl) => {
    let order = ['lang', 'text'];
    let obj = pipeSplit(tmpl, order);
    return obj.text;
  },
  //this one has a million variants
  'lang-de': (tmpl) => {
    let order = ['text'];
    let obj = pipeSplit(tmpl, order);
    return obj.text;
  },
  //https://en.wikipedia.org/wiki/Template:Frac
  frac: (tmpl) => {
    let order = ['a', 'b', 'c'];
    let obj = pipeSplit(tmpl, order);
    if (obj.c) {
      return `${obj.a} ${obj.b}/${obj.c}`;
    }
    if (obj.b) {
      return `${obj.a}/${obj.b}`;
    }
    return `1/${obj.b}`;
  },
  //https://en.wikipedia.org/wiki/Template:OldStyleDate
  oldstyledate: (tmpl) => {
    let order = ['date', 'year'];
    let obj = pipeSplit(tmpl, order);
    let str = obj.date;
    if (obj.year) {
      str += ' ' + obj.year;
    }
    return str;
  },
  //https://en.wikipedia.org/wiki/Template:Height - {{height|ft=6|in=1}}
  height: (tmpl) => {
    let obj = keyValue(tmpl);
    let result = [];
    let units = ['m', 'cm', 'ft', 'in']; //order matters
    units.forEach((unit) => {
      if (obj.hasOwnProperty(unit) === true) {
        result.push(obj[unit] + unit);
      }
    });
    return result.join(' ');
  },

  'block indent': (tmpl) => {
    let obj = keyValue(tmpl);
    if (obj['1']) {
      return '\n' + obj['1'] + '\n';
    }
    return '';
  },
  'quote': (tmpl) => {
    let obj = keyValue(tmpl);
    if (obj.text) {
      let str = `"${obj.text}"`;
      if (obj.author) {
        str += `  - ${obj.author}`;
        str += '\n';
      }
      return str;
    }
    return '';
  },
  //https://en.wikipedia.org/wiki/Template:Marriage
  //this one creates a template, and an inline response
  marriage: (tmpl, r) => {
    let data = pipeSplit(tmpl, ['name', 'from', 'to', 'end']);
    r.templates.push(data);
    let str = `${data.name || ''}`;
    if (data.from) {
      if (data.to) {
        str += ` (m. ${data.from}-${data.to})`;
      } else {
        str += ` (m. ${data.from})`;
      }
    }
    return str;
  },
  //https://en.wikipedia.org/wiki/Template:Lbs
  lbs: (tmpl) => {
    let obj = pipeSplit(tmpl, ['text']);
    return `[[${obj.text} Lifeboat Station|${obj.text}]]`;
  },
  //Foo-class
  lbc: (tmpl) => {
    let obj = pipeSplit(tmpl, ['text']);
    return `[[${obj.text}-class lifeboat|${obj.text}-class]]`;
  },
  lbb: (tmpl) => {
    let obj = pipeSplit(tmpl, ['text']);
    return `[[${obj.text}-class lifeboat|${obj.text}]]`;
  },
  //german keyboard letterscn
  taste: (tmpl) => {
    let obj = pipeSplit(tmpl, ['key']);
    return obj.key || '';
  },
  //https://en.wikipedia.org/wiki/Template:Nihongo
  nihongo: (tmpl, r) => {
    let obj = pipeSplit(tmpl, ['english', 'kanji', 'romaji', 'extra']);
    r.templates.push(obj);
    let str = obj.english || obj.romaji || '';
    if (obj.kanji) {
      str += ` (${obj.kanji})`;
    }
    return str;
  }
};
//aliases
inline.flatlist = inline.plainlist;

inline.ublist = inline.plainlist;
inline['unbulleted list'] = inline['collapsible list'];
inline['ubl'] = inline['collapsible list'];
inline['ordered list'] = inline['collapsible list'];

inline['str left'] = inline.trunc;
inline['str crop'] = inline.trunc;
inline['nihongo2'] = inline.nihongo;
inline['nihongo3'] = inline.nihongo;
inline['nihongo-s'] = inline.nihongo;
inline['nihongo foot'] = inline.nihongo;

//https://en.wikipedia.org/wiki/Category:Lang-x_templates
Object.keys(languages).forEach((k) => {
  inline['lang-' + k] = inline['lang-de'];
});
module.exports = inline;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/links.js":
/*!***********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/links.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const pipeSplit = __webpack_require__(/*! ./parsers/pipeSplit */ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeSplit.js");

let templates = {
  /* mostly wiktionary*/
  etyl: (tmpl) => {
    let order = ['lang', 'page'];
    return pipeSplit(tmpl, order).page || '';
  },
  mention: (tmpl) => {
    let order = ['lang', 'page'];
    return pipeSplit(tmpl, order).page || '';
  },
  link: (tmpl) => {
    let order = ['lang', 'page'];
    return pipeSplit(tmpl, order).page || '';
  },
  'la-verb-form': (tmpl) => {
    let order = ['word'];
    return pipeSplit(tmpl, order).word || '';
  },
  'la-ipa': (tmpl) => {
    let order = ['word'];
    return pipeSplit(tmpl, order).word || '';
  },
};

//these are insane
// https://en.wikipedia.org/wiki/Template:Tl
const links = [
  'lts',
  't',
  'tfd links',
  'tiw',
  'tltt',
  'tetl',
  'tsetl',
  'ti',
  'tic',
  'tiw',
  'tlt',
  'ttl',
  'twlh',
  'tl2',
  'tlu',
  'demo',
  'hatnote',
  'xpd',
  'para',
  'elc',
  'xtag',
  'mli',
  'mlix',
  '#invoke',
  'url' //https://en.wikipedia.org/wiki/Template:URL
];

//keyValues
links.forEach((k) => {
  templates[k] = (tmpl) => {
    let order = ['first', 'second'];
    let obj = pipeSplit(tmpl, order);
    return obj.second || obj.first;
  };
});
//aliases
templates.m = templates.mention;
templates['m-self'] = templates.mention;
templates.l = templates.link;
templates.ll = templates.link;
templates['l-self'] = templates.link;
module.exports = templates;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/misc.js":
/*!**********************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/misc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const keyValue = __webpack_require__(/*! ./parsers/keyValue */ "./node_modules/wtf_wikipedia/src/templates/parsers/keyValue.js");
const getInside = __webpack_require__(/*! ./parsers/inside */ "./node_modules/wtf_wikipedia/src/templates/parsers/inside.js");
const pipeSplit = __webpack_require__(/*! ./parsers/pipeSplit */ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeSplit.js");
const pipeList = __webpack_require__(/*! ./parsers/pipeList */ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeList.js");
const Image = __webpack_require__(/*! ../image/Image */ "./node_modules/wtf_wikipedia/src/image/Image.js");

const sisterProjects = {
  wikt: 'wiktionary',
  commons: 'commons',
  c: 'commons',
  commonscat: 'commonscat',
  n: 'wikinews',
  q: 'wikiquote',
  s: 'wikisource',
  a: 'wikiauthor',
  b: 'wikibooks',
  voy: 'wikivoyage',
  v: 'wikiversity',
  d: 'wikidata',
  species: 'wikispecies',
  m: 'meta',
  mw: 'mediawiki'
};

const parsers = {

  'book bar': pipeList,

  main: (tmpl) => {
    let obj = getInside(tmpl);
    return {
      template: 'main',
      page: obj.data
    };
  },
  wide_image: (tmpl) => {
    let obj = getInside(tmpl);
    return {
      template: 'wide_image',
      image: obj.data
    };
  },


  //https://en.wikipedia.org/wiki/Template:Taxon_info
  'taxon info': (tmpl) => {
    let order = ['taxon', 'item'];
    return pipeSplit(tmpl, order);
  },
  'uss': (tmpl) => {
    let order = ['ship', 'id'];
    return pipeSplit(tmpl, order);
  },

  //same in every language.
  citation: (tmpl) => {
    let data = keyValue(tmpl);
    return {
      template: 'citation',
      data: data
    };
  },

  //https://en.wikipedia.org/wiki/Template:Redirect
  redirect: (tmpl) => {
    let data = pipeList(tmpl).data;
    let links = [];
    for(let i = 1; i < data.length; i += 2) {
      links.push({
        page: data[i + 1],
        desc: data[i]
      });
    }
    return {
      template: 'redirect',
      redirect: data[0],
      links: links
    };
  },

  //this one sucks - https://en.wikipedia.org/wiki/Template:GNIS
  'cite gnis': (tmpl) => {
    let order = ['id', 'name', 'type'];
    let data = pipeSplit(tmpl, order);
    return {
      template: 'citation',
      type: 'gnis',
      data: data
    };
  },
  'sfn': (tmpl) => {
    let order = ['author', 'year', 'location'];
    let data = pipeSplit(tmpl, order);
    return {
      template: 'citation',
      type: 'sfn',
      data: data
    };
  },
  'audio': (tmpl) => {
    let order = ['file', 'text', 'type'];
    let obj = pipeSplit(tmpl, order);
    return obj;
  },
  'spoken wikipedia': (tmpl) => {
    let order = ['file', 'date'];
    let obj = pipeSplit(tmpl, order);
    obj.template = 'audio';
    return obj;
  },

  //https://en.wikipedia.org/wiki/Template:Sister_project_links
  'sister project links': (tmpl) => {
    let data = keyValue(tmpl);
    let links = {};
    Object.keys(sisterProjects).forEach((k) => {
      if (data.hasOwnProperty(k) === true) {
        links[sisterProjects[k]] = data[k]; //.text();
      }
    });
    return {
      template: 'sister project links',
      links: links
    };
  },

  //https://en.wikipedia.org/wiki/Template:Subject_bar
  'subject bar': (tmpl) => {
    let data = keyValue(tmpl);
    Object.keys(data).forEach((k) => {
      if (sisterProjects.hasOwnProperty(k)) {
        data[sisterProjects[k]] = data[k];
        delete data[k];
      }
    });
    return {
      template: 'subject bar',
      links: data
    };
  },
  'short description': (tmpl) => {
    let data = pipeList(tmpl);
    return {
      template: data.template,
      description: data.data[0]
    };
  },
  'good article': () => {
    return {
      template: 'Good article'
    };
  },
  //amazingly, this one does not obey any known patterns
  //https://en.wikipedia.org/wiki/Template:Gallery
  'gallery': (tmpl) => {
    let obj = pipeList(tmpl);
    let images = obj.data.filter(line => /^ *File ?:/.test(line));
    images = images.map((file) => {
      let img = {
        file: file
      };
      return new Image(img).json();
    });
    return {
      template: 'gallery',
      images: images
    };
  },
  'climate chart': (tmpl) => {
    let list = pipeList(tmpl).data;
    let title = list[0];
    let source = list[38];
    list = list.slice(1);
    //amazingly, they use '−' symbol here instead of negatives...
    list = list.map((str) => {
      if (str && str[0] === '−') {
        str = str.replace(/−/, '-');
      }
      return str;
    });
    let months = [];
    //groups of three, for 12 months
    for(let i = 0; i < 36; i += 3) {
      months.push({
        low: Number(list[i]),
        high: Number(list[i + 1]),
        precip: Number(list[i + 2])
      });
    }
    return {
      template: 'climate chart',
      data: {
        title: title,
        source: source,
        months: months
      }
    };
  },
  '__throw-wtf-error': () => {
    //okay you asked for it!
    throw new Error('Intentional error thrown from wtf-wikipedia!');
  }
};
//aliases
parsers['cite'] = parsers.citation;
parsers['sfnref'] = parsers.sfn;
parsers['harvid'] = parsers.sfn;
parsers['harvnb'] = parsers.sfn;
parsers['redir'] = parsers.redirect;
parsers['sisterlinks'] = parsers['sister project links'];

module.exports = parsers;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/parsers/_getName.js":
/*!**********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/parsers/_getName.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//get the name of the template
//templates are usually '{{name|stuff}}'
const getName = function(tmpl) {
  let name = null;
  //{{name|foo}}
  if (/^\{\{[^\n]+\|/.test(tmpl)) {
    name = (tmpl.match(/^\{\{(.+?)\|/) || [])[1];
  } else if (tmpl.indexOf('\n') !== -1) {
    // {{name \n...
    name = (tmpl.match(/^\{\{(.+?)\n/) || [])[1];
  } else {
    //{{name here}}
    name = (tmpl.match(/^\{\{(.+?)\}\}$/) || [])[1];
  }
  if (name) {
    name = name.replace(/:.*/, '');
    name = name.trim().toLowerCase();
  }
  return name || null;
};
// console.log(templateName('{{name|foo}}'));
// console.log(templateName('{{name here}}'));
// console.log(templateName('{{CITE book |title=the killer and the cartoons }}'));
// console.log(templateName(`{{name
// |key=val}}`));
module.exports = getName;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/parsers/_getTemplates.js":
/*!***************************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/parsers/_getTemplates.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const open = '{';
const close = '}';

const strip = (str) => {
  str = str.replace(/^\{\{/, '');
  str = str.replace(/\}\}$/, '');
  return str;
};

//
const findFlat = function(wiki) {
  let depth = 0;
  let list = [];
  let carry = [];
  let chars = wiki.split('');
  chars.forEach((c) => {
    //open it
    if (c === open) {
      depth += 1;
    }
    //close it
    if (depth > 0) {
      if (c === close) {
        depth -= 1;
        if (depth === 0) {
          let tmpl = carry.join('') + c;
          carry = [];
          //last check
          if (/\{\{/.test(tmpl) && /\}\}/.test(tmpl)) {
            list.push(tmpl);
          }
          return;
        }
      }
      //require two '{{' to open it
      if (depth === 1 && c !== open && c !== close) {
        depth = 0;
        carry = [];
        return;
      }
      carry.push(c);
      return;
    }
  });
  return list;
};

//get all nested templates
const findNested = function(top) {
  let deep = [];
  top.forEach((str) => {
    if (/\{\{/.test(str.substr(2)) === true) {
      str = strip(str);
      findFlat(str).forEach((o) => {
        if (o) {
          deep.push(o);
        }
      });
    }
  });
  return deep;
};

const getTemplates = function(wiki) {
  let list = findFlat(wiki);
  return {
    top: list,
    nested: findNested(list)
  };
};

module.exports = getTemplates;

// console.log(getTemplates('he is president. {{nowrap|he is {{age|1980}} years}} he lives in {{date}} texas'));


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/parsers/_pipes.js":
/*!********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/parsers/_pipes.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const strip = __webpack_require__(/*! ./_strip */ "./node_modules/wtf_wikipedia/src/templates/parsers/_strip.js");
const parseSentence = __webpack_require__(/*! ../../04-sentence */ "./node_modules/wtf_wikipedia/src/04-sentence/index.js").oneSentence;

//try to handle inline-wikitext, (like links) inside the pipe-text
const tightenUp = function(arr) {
  return arr.map((str) => {
    if (str && str.indexOf('[') !== -1) {
      let s = parseSentence(str);
      if (s.links() && s.links().length > 0) {
        return s.links(0).page;
      }
      return s.text();
    }
    return str;
  });
};

// this splits a text-segment by '|' characters, but does so carefully
const pipes = function(tmpl) {
  tmpl = strip(tmpl);
  let arr = tmpl.split(/\|/g);
  for(let i = 0; i < arr.length; i += 1) {
    let str = arr[i];
    //stitch [[link|text]] pieces back together
    if (/\[\[[^\]]+$/.test(str) === true && /^[^\[]+\]\]/.test(arr[i + 1]) === true) {
      arr[i] += '|' + arr[i + 1];
      arr[i + 1] = null;
    }
    //stitch {{imdb|8392}} pieces back together, too
    if (/\{\{[^\}]+$/.test(str) === true && /^[^\{]+\}\}/.test(arr[i + 1]) === true) {
      arr[i] += '|' + arr[i + 1];
      arr[i + 1] = null;
    }
  }
  let name = arr[0] || '';
  arr = arr.slice(1);
  return {
    name: name.trim().toLowerCase(),
    list: tightenUp(arr)
  };
};
module.exports = pipes;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/parsers/_strip.js":
/*!********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/parsers/_strip.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//remove the top/bottom off the template
const strip = function(tmpl) {
  tmpl = tmpl.replace(/^\{\{/, '');
  tmpl = tmpl.replace(/\}\}$/, '');
  return tmpl;
};
module.exports = strip;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/parsers/generic.js":
/*!*********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/parsers/generic.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const keyValue = __webpack_require__(/*! ./keyValue */ "./node_modules/wtf_wikipedia/src/templates/parsers/keyValue.js");
const getName = __webpack_require__(/*! ./_getName */ "./node_modules/wtf_wikipedia/src/templates/parsers/_getName.js");
const maybeKeyValue = /\|.+?[a-z].+?=/; // |foo=

const knownTemplate = function(name) {
  if (/cite [a-z0-9]/.test(name) || name.toLowerCase().trim() === 'citation') {
    return 'citation';
  }
  return null;
};

//just go for it.
const genericTemplate = function(tmpl) {
  if (maybeKeyValue.test(tmpl)) {
    let name = getName(tmpl);
    if (name === null) {
      return null;
    }
    let data = keyValue(tmpl);
    if (data) {
      let obj = {
        name: name,
        data: data
      };
      let template = knownTemplate(name);
      if (template) {
        obj.template = template;
      }
      return obj;
    }
  }
  return null;
};
module.exports = genericTemplate;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/parsers/inside.js":
/*!********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/parsers/inside.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const strip = __webpack_require__(/*! ./_strip */ "./node_modules/wtf_wikipedia/src/templates/parsers/_strip.js");

const grabInside = function(tmpl) {
  tmpl = strip(tmpl);
  let parts = tmpl.split('|');
  if (typeof parts[1] !== 'string') {
    return null;
  }
  //only split on the first pipe:
  parts[1] = parts.slice(1).join('|');

  let value = parts[1].trim();
  value = value.replace(/^[a-z0-9]{1,7}=/, ''); //support 'foo=value'
  return {
    template: parts[0].trim().toLowerCase(),
    data: value
  };
};
module.exports = grabInside;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/parsers/keyValue.js":
/*!**********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/parsers/keyValue.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parseSentence = __webpack_require__(/*! ../../04-sentence */ "./node_modules/wtf_wikipedia/src/04-sentence/index.js").oneSentence;
const strip = __webpack_require__(/*! ./_strip */ "./node_modules/wtf_wikipedia/src/templates/parsers/_strip.js");

//turn '| key = value' into an object
const keyValue = function(tmpl, isInfobox) {
  tmpl = strip(tmpl);
  let arr = tmpl.split(/\n?\|/);
  //look for broken-up links and fix them :(
  arr.forEach((a, i) => {
    if (!arr[i + 1]) {
      return;
    }
    if (/\[\[[^\]]+$/.test(a) || /\{\{[^\}]+$/.test(a)) { // [[link|text]] or {{imdb|2386}}
      arr[i + 1] = arr[i] + '|' + arr[i + 1];
      arr[i] = null;
    }
  });
  arr = arr.filter((a) => a && a.indexOf('=') !== -1);
  let obj = arr.reduce((h, line) => {
    let parts = line.split(/=/);
    if (parts.length > 2) {
      parts[1] = parts.slice(1).join('=');
    }
    let key = parts[0].toLowerCase().trim();
    let val = parts[1].trim();
    if (key !== '' && val !== '') {
      val = parseSentence(val);
      if (isInfobox) {
        h[key] = val; //.json();
      } else {
        h[key] = val.text();
        if (val.links().length > 0) {
          h._links = h._links || [];
          h._links = h._links.concat(val.links());
        }
      }
    }
    return h;
  }, {});
  return obj;
};
module.exports = keyValue;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeList.js":
/*!**********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/parsers/pipeList.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const keyVal = /[a-z0-9]+ *?= *?[a-z0-9]/i;
const pipes = __webpack_require__(/*! ./_pipes */ "./node_modules/wtf_wikipedia/src/templates/parsers/_pipes.js");

//generic unamed lists
// {{name|one|two|three}}
const pipeList = function(tmpl) {
  let found = pipes(tmpl);
  let obj = {
    template: found.name
  };
  let arr = found.list || [];
  arr.forEach((k, i) => {
    if (arr[i]) {
      //support this gross 'id=234' format inside the value
      if (keyVal.test(arr[i]) === true) {
        arr[i] = arr[i].split('=')[1];
      }
      arr[i] = arr[i].trim();
    }
  });
  obj.data = arr;
  return obj;
};
module.exports = pipeList;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeSplit.js":
/*!***********************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/parsers/pipeSplit.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const keyVal = /[a-z0-9]+ *?= *?[a-z0-9]/i;
const pipes = __webpack_require__(/*! ./_pipes */ "./node_modules/wtf_wikipedia/src/templates/parsers/_pipes.js");

//templates that look like this:
// {{name|one|two|three}}
const pipeSplit = function(tmpl, order) {
  let found = pipes(tmpl);
  let obj = {
    template: found.name
  };
  let arr = found.list || [];
  order.forEach((k, i) => {
    if (arr[i]) {
      //support gross 'id=234' format inside the value
      let val = arr[i];
      let key = k;
      if (keyVal.test(arr[i]) === true) {
        let both = arr[i].split('=');
        val = both[1];
        if (isNaN(parseInt(both[0], 10))) {
          key = both[0].trim().toLowerCase();
        } else {
          key = order[parseInt(both[0], 10) - 1];
        }
      }
      val = val.trim();
      obj[key] = val;
    }
  });
  return obj;
};
module.exports = pipeSplit;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/pronounce.js":
/*!***************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/pronounce.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const strip = __webpack_require__(/*! ./parsers/_strip */ "./node_modules/wtf_wikipedia/src/templates/parsers/_strip.js");
// pronounciation info
// https://en.wikipedia.org/wiki/Template:IPA
const ipaTemplates = {
  ipa: (tmpl) => {
    let arr = strip(tmpl).split('|');
    let lang = arr[0].replace(/^ipa(c-)?/i, '');
    lang = lang || null;
    return {
      template: 'ipa',
      lang: lang,
      ipa: arr.slice(1).join('')
    };
  }
};
// - other languages -
// Polish, {{IPAc-pl}}	{{IPAc-pl|'|sz|cz|e|ć|i|n}} → [ˈʂt͡ʂɛt͡ɕin]
// Portuguese, {{IPAc-pt}}	{{IPAc-pt|p|o|<|r|t|u|'|g|a|l|lang=pt}} and {{IPAc-pt|b|r|a|'|s|i|l|lang=br}} → [puɾtuˈɣaɫ] and [bɾaˈsiw]
let i18n = [
  'ipac-ar',
  'ipac-cmn',
  'ipac-en',
  'ipac-es',
  'ipac-fr',
  'ipac-ga',
  'ipac-he',
  'ipac-hu',
  'ipac-it',
  'ipac-ja',
  'ipac-ka',
  'ipac-ko',
  'ipac-mh',
  'ipa-mg',
  'ipac-mi',
  'ipac-pl',
  'ipac-pt',
  'ipac-ro',
  'ipac-yue',
];
i18n.forEach((k) => ipaTemplates[k] = ipaTemplates.ipa);
module.exports = ipaTemplates;


/***/ }),

/***/ "./node_modules/wtf_wikipedia/src/templates/wiktionary.js":
/*!****************************************************************!*\
  !*** ./node_modules/wtf_wikipedia/src/templates/wiktionary.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const pipeSplit = __webpack_require__(/*! ./parsers/pipeSplit */ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeSplit.js");
const pipeList = __webpack_require__(/*! ./parsers/pipeList */ "./node_modules/wtf_wikipedia/src/templates/parsers/pipeList.js");
// const strip = require('./parsers/_strip');

//wiktionary... who knows. we should atleast try.
const templates = {

  'inflection': (tmpl, r) => {
    let obj = pipeList(tmpl);
    r.templates.push({
      template: obj.template,
      lemma: obj.data[0],
      word: obj.data[1],
      tags: obj.data.slice(2)
    });
    return obj.data[0] || obj.data[1] || '';
  },

  //latin verbs
  'la-verb-form': (tmpl, r) => {
    let obj = pipeSplit(tmpl, ['word']);
    r.templates.push(obj);
    return obj.word || '';
  },
  'feminine plural': (tmpl, r) => {
    let obj = pipeSplit(tmpl, ['word']);
    r.templates.push(obj);
    return obj.word || '';
  },
  'male plural': (tmpl, r) => {
    let obj = pipeSplit(tmpl, ['word']);
    r.templates.push(obj);
    return obj.word || '';
  },
  'rhymes': (tmpl, r) => {
    let obj = pipeSplit(tmpl, ['word']);
    r.templates.push(obj);
    return 'Rhymes: -' + (obj.word || '');
  },
};

//https://en.wiktionary.org/wiki/Category:Form-of_templates
let conjugations = [
  'abbreviation',
  'abessive plural',
  'abessive singular',
  'accusative plural',
  'accusative singular',
  'accusative',
  'acronym',
  'active participle',
  'agent noun',
  'alternative case form',
  'alternative form',
  'alternative plural',
  'alternative reconstruction',
  'alternative spelling',
  'alternative typography',
  'aphetic form',
  'apocopic form',
  'archaic form',
  'archaic spelling',
  'aspirate mutation',
  'associative plural',
  'associative singular',
  'attributive form',
  'attributive form',
  'augmentative',
  'benefactive plural',
  'benefactive singular',
  'causative plural',
  'causative singular',
  'causative',
  'clipping',
  'combining form',
  'comitative plural',
  'comitative singular',
  'comparative plural',
  'comparative singular',
  'comparative',
  'contraction',
  'dated form',
  'dated spelling',
  'dative plural definite',
  'dative plural indefinite',
  'dative plural',
  'dative singular',
  'dative',
  'definite',
  'deliberate misspelling',
  'diminutive',
  'distributive plural',
  'distributive singular',
  'dual',
  'early form',
  'eclipsis',
  'elative',
  'ellipsis',
  'equative',
  'euphemistic form',
  'euphemistic spelling',
  'exclusive plural',
  'exclusive singular',
  'eye dialect',
  'feminine noun',
  'feminine plural past participle',
  'feminine plural',
  'feminine singular past participle',
  'feminine singular',
  'feminine',
  'form',
  'former name',
  'frequentative',
  'future participle',
  'genitive plural definite',
  'genitive plural indefinite',
  'genitive plural',
  'genitive singular definite',
  'genitive singular indefinite',
  'genitive singular',
  'genitive',
  'gerund',
  'h-prothesis',
  'hard mutation',
  'harmonic variant',
  'imperative',
  'imperfective form',
  'inflected form',
  'inflection',
  'informal form',
  'informal spelling',
  'initialism',
  'ja-form',
  'jyutping reading',
  'late form',
  'lenition',
  'masculine plural past participle',
  'masculine plural',
  'medieval spelling',
  'misconstruction',
  'misromanization',
  'misspelling',
  'mixed mutation',
  'monotonic form',
  'mutation',
  'nasal mutation',
  'negative',
  'neuter plural past participle',
  'neuter plural',
  'neuter singular past participle',
  'neuter singular',
  'nominalization',
  'nominative plural',
  'nominative singular',
  'nonstandard form',
  'nonstandard spelling',
  'oblique plural',
  'oblique singular',
  'obsolete form',
  'obsolete spelling',
  'obsolete typography',
  'official form',
  'participle',
  'passive participle',
  'passive',
  'past active participle',
  'past participle',
  'past passive participle',
  'past tense',
  'perfective form',
  'plural definite',
  'plural indefinite',
  'plural',
  'polytonic form',
  'present active participle',
  'present participle',
  'present tense',
  'pronunciation spelling',
  'rare form',
  'rare spelling',
  'reflexive',
  'second-person singular past',
  'short for',
  'singular definite',
  'singular',
  'singulative',
  'soft mutation',
  'spelling',
  'standard form',
  'standard spelling',
  'substantivisation',
  'superlative',
  'superseded spelling',
  'supine',
  'syncopic form',
  'synonym',
  'terminative plural',
  'terminative singular',
  'uncommon form',
  'uncommon spelling',
  'verbal noun',
  'vocative plural',
  'vocative singular',
];
conjugations.forEach((name) => {
  templates[name + ' of'] = (tmpl, r) => {
    let obj = pipeSplit(tmpl, ['word']);
    obj.type = 'form-of';
    r.templates.push(obj);
    return obj.word || '';
  };
});
module.exports = templates;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_TopProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopProfile */ "./components/TopProfile.js");
/* harmony import */ var _components_Paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Paragraph */ "./components/Paragraph.js");
/* harmony import */ var _libs_getData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/getData */ "./libs/getData.js");
/* harmony import */ var _libs_getCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/getCard */ "./libs/getCard.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home */ "./components/home.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/tauhoo/Documents/politic-warrior/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  span {\n    font-size: 2em;\n    color: white;\n    font-family: 'Roboto';\n  }\n  @media (max-width: 650px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2em;\n  font-family: 'K2D';\n  margin-top: 30px;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  text-decoration: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 0px;\n  border-radius: 5px;\n  background-color: black;\n  padding: 0.25em 1em;\n  display: ", ";\n  transform: translate(-50%, -50%);\n  margin-left: 50vw;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var CardButton = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].button(_templateObject(), function (props) {
  return props.isDisplay ? 'block' : 'none';
});
var TextLink = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].a(_templateObject2());
var Name = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1(_templateObject3());
var Top = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject4());

var renderData = function renderData(data) {
  return data.map(function (paragraph) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: paragraph,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    });
  });
};

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: '',
      data: [],
      subDetail: {},
      imageUrl: '',
      isShow: true,
      cardLink: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "upDateState",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(name) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  isShow: true
                });

                setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                  var _ref3, result, subDetail, imageUrl, Card;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return Object(_libs_getData__WEBPACK_IMPORTED_MODULE_5__["default"])(name).then(function (res) {
                            return res;
                          });

                        case 2:
                          _ref3 = _context.sent;
                          result = _ref3.result;
                          subDetail = _ref3.subDetail;
                          imageUrl = _ref3.imageUrl;
                          _context.next = 8;
                          return Object(_libs_getCard__WEBPACK_IMPORTED_MODULE_6__["default"])(name, result, imageUrl);

                        case 8:
                          Card = _context.sent;
                          this.setState({
                            data: result,
                            subDetail: subDetail,
                            imageUrl: imageUrl,
                            cardLink: Card,
                            name: name
                          });
                          this.setState({
                            isShow: false
                          });

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                })).bind(_assertThisInitialized(_assertThisInitialized(_this))), 600);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        UpDateState: _this.upDateState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Top, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Politic Warrior"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Politic Warrior")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isShow: _this.state.isShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Name, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, _this.state.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TopProfile__WEBPACK_IMPORTED_MODULE_3__["default"], {
        image: _this.state.imageUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardButton, {
        isDisplay: _this.state.cardLink !== '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextLink, {
        href: _this.state.cardLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\u0E14\u0E39\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E4C\u0E14")), renderData(_this.state.data), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }));
    });

    return _this;
  }

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_ecba6b44147cc8018369":
/*!*******************************************!*\
  !*** external "dll_ecba6b44147cc8018369" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ecba6b44147cc8018369;

/***/ })

},[[3,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=index.js.map