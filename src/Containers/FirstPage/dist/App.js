"use strict";
exports.__esModule = true;
var smiley_1 = require("./smiley");
var Questions_1 = require("../SecondPage/Questions");
var Improve_1 = require("../ThirdPage/Improve");
var ThankYou_1 = require("../FourthPage/ThankYou");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var App = function () {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/:servicekey/:lang/:mobile", exact: true, component: smiley_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/questions", component: Questions_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/improve", component: Improve_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/thankyou", component: ThankYou_1["default"] }))));
};
exports["default"] = App;
