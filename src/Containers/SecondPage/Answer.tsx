import React from "react";

const Answer = (props) => {
  return (
    <div className="formtext">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          id={"customRadio" + props.reasonid}
          name={"customRadioq" + props.questionid}
          className="custom-control-input"
          onClick={(evt) =>
            props.changed(evt, props.questionid, props.reasonid)
          }
          defaultChecked={props.isChecked}
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
