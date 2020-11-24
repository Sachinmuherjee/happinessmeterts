"use strict";
exports.__esModule = true;
var react_1 = require("react");
var smiley_1 = require("./smiley");
var Questions_1 = require("./Questions");
var Improve_1 = require("./Improve");
//info  import "../Assets/Styles/App.css";
// todo import Question from "./Question";
var App = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(smiley_1["default"], null),
        react_1["default"].createElement(Questions_1["default"], null),
        react_1["default"].createElement(Improve_1["default"], null)));
};
exports["default"] = App;
