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
var NavMenu_1 = require("./NavMenu");
var RemoveVehiclesStore = require("../store/RemoveVehicles");
var ReviewBar_1 = require("./ReviewBar");
var ReviewRemoveVehicles = /** @class */ (function (_super) {
    __extends(ReviewRemoveVehicles, _super);
    function ReviewRemoveVehicles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReviewRemoveVehicles.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    ReviewRemoveVehicles.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    ReviewRemoveVehicles.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientRemoveVehicles(startDateIndex);
        console.log(this.props.ClientRemoveVehicle);
    };
    ReviewRemoveVehicles.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(ReviewBar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Remove Vehicle Requests"),
                    React.createElement("div", null,
                        React.createElement("div", null, this.props.ClientRemoveVehicle.map(function (d, index) {
                            return React.createElement("div", { key: index },
                                React.createElement("h3", null,
                                    "Request ",
                                    index + 1),
                                React.createElement("p", null,
                                    "Vehicle Id: ",
                                    d.vehicleId),
                                React.createElement("p", null,
                                    "Request time: ",
                                    d.requestTime));
                        })))))));
    };
    return ReviewRemoveVehicles;
}(React.PureComponent));
;
exports.default = (0, react_redux_1.connect)(function (state) { return (state.ClientRemoveVehicles); }, (RemoveVehiclesStore.clientActionCreators))(ReviewRemoveVehicles);
//# sourceMappingURL=ReviewRemoveVehicles.js.map