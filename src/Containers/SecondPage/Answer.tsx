import React from "react";

const Answer = (props) => {
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
  return (
    <div className="formtext">
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id={"customRadio" + props.reasonid}
          name={"customRadio" + props.reasonid}
          className="custom-control-input"
        />
        <label
          className="custom-control-label radcustom"
          htmlFor={"customRadio" + props.reasonid}
        >
          {props.reasontext}
        </label>
      </div>
    </div>
  );
};
export default Answer;
