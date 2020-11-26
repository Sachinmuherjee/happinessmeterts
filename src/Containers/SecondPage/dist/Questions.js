"use strict";
exports.__esModule = true;
var Question_1 = require("./Question");
var react_1 = require("react");
var Footer_1 = require("../Shared/Footer");
var Header_1 = require("../Shared/Header");
var Questions = function (props) {
    //const hmData = props.hmdata;
    //console.log(hmData);
    return (react_1["default"].createElement("div", { id: "secondModalCenter" },
        react_1["default"].createElement(Header_1["default"], { color: "#09200" }),
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-lg-12 col-md-12" },
                    react_1["default"].createElement("div", { className: "secinners" },
                        react_1["default"].createElement("div", { className: "panel-group", id: "accordion", role: "tablist", "aria-multiselectable": "true" },
                            react_1["default"].createElement(Question_1["default"], null))),
                    react_1["default"].createElement(Footer_1["default"], { showBack: true, showFeedback: true, showFinish: true }))))));
};
exports["default"] = Questions;
