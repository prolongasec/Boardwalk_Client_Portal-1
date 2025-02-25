"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var react_redux_1 = require("react-redux");

var Sidebar_1 = require("./Sidebar");

var Popup_1 = require("./Popup");

var reactstrap_1 = require("reactstrap");

var react_router_dom_1 = require("react-router-dom");

var PolicyMenu =
/** @class */
function (_super) {
  __extends(PolicyMenu, _super);

  function PolicyMenu() {
    var _this = _super.call(this, {}, {}) || this;

    _this.showModal = function () {
      _this.setState({
        shown: true
      });
    };

    _this.hideModal = function () {
      _this.setState({
        shown: false
      });
    };

    _this.state = {
      shown: false
    };
    _this.showModal = _this.showModal.bind(_this);
    _this.hideModal = _this.hideModal.bind(_this);
    return _this;
  }

  PolicyMenu.prototype.render = function () {
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: 'row'
    }, React.createElement("div", {
      className: 'col-4'
    }, React.createElement(Sidebar_1["default"], null)), React.createElement("div", {
      className: 'col-8'
    }, React.createElement("h1", null, "Policy"), React.createElement("p", null, "Click on a document to view or download it"), React.createElement(reactstrap_1.NavLink, {
      tag: react_router_dom_1.Link,
      onClick: this.showModal
    }, "Document 1"), React.createElement("br", null), React.createElement(reactstrap_1.NavLink, {
      tag: react_router_dom_1.Link,
      onClick: this.showModal
    }, "Document 2"), React.createElement("br", null), React.createElement(reactstrap_1.NavLink, {
      tag: react_router_dom_1.Link,
      onClick: this.showModal
    }, "Document 3"), React.createElement("br", null), React.createElement(Popup_1.Popup, {
      show: this.state.shown,
      handleClose: this.hideModal
    }, React.createElement("p", null, "Modal")))));
  };

  return PolicyMenu;
}(React.Component);

;
exports["default"] = (0, react_redux_1.connect)()(PolicyMenu);