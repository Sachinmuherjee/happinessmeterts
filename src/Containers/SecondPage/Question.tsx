import React from "react";
import Answer from "./Answer";
import { connect } from "react-redux";

const Question = (props) => {
  let anslist = props.anslist;
  // let ansResultList = [];
  const ansChangeHandler = (evt, questionId, reasonId) => {
    //console.log(evt, questionId, reasonId);
    let ob = { reasonId: reasonId, questionId: questionId };
    if (evt.target.checked) {
      props.ansResultList.push(ob);
    } else {
      props.ansResultList = props.ansResultList.filter(
        (x) => x.reasonId !== reasonId
      );
    }
    props.onUpdateAnsList(props.ansResultList);
    return true;
    //console.log(ansResultList);
  };
  let questiontext = props.questiontext;

  const answers = anslist.map((answer) => {
    return (
      <Answer
        reasonid={answer.reasonId}
        reasontext={answer.reasonText}
        questionid={answer.questionId}
        key={answer.reasonId}
        changed={ansChangeHandler}
        isChecked={props.ansResultList.some(
          (x) => x.reasonId === answer.reasonId
        )}
      ></Answer>
    );
  });

  return (
    <div className="panel panel-default">
      <div
        className="panel-heading"
        role="tab"
        id={"heading" + props.questionid}
      >
        <h4 className="panel-title">
          <a
            role="button"
            data-toggle="collapse"
            data-parent="#accordion"
            href={"#collapse" + props.questionid}
            aria-expanded="true"
            aria-controls={"collapse" + props.questionid}
          >
            <i className="more-less glyphicon glyphicon-plus"></i>
            <div
              className="supsubtile"
              style={{
                color: props.color,
              }}
            >
              {questiontext}
            </div>
          </a>
        </h4>
      </div>
      <div
        id={"collapse" + props.questionid}
        className="panel-collapse collapse"
        role="tabpanel"
        aria-labelledby={"heading" + props.questionid}
      >
        <div className="panel-body">{answers}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ansResultList: state.reviewData.answerList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateAnsList: (anslist) =>
      dispatch({ type: "UPDATEANSLIST", value: anslist }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
