import Question from "./Question";
import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { Route } from "react-router-dom";
const Questions = (props) => {
  //const hmData = props.hmdata;
  //console.log(hmData);
  return (
    <div id="secondModalCenter">
      <Header color="#09200"></Header>
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
                <Question></Question>
              </div>
            </div>
            <Footer
              showBack={true}
              showFeedback={true}
              showFinish={true}
            ></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
