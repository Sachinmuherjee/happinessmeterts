import React from "react";

const Answer = () => {
  const AnswerList = [];
  for (let i = 0; i < 3; i++) {
    let ans = (
      <div className="custom-control custom-radio" key={i}>
        <input
          type="radio"
          id="customRadio1"
          name="customRadio1"
          className="custom-control-input"
        />
        <label
          className="custom-control-label radcustom"
          htmlFor="customRadio1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </label>
      </div>
    );
    AnswerList.push(ans);
  }
  return <div className="formtext">{AnswerList}</div>;
};
export default Answer;
