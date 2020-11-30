"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./Containers/FirstPage/App");
var reportWebVitals_1 = require("./reportWebVitals");
require("bootstrap/dist/css/bootstrap.min.css");
require("jquery");
require("popper.js");
require("bootstrap/dist/js/bootstrap.bundle.min");
require("./Assets/css/dist/pop_style.css");
var redux_1 = require("redux");
var reducer_1 = require("./store/reducer");
var react_redux_1 = require("react-redux");
var store = redux_1.createStore(reducer_1["default"]);
react_dom_1["default"].render(react_1["default"].createElement(react_redux_1.Provider, { store: store },
    react_1["default"].createElement(react_1["default"].StrictMode, null,
        react_1["default"].createElement(App_1["default"], null))), document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
