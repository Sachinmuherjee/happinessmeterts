"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Answer_1 = require("./Answer");
var react_redux_1 = require("react-redux");
var Question = function (props) {
    var anslist = props.anslist;
    // let ansResultList = [];
    var ansChangeHandler = function (evt, questionId, reasonId) {
        //console.log(evt, questionId, reasonId);
        var ob = { reasonId: reasonId, questionId: questionId };
        if (evt.target.checked) {
            props.ansResultList.push(ob);
        }
        else {
            props.ansResultList = props.ansResultList.filter(function (x) { return x.reasonId !== reasonId; });
        }
        props.onUpdateAnsList(props.ansResultList);
        return true;
        //console.log(ansResultList);
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
