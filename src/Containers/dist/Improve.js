"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Footer_1 = require("./Footer");
var Improve = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "row mt-5" },
            react_1["default"].createElement("div", { className: "col-lg-12 col-md-12 col-sm-12 col-12" },
                react_1["default"].createElement("div", { className: "feedtitle" }, "What Can We Improve?"))),
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "row mt-3 mb-3" },
                react_1["default"].createElement("div", { className: "col-lg-12 col-md-12" },
                    react_1["default"].createElement("div", { className: "feedinner" },
                        react_1["default"].createElement("form", null,
                            react_1["default"].createElement("div", { className: "form-group" },
                                react_1["default"].createElement("textarea", { className: "form-control", id: "exampleFormControlTextarea1", placeholder: "Tell us more...", rows: 6, style: { resize: "none" } })),
                            react_1["default"].createElement("div", { className: "form-group" },
                                react_1["default"].createElement("input", { type: "phone", className: "form-control ", id: "telephone", placeholder: "Your Mobile Number (optional)" })))))),
            react_1["default"].createElement(Footer_1["default"], { showBack: true, showFinish: true, showFeedback: false }))));
};
exports["default"] = Improve;
