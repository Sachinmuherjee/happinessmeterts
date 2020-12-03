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
var initialState = {
    reviewData: {
        serviceId: null,
        faceId: null,
        answerList: [],
        userComment: null,
        mobile: null
    }
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    if (action.type === "UPDATEFACEID") {
        return {
            reviewData: __assign(__assign({}, state.reviewData), { faceId: action.value })
        };
    }
    if (action.type === "UPDATEMOBILEANDSERVICE") {
        return {
            reviewData: __assign(__assign({}, state.reviewData), { mobile: state.reviewData.mobile == null
                    ? action.value.mobile
                    : state.reviewData.mobile, serviceId: action.value.serviceId })
        };
    }
    if (action.type === "UPDATEANSLIST") {
        return {
            reviewData: __assign(__assign({}, state.reviewData), { answerList: action.value })
        };
    }
    if (action.type === "UPDATEUSERCOMMENT") {
        return {
            reviewData: __assign(__assign({}, state.reviewData), { userComment: action.value })
        };
    }
    if (action.type === "UPDATEMOBILE") {
        return {
            reviewData: __assign(__assign({}, state.reviewData), { mobile: action.value })
        };
    }
    return state;
};
exports["default"] = reducer;
