"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var Answer_1 = require("./Answer");
var react_redux_1 = require("react-redux");
var Question = function (props) {
    var anslist = props.anslist;
    var ansResultList = __spreadArrays(props.ansResultList);
    var ansChangeHandler = function (evt, questionId, reasonId) {
        var ob = { reasonId: reasonId, questionId: questionId };
        if (evt.target.checked) {
            ansResultList.push(ob);
        }
        else {
            ansResultList = ansResultList.filter(function (x) { return x.reasonId !== reasonId; });
        }
        props.onUpdateAnsList(ansResultList);
        return true;
    };
    var questiontext = props.questiontext;
    var answers = anslist.map(function (answer) {
        return (react_1["default"].createElement(Answer_1["default"], { reasonid: answer.reasonId, reasontext: answer.reasonText, questionid: answer.questionId, key: answer.reasonId, changed: ansChangeHandler, isChecked: props.ansResultList.some(function (x) { return x.reasonId === answer.reasonId; }) }));
    });
    return (react_1["default"].createElement("div", { className: "panel panel-default" },
        react_1["default"].createElement("div", { className: "panel-heading", role: "tab", id: "heading" + props.questionid },
            react_1["default"].createElement("h4", { className: "panel-title" },
                react_1["default"].createElement("a", { role: "button", "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapse" + props.questionid, "aria-expanded": "true", "aria-controls": "collapse" + props.questionid },
                    react_1["default"].createElement("i", { className: "more-less glyphicon glyphicon-plus" }),
                    react_1["default"].createElement("div", { className: "supsubtile", style: {
                            color: props.color
                        } }, questiontext)))),
        react_1["default"].createElement("div", { id: "collapse" + props.questionid, className: "panel-collapse collapse", role: "tabpanel", "aria-labelledby": "heading" + props.questionid },
            react_1["default"].createElement("div", { className: "panel-body" }, answers))));
};
var mapStateToProps = function (state) {
    return {
        ansResultList: state.reviewData.answerList
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        onUpdateAnsList: function (anslist) {
            return dispatch({ type: "UPDATEANSLIST", value: anslist });
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Question);
