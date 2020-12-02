"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var Footer_1 = require("../Shared/Footer");
var react_redux_1 = require("react-redux");
var Improve = function (props) {
    var _a, _b;
    var hmservicedata = props.location.state.hmServiceData;
    var tagtext = props.location.state.tagTexts;
    var color = hmservicedata.color;
    var userCommentChangeHandler = function (evt) {
        props.onUpdateUserComment(evt.target.value);
    };
    var mobileChangeHandler = function (evt) {
        props.onUpdateMobile(evt.target.value);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "row mt-5" },
            react_1["default"].createElement("div", { className: "col-lg-12 col-md-12 col-sm-12 col-12" },
                react_1["default"].createElement("div", { className: "feedtitle", style: { color: color } }, tagtext["hm_tellusmore"].replace("...", "")))),
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "row mt-3 mb-3" },
                react_1["default"].createElement("div", { className: "col-lg-12 col-md-12" },
                    react_1["default"].createElement("div", { className: "feedinner" },
                        react_1["default"].createElement("form", null,
                            react_1["default"].createElement("div", { className: "form-group" },
                                react_1["default"].createElement("textarea", { className: "form-control", id: "exampleFormControlTextarea1", placeholder: tagtext["hm_tellusmore"], rows: 6, style: { resize: "none" }, value: (_a = props.reviewData.userComment) !== null && _a !== void 0 ? _a : "", onChange: function (evt) { return userCommentChangeHandler(evt); } })),
                            react_1["default"].createElement("div", { className: "form-group" },
                                react_1["default"].createElement("input", { type: "phone", className: "form-control ", id: "telephone", placeholder: tagtext["hm_yourmobileopti"], value: (_b = props.reviewData.mobile) !== null && _b !== void 0 ? _b : "", onChange: function (evt) { return mobileChangeHandler(evt); } })))))),
            react_1["default"].createElement(Footer_1["default"], { showBack: true, showFinish: true, showFeedback: false, color: color, obj: __assign({}, props) }))));
};
var mapStateToProps = function (state) {
    return {
        reviewData: state.reviewData
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        onUpdateUserComment: function (comment) {
            dispatch({ type: "UPDATEUSERCOMMENT", value: comment });
        },
        onUpdateMobile: function (mobile) {
            dispatch({ type: "UPDATEMOBILE", value: mobile });
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Improve);
