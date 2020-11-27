"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Answer = function (props) {
    // const AnswerList = [];
    // for (let i = 0; i < 3; i++) {
    //   let ans = (
    //     <div className="custom-control custom-radio" key={i}>
    //       <input
    //         type="radio"
    //         id="customRadio1"
    //         name="customRadio1"
    //         className="custom-control-input"
    //       />
    //       <label
    //         className="custom-control-label radcustom"
    //         htmlFor="customRadio1"
    //       >
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit
    //       </label>
    //     </div>
    //   );
    //   AnswerList.push(ans);
    // }
    return (react_1["default"].createElement("div", { className: "formtext" },
        react_1["default"].createElement("div", { className: "custom-control custom-radio" },
            react_1["default"].createElement("input", { type: "radio", id: "customRadio" + props.reasonid, name: "customRadio" + props.reasonid, className: "custom-control-input" }),
            react_1["default"].createElement("label", { className: "custom-control-label radcustom", htmlFor: "customRadio" + props.reasonid }, props.reasontext))));
};
exports["default"] = Answer;
