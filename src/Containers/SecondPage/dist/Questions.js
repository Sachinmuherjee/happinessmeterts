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
var Question_1 = require("./Question");
var react_1 = require("react");
var Footer_1 = require("../Shared/Footer");
var Header_1 = require("../Shared/Header");
var Questions = function (props) {
    var _a;
    var hmservicedata = props.location.state.hmServiceData;
    var tagtext = props.location.state.tagTexts;
    var hmquestion = props.location.state.hmServiceQuestion;
    var text = props.location.state.text;
    var questionId = hmquestion[0].questionId;
    var ansList = [];
    var questions = [];
    var i;
    for (i = 0; i < hmquestion.length; i++) {
        if (hmquestion[i].questionId === questionId) {
            ansList.push(hmquestion[i]);
        }
        else {
            questionId = hmquestion[i].questionId;
            i--;
            var ob = (react_1["default"].createElement(Question_1["default"], { anslist: ansList, questionid: hmquestion[i].questionId, key: hmquestion[i].questionId, questiontext: hmquestion[i].questionText, tagtext: tagtext, color: hmservicedata.color }));
            questions.push(ob);
            ansList = [];
        }
    }
    if (ansList.length > 0) {
        i--;
        var ob = (react_1["default"].createElement(Question_1["default"], { anslist: ansList, questionid: hmquestion[i].questionId, key: hmquestion[i].questionId, questiontext: hmquestion[i].questionText, tagtext: tagtext, color: hmservicedata.color }));
        questions.push(ob);
    }
    var color = (_a = hmservicedata === null || hmservicedata === void 0 ? void 0 : hmservicedata.color) !== null && _a !== void 0 ? _a : "#09200";
    return (react_1["default"].createElement("div", { id: "secondModalCenter" },
        react_1["default"].createElement(Header_1["default"], { color: color }),
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "row mt-5" },
                react_1["default"].createElement("div", { className: "col-lg-12 col-md-12 col-sm-12 col-12" },
                    react_1["default"].createElement("div", { className: "supptitle", style: { color: color } }, text)))),
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-lg-12 col-md-12" },
                    react_1["default"].createElement("div", { className: "secinners" },
                        react_1["default"].createElement("div", { className: "panel-group", id: "accordion", role: "tablist", "aria-multiselectable": "true" }, questions)),
                    react_1["default"].createElement(Footer_1["default"], { showBack: true, showFeedback: true, showFinish: false, color: color, obj: __assign({}, props) }))))));
};
exports["default"] = Questions;
