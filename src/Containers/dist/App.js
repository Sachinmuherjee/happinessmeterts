"use strict";
exports.__esModule = true;
var react_1 = require("react");
var smiley_1 = require("./smiley");
var Questions_1 = require("./Questions");
var Improve_1 = require("./Improve");
var axios_1 = require("../axios");
var App = function () {
    var _a = react_1.useState({
        hmServiceData: null,
        tagTexts: null,
        hmServiceQuestion: null
    }), hmData = _a[0], sethmData = _a[1];
    react_1.useEffect(function () {
        axios_1["default"]
            .get("/public-hmdata", {
            params: {
                serviceKey: "srrov02l",
                lang: "en"
            }
        })
            .then(function (response) {
            //console.log(response);
            var publicHmsKey = response.data.publicHmsKey;
            sethmData({
                hmServiceData: publicHmsKey.hmKeyServiceKeydto,
                tagTexts: publicHmsKey.tagText,
                hmServiceQuestion: publicHmsKey.hmQuestionAnswer
            });
            //console.log(hmData);
        });
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(smiley_1["default"], null),
        react_1["default"].createElement(Questions_1["default"], null),
        react_1["default"].createElement(Improve_1["default"], null)));
};
exports["default"] = App;
