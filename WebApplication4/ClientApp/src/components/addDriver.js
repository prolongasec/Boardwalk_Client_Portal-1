"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var Accordion_1 = require("./Accordion");
var Sidebarmr_1 = require("./Sidebarmr");
var NavMenu_1 = require("./NavMenu");
var addDriver = /** @class */ (function (_super) {
    __extends(addDriver, _super);
    function addDriver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    addDriver.prototype.render = function () {
        var i = 1;
        var a = [];
        while (i < 3) {
            a.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "drivers " + i.toString(), content: React.createElement("div", null,
                        React.createElement("p", null, "Full Name"),
                        React.createElement("p", null, "Birth Date"),
                        React.createElement("p", null, "License Number"),
                        React.createElement("p", null, "license Year")) }),
                React.createElement("br", null)));
            i++;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1.default, null)),
                React.createElement("div", { className: 'col-8', id: 'mr2add' },
                    React.createElement("h1", null, "Add New Drivers"),
                    React.createElement("form", null,
                        React.createElement("input", { type: 'text', placeholder: 'First Name' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Last Name' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Birth Date' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Driver Train' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'License Number' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Conviction' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'License Year' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'submit', value: 'submit' })),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    a))));
    };
    return addDriver;
}(React.Component));
;
exports.default = (0, react_redux_1.connect)()(addDriver);
//# sourceMappingURL=addDriver.js.map