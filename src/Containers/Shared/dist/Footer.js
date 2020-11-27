"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Footer = function (props) {
    var Back, Feedback, Finish;
    if (props.showBack) {
        Back = (react_1["default"].createElement("div", { className: "" },
            react_1["default"].createElement("button", { type: "button", className: "btn btn-secondary thbtncol", style: { backgroundColor: props.color } }, "Back")));
    }
    if (props.showFeedback) {
        Feedback = (react_1["default"].createElement("button", { type: "button", className: "btn btn-secondary thbtncol", href: "#thirdModalCenter", "data-dismiss": "modal", "data-toggle": "modal", "data-target": "#thirdModalCenter", style: { backgroundColor: props.color } }, "Share Your Feedback"));
    }
    if (props.showFinish) {
        Finish = (react_1["default"].createElement("button", { type: "button", className: "btn btn-secondary thbtncol", "data-dismiss": "modal", style: { backgroundColor: props.color } }, "Finish"));
    }
    return (react_1["default"].createElement("div", { className: "container-fluid p-0" },
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", { className: "col-lg-4 col-md-4 col-sm-4 col-12" }, Back),
            react_1["default"].createElement("div", { className: "col-lg-8 col-md-8 col-sm-8 col-12" },
                react_1["default"].createElement("div", { className: "text-right" },
                    Feedback,
                    Finish)))));
};
exports["default"] = Footer;
