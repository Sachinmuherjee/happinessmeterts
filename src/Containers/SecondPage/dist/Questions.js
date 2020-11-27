"use strict";
exports.__esModule = true;
var Question_1 = require("./Question");
var react_1 = require("react");
var Footer_1 = require("../Shared/Footer");
var Header_1 = require("../Shared/Header");
var Questions = function (props) {
    console.log(props);
    var _a = react_1.useState({
        hmservicedata: props.location.state.hmServiceData,
        tagtext: props.location.state.tagTexts,
        hmquestion: props.location.state.hmServiceQuestion
    }), hmData = _a[0], sethmData = _a[1];
    var questionId = hmData.hmquestion[0].questionId;
    var ansList = [];
    var questions = hmData.hmquestion.map(function (question, index, arr) {
        if (question.questionId === questionId) {
            ansList.push(question);
        }
        else {
            var ob = (react_1["default"].createElement(Question_1["default"], { anslist: ansList, questionid: questionId, key: questionId, questiontext: question.questionText, tagtext: hmData.tagtext, color: hmData.hmservicedata.color }));
            ansList = [];
            return ob;
        }
        if (index === arr.length - 1) {
            return (react_1["default"].createElement(Question_1["default"], { anslist: ansList, questionid: questionId, key: questionId, questiontext: question.questionText, tagtext: hmData.tagtext }));
        }
    });
    return (react_1["default"].createElement("div", { id: "secondModalCenter" },
        react_1["default"].createElement(Header_1["default"], { color: hmData.hmservicedata != null ? hmData.hmservicedata.color : "#09200" }),
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-lg-12 col-md-12" },
                    react_1["default"].createElement("div", { className: "secinners" },
                        react_1["default"].createElement("div", { className: "panel-group", id: "accordion", role: "tablist", "aria-multiselectable": "true" }, questions)),
                    react_1["default"].createElement(Footer_1["default"], { showBack: true, showFeedback: true, showFinish: true, color: hmData.hmservicedata != null
                            ? hmData.hmservicedata.color
                            : "#09200" }))))));
};
exports["default"] = Questions;
