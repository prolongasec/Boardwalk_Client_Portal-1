"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;

var React = require("react");

var reactstrap_1 = require("reactstrap");

var react_router_dom_1 = require("react-router-dom");

require("./NavMenu.css");

var NavMenu =
/** @class */
function (_super) {
  __extends(NavMenu, _super);

  function NavMenu() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      isOpen: false
    };

    _this.toggle = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };

    return _this;
  }

  NavMenu.prototype.render = function () {
    return React.createElement("header", null, React.createElement(reactstrap_1.Navbar, {
      className: "navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3",
      light: true
    }, React.createElement(reactstrap_1.Container, null, React.createElement(reactstrap_1.NavbarBrand, {
      tag: react_router_dom_1.Link,
      to: "/home"
    }, "Boardwalk Insurance"), React.createElement(reactstrap_1.NavbarToggler, {
      onClick: this.toggle,
      className: "mr-2"
    }), React.createElement(reactstrap_1.Collapse, {
      className: "d-sm-inline-flex flex-sm-row-reverse",
      isOpen: this.state.isOpen,
      navbar: true
    }, React.createElement("ul", {
      className: "navbar-nav flex-grow"
    }, React.createElement(reactstrap_1.NavItem, null, React.createElement(reactstrap_1.NavLink, {
      tag: react_router_dom_1.Link,
      className: "text-dark",
      to: "/policy-limits"
    }, "Policy Information")), React.createElement(reactstrap_1.NavItem, null, React.createElement(reactstrap_1.NavLink, {
      tag: react_router_dom_1.Link,
      className: "text-dark",
      to: "/policy-menu"
    }, "Policy Documents")), React.createElement(reactstrap_1.NavItem, null, React.createElement(reactstrap_1.NavLink, {
      tag: react_router_dom_1.Link,
      className: "text-dark",
      to: "/make-request"
    }, "Make a Request")), React.createElement(reactstrap_1.NavItem, null, React.createElement(reactstrap_1.NavLink, {
      tag: react_router_dom_1.Link,
      className: "text-dark",
      to: "/"
    }, "Help")), React.createElement(reactstrap_1.NavItem, null, React.createElement(reactstrap_1.NavLink, {
      tag: react_router_dom_1.Link,
      className: "text-dark",
      to: "/"
    }, "Account")), React.createElement(reactstrap_1.NavItem, null, React.createElement(reactstrap_1.NavLink, {
      tag: react_router_dom_1.Link,
      className: "text-dark",
      to: "/"
    }, "Log out")))))));
  };

  return NavMenu;
}(React.PureComponent);

exports["default"] = NavMenu;