import Question from "./Question";
import React, { useState, useEffect } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { Route } from "react-router-dom";
const Questions = (props) => {
  console.log(props);
  const [hmData, sethmData] = useState({
    hmservicedata: props.location.state.hmServiceData,
    tagtext: props.location.state.tagTexts,
    hmquestion: props.location.state.hmServiceQuestion,
  });
  let questionId = hmData.hmquestion[0].questionId;
  let ansList = [];
  const questions = hmData.hmquestion.map((question, index, arr) => {
    if (question.questionId === questionId) {
      ansList.push(question);
    } else {
      let ob = (
        <Question
          anslist={ansList}
          questionid={questionId}
          key={questionId}
          questiontext={question.questionText}
          tagtext={hmData.tagtext}
          color={hmData.hmservicedata.color}
        ></Question>
      );
      ansList = [];
      return ob;
    }
    if (index === arr.length - 1) {
      return (
        <Question
          anslist={ansList}
          questionid={questionId}
          key={questionId}
          questiontext={question.questionText}
          tagtext={hmData.tagtext}
        ></Question>
      );
    }
  });

  return (
    <div id="secondModalCenter">
      <Header
        color={
          hmData.hmservicedata != null ? hmData.hmservicedata.color : "#09200"
        }
      ></Header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="secinners">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {questions}
              </div>
            </div>
            <Footer
              showBack={true}
              showFeedback={true}
              showFinish={true}
              color={
                hmData.hmservicedata != null
                  ? hmData.hmservicedata.color
                  : "#09200"
              }
            ></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
