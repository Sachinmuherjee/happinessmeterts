"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var instance = axios_1["default"].create({
    baseURL: "https://localhost:44339/api"
});
//instance.defaults.headers.common["Authorization"] = "Auth Token from";
exports["default"] = instance;
