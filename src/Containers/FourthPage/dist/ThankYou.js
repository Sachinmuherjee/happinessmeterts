"use strict";
exports.__esModule = true;
var Header_1 = require("../Shared/Header");
var react_1 = require("react");
var emoji_png_1 = require("../../Assets/img/emoji.png");
var ThankYou = function (props) {
    var hmservicedata = props.location.state.hmServiceData;
    var tagtext = props.location.state.tagTexts;
    var color = hmservicedata.color;
    return (react_1["default"].createElement("div", { id: "fourthModalCenter" },
        react_1["default"].createElement(Header_1["default"], { color: color }),
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "row mt-4" },
                react_1["default"].createElement("div", { className: "col-lg-12 col-md-12 col-sm-12 col-12" },
                    react_1["default"].createElement("div", { className: "thanpics text-center mt-3 mb-5" },
                        react_1["default"].createElement("img", { src: emoji_png_1["default"], style: { width: "150px", height: "150px" }, alt: "Clickable Button" })),
                    react_1["default"].createElement("div", { className: "thanksstitle", style: { color: color } }, tagtext["hm_thankyou"]),
                    react_1["default"].createElement("div", { className: "thanksstitlesec mb-5", style: { color: color } }, tagtext["hm_participation"]))))));
};
exports["default"] = ThankYou;
