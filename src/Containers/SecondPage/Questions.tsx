import Question from "./Question";
import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { Route } from "react-router-dom";

const Questions = (props) => {
  let hmservicedata = props.location.state.hmServiceData;
  let tagtext = props.location.state.tagTexts;
  let hmquestion = props.location.state.hmServiceQuestion;

  let questionId = hmquestion[0].questionId;
  let ansList = [];
  const questions = [];
  let i;
  for (i = 0; i < hmquestion.length; i++) {
    if (hmquestion[i].questionId === questionId) {
      ansList.push(hmquestion[i]);
    } else {
      questionId = hmquestion[i].questionId;
      i--;
      let ob = (
        <Question
          anslist={ansList}
          questionid={hmquestion[i].questionId}
          key={hmquestion[i].questionId}
          questiontext={hmquestion[i].questionText}
          tagtext={tagtext}
          color={hmservicedata.color}
        ></Question>
      );
      questions.push(ob);
      ansList = [];
    }
  }
  if (ansList.length > 0) {
    i--;
    let ob = (
      <Question
        anslist={ansList}
        questionid={hmquestion[i].questionId}
        key={hmquestion[i].questionId}
        questiontext={hmquestion[i].questionText}
        tagtext={tagtext}
        color={hmservicedata.color}
      ></Question>
    );
    questions.push(ob);
  }

  return (
    <div id="secondModalCenter">
      <Header
        color={hmservicedata != null ? hmservicedata.color : "#09200"}
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
              color={hmservicedata != null ? hmservicedata.color : "#09200"}
              obj={{ ...props }}
            ></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
