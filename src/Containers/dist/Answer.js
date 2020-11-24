"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Answer = function () {
    var AnswerList = [];
    for (var i = 0; i < 3; i++) {
        var ans = (react_1["default"].createElement("div", { className: "custom-control custom-radio", key: i },
            react_1["default"].createElement("input", { type: "radio", id: "customRadio1", name: "customRadio1", className: "custom-control-input" }),
            react_1["default"].createElement("label", { className: "custom-control-label radcustom", htmlFor: "customRadio1" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit")));
        AnswerList.push(ans);
    }
    return react_1["default"].createElement("div", { className: "formtext" }, AnswerList);
};
exports["default"] = Answer;
