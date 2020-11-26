"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Answer_1 = require("./Answer");
var Question = function () {
    return (react_1["default"].createElement("div", { className: "panel panel-default" },
        react_1["default"].createElement("div", { className: "panel-heading", role: "tab", id: "headingOne" },
            react_1["default"].createElement("h4", { className: "panel-title" },
                react_1["default"].createElement("a", { role: "button", "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapseOne", "aria-expanded": "true", "aria-controls": "collapseOne" },
                    react_1["default"].createElement("i", { className: "more-less glyphicon glyphicon-plus" }),
                    react_1["default"].createElement("div", { className: "supsubtile" }, " Website / Application Design ")))),
        react_1["default"].createElement("div", { id: "collapseOne", className: "panel-collapse collapse", role: "tabpanel", "aria-labelledby": "headingOne" },
            react_1["default"].createElement("div", { className: "panel-body" },
                react_1["default"].createElement(Answer_1["default"], null)))));
};
exports["default"] = Question;
