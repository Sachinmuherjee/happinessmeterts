import React, { useState } from "react";
import Answer from "./Answer";
const Question = (props) => {
  let anslist = props.anslist;
  let questionid = props.questionid;
  let questiontext = props.questiontext;
  let tagtext = props.tagtext;
  const answers = anslist.map((answer) => {
    return (
      <Answer
        reasonid={answer.reasonId}
        reasontext={answer.reasonText}
        questionid={answer.questionId}
      ></Answer>
    );
  });

  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="headingOne">
        <h4 className="panel-title">
          <a
            role="button"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <i className="more-less glyphicon glyphicon-plus"></i>
            <div
              className="supsubtile"
              style={{
                backgroundColor: props.color,
              }}
            >
              {questiontext}
            </div>
          </a>
        </h4>
      </div>
      <div
        id="collapseOne"
        className="panel-collapse collapse"
        role="tabpanel"
        aria-labelledby="headingOne"
      >
        <div className="panel-body">
          <Answer></Answer>
        </div>
      </div>
    </div>
  );
};
export default Question;
