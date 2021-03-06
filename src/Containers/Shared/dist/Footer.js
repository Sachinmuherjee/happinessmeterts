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
var react_redux_1 = require("react-redux");
var axios_1 = require("../../axios");
var Footer = function (props) {
    var tagText = props.obj.location.state.tagTexts;
    var backClickHandler = function () {
        props.obj.history.goBack();
    };
    var showBackClickHandle = function () {
        props.obj.history.push({
            pathname: "/improve",
            state: __assign({}, props.obj.location.state)
        });
    };
    var onFinishHandler = function () {
        console.log(props.reviewData);
        var reviews = props.reviewData;
        var review = {
            serviceId: reviews.serviceId,
            faceId: reviews.faceId,
            userComment: reviews.userComment,
            mobile: reviews.mobile
        };
        var ans = reviews.answerList;
        var data = {
            publicHmsData: JSON.stringify(review),
            publichmquestion: JSON.stringify(ans)
        };
        axios_1["default"].post("/public-hmdata", data).then(function (response) {
            var isInserted = response.data.isInserted;
            if (isInserted) {
                props.obj.history.push({
                    pathname: "/thankyou",
                    state: __assign({}, props.obj.location.state)
                });
            }
        });
    };
    var Back, Feedback, Finish;
    if (props.showBack) {
        Back = (react_1["default"].createElement("div", { className: "" },
            react_1["default"].createElement("button", { type: "button", className: "btn btn-secondary thbtncol", style: { backgroundColor: props.color }, onClick: function () { return backClickHandler(); } }, tagText["hm_back"])));
    }
    if (props.showFeedback) {
        Feedback = (react_1["default"].createElement("button", { type: "button", className: "btn btn-secondary thbtncol", "data-dismiss": "modal", "data-toggle": "modal", "data-target": "#thirdModalCenter", style: { backgroundColor: props.color }, onClick: function () { return showBackClickHandle(); } }, tagText["hm_shareyourfeed"]));
    }
    if (props.showFinish) {
        Finish = (react_1["default"].createElement("button", { type: "button", className: "btn btn-secondary thbtncol", "data-dismiss": "modal", style: { backgroundColor: props.color }, onClick: function () { return onFinishHandler(); } }, tagText["hm_finish"]));
    }
    return (react_1["default"].createElement("div", { className: "container-fluid p-0" },
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", { className: "col-lg-4 col-md-4 col-sm-4 col-4" }, Back),
            react_1["default"].createElement("div", { className: "col-lg-8 col-md-8 col-sm-8 col-8" },
                react_1["default"].createElement("div", { className: "text-right" },
                    Feedback,
                    Finish)))));
};
var mapStateToProps = function (state) {
    return {
        reviewData: state.reviewData
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps)(Footer);
