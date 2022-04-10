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
var Accountsidebar_1 = require("./Accountsidebar");
var NavMenu_1 = require("./NavMenu");
var AccountsStore = require("../store/Accounts");
var Accordion_1 = require("./Accordion");
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Account.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    Account.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    Account.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAccounts(startDateIndex);
    };
    Account.prototype.showAccounts = function () {
        console.log(this.props.Account);
        return (React.createElement("div", null, this.props.Account.map(function (d) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: d.id, title: "Account Number: " + d.accountNumber.toString(), content: React.createElement("div", null,
                        React.createElement("p", null,
                            "Business: ",
                            d.businessName),
                        React.createElement("p", null,
                            "Insurer: ",
                            d.currentInsurer),
                        React.createElement("p", null,
                            "Description: ",
                            d.description),
                        React.createElement("p", null,
                            "Full Time: ",
                            d.fullTime),
                        React.createElement("p", null,
                            "Part Time: ",
                            d.partTime)) }),
                React.createElement("br", null));
        })));
    };
    Account.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Accountsidebar_1.default, null)),
                React.createElement("div", { className: 'col-8' }, this.showAccounts()))));
    };
    return Account;
}(React.PureComponent));
exports.default = (0, react_redux_1.connect)(function (state) { return state.Accounts; }, // Selects which state properties are merged into the component's props
AccountsStore.actionCreators)(Account);
//# sourceMappingURL=Account.js.map