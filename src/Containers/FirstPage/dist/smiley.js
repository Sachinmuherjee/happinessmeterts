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
var Header_1 = require("../Shared/Header");
var axios_1 = require("../../axios");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var Smiley = function (props) {
    var _a, _b;
    var location = react_router_dom_1.useLocation();
    var searchParams = new URLSearchParams(location.search);
    var servicekey = searchParams.get("servicekey");
    var lang = searchParams.get("lang");
    var mobile = searchParams.get("mobile");
    var _c = react_1.useState({
        hmServiceData: null,
        tagTexts: [],
        hmServiceQuestion: null,
        face: null
    }), hmData = _c[0], sethmData = _c[1];
    var smileyClickHandler = function (faceId, text) {
        props.onUpdateFaceId(faceId);
        if (hmData.hmServiceData.isQuestion) {
            props.history.push("/questions", __assign(__assign({}, hmData), { text: text }));
        }
        else {
            props.history.push("/improve", __assign(__assign({}, hmData), { text: text }));
        }
    };
    var convertTagTextHandler = function (arr) {
        var newArray = [];
        arr.map(function (text) { return (newArray[text.tagname] = text.text); });
        return newArray;
    };
    react_1.useEffect(function () {
        axios_1["default"]
            .get("/public-hmdata", {
            params: {
                serviceKey: servicekey,
                lang: lang
            }
        })
            .then(function (response) {
            var publicHmsKey = response.data.publicHmsKey;
            sethmData({
                hmServiceData: publicHmsKey.hmServiceKeydto,
                tagTexts: convertTagTextHandler(publicHmsKey.tagText),
                hmServiceQuestion: publicHmsKey.hmQuestionAnswer,
                face: publicHmsKey.face
            });
            props.onUpdateMobileAndServiceId({
                mobile: mobile !== null && mobile !== void 0 ? mobile : null,
                serviceId: publicHmsKey.hmServiceKeydto.id
            });
        });
    }, []);
    var color = (_b = (_a = hmData.hmServiceData) === null || _a === void 0 ? void 0 : _a.color) !== null && _b !== void 0 ? _b : "#99bb0";
    return (react_1["default"].createElement("div", { id: "exampleModalCenter" },
        react_1["default"].createElement("div", { className: "container-fluid" },
            react_1["default"].createElement(Header_1["default"], { color: color }),
            react_1["default"].createElement("div", { className: "container" },
                react_1["default"].createElement("div", { className: "row mt-5" },
                    react_1["default"].createElement("div", { className: "col-lg-4 col-md-4  text-center" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "166.675", height: "166.675", viewBox: "0 0 166.675 166.675", onClick: function () {
                                    var _a, _b;
                                    return smileyClickHandler((_b = (_a = hmData.face) === null || _a === void 0 ? void 0 : _a.happy) !== null && _b !== void 0 ? _b : 1, hmData.tagTexts["hm_whatmadeyouhapp"]);
                                }, style: { cursor: "hand" } },
                                react_1["default"].createElement("path", { "data-name": "Path 1", d: "M99.338,16a83.338,83.338,0,1,0,83.338,83.338A83.583,83.583,0,0,0,99.338,16Zm0,156.871a73.533,73.533,0,1,1,73.533-73.533A73.749,73.749,0,0,1,99.338,172.871Z", transform: "translate(-16 -16)", fill: color }),
                                react_1["default"].createElement("path", { "data-name": "Path 2", d: "M37.471,63.384a4.853,4.853,0,1,1,6.863-6.863,36.987,36.987,0,0,0,51.963,0,4.739,4.739,0,0,1,6.863,0,4.739,4.739,0,0,1,0,6.863A46.452,46.452,0,0,1,37.471,63.384Z", transform: "translate(13.022 45.568)", fill: color }),
                                react_1["default"].createElement("path", { "data-name": "Path 7", d: "M40.58,54.591a1.274,1.274,0,0,0,2.124,0,32.649,32.649,0,0,1,5.159-5.31c3.641-2.883,9.255-5.765,7.283-12.592-1.517-5.31-8.648-7.737-13.5-3.034-4.855-4.7-11.986-2.276-13.5,3.034-1.972,6.827,3.641,9.861,7.283,12.592A33.3,33.3,0,0,1,40.58,54.591Z", transform: "translate(19.205 20.806)", fill: color }),
                                react_1["default"].createElement("path", { "data-name": "Path 8", d: "M67.844,33.555c-4.856-4.7-11.987-2.276-13.5,3.035-1.973,6.828,3.642,9.863,7.283,12.594a32.654,32.654,0,0,1,5.159,5.311,1.274,1.274,0,0,0,2.124,0,32.654,32.654,0,0,1,5.159-5.311c3.642-2.883,9.256-5.766,7.283-12.594C79.831,31.279,72.7,28.851,67.844,33.555Z", transform: "translate(38.513 20.347)", fill: color })))),
                    react_1["default"].createElement("div", { className: "col-lg-4 col-md-4  text-center" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "166.675", height: "166.675", viewBox: "0 0 166.675 166.675", onClick: function () {
                                    var _a, _b;
                                    return smileyClickHandler((_b = (_a = hmData.face) === null || _a === void 0 ? void 0 : _a.sad) !== null && _b !== void 0 ? _b : 3, hmData.tagTexts["hm_whatmadeyousad"]);
                                }, id: "clikbnicon2", style: { cursor: "hand" } },
                                react_1["default"].createElement("path", { "data-name": "Path 1", d: "M99.338,16a83.338,83.338,0,1,0,83.338,83.338A83.583,83.583,0,0,0,99.338,16Zm0,156.871a73.533,73.533,0,1,1,73.533-73.533A73.749,73.749,0,0,1,99.338,172.871Z", transform: "translate(-16 -16)", fill: color }),
                                react_1["default"].createElement("path", { "data-name": "Path 2", d: "M37.471,68.654a4.853,4.853,0,0,0,6.863,6.863,36.987,36.987,0,0,1,51.963,0,4.739,4.739,0,0,0,6.863,0,4.739,4.739,0,0,0,0-6.863A46.452,46.452,0,0,0,37.471,68.654Z", transform: "translate(13.022 40.666)", fill: color }),
                                react_1["default"].createElement("circle", { "data-name": "Ellipse 2", cx: "12.203", cy: "12.203", r: "12.203", transform: "translate(46.519 51.212)", fill: color }),
                                react_1["default"].createElement("circle", { "data-name": "Ellipse 3", cx: "12.203", cy: "12.203", r: "12.203", transform: "translate(95.332 51.212)", fill: color })))),
                    react_1["default"].createElement("div", { className: "col-lg-4 col-md-4 text-center" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "166.675", height: "166.675", viewBox: "0 0 166.675 166.675", onClick: function () {
                                    var _a, _b;
                                    return smileyClickHandler((_b = (_a = hmData.face) === null || _a === void 0 ? void 0 : _a.neutral) !== null && _b !== void 0 ? _b : 2, hmData.tagTexts["hm_whatcanyouimp"]);
                                }, id: "clikbnicon3", style: { cursor: "hand" } },
                                react_1["default"].createElement("path", { "data-name": "Path 1", d: "M99.338,16a83.338,83.338,0,1,0,83.338,83.338A83.583,83.583,0,0,0,99.338,16Zm0,156.871a73.533,73.533,0,1,1,73.533-73.533A73.749,73.749,0,0,1,99.338,172.871Z", transform: "translate(-16 -16)", fill: color }),
                                react_1["default"].createElement("circle", { "data-name": "Ellipse 2", cx: "12.203", cy: "12.203", r: "12.203", transform: "translate(46.519 51.212)", fill: color }),
                                react_1["default"].createElement("circle", { "data-name": "Ellipse 3", cx: "12.203", cy: "12.203", r: "12.203", transform: "translate(95.332 51.212)", fill: color }),
                                react_1["default"].createElement("rect", { "data-name": "Rectangle 4", width: "73.22", height: "10.326", rx: "5.163", transform: "translate(46.519 102.842)", fill: color }))))),
                react_1["default"].createElement("div", { className: "row mt-5 mb-5" },
                    react_1["default"].createElement("div", { className: "col-lg-12 col-md-12" },
                        react_1["default"].createElement("div", { className: "hapmetexthds text-center" }, hmData.tagTexts["hm_howwasexp"])))))));
};
var mapStateToProps = function (state) {
    return {
        rwd: state.reviewData
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        onUpdateFaceId: function (faceid) {
            return dispatch({ type: "UPDATEFACEID", value: faceid });
        },
        onUpdateMobileAndServiceId: function (values) {
            return dispatch({ type: "UPDATEMOBILEANDSERVICE", value: values });
        }
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Smiley);
