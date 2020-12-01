//import moduleName from 'react'
import Header from "../Shared/Header";
import React from "react";
import emoji from "../../Assets/img/emoji.png";

const ThankYou = (props) => {
  let hmservicedata = props.location.state.hmServiceData;
  let tagtext = props.location.state.tagTexts;
  let color = hmservicedata.color;
  return (
    <div id="fourthModalCenter">
      <Header color={color}></Header>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="thanpics text-center mt-3 mb-5">
              <img
                src={emoji}
                style={{ width: "150px", height: "150px" }}
                alt="Clickable Button"
              />
            </div>
            <div className="thanksstitle" style={{ color: color }}>
              Thank You!{" "}
            </div>
            <div className="thanksstitlesec mb-5" style={{ color: color }}>
              For your Participation.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
