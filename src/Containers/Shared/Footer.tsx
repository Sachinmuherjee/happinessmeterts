import React from "react";

const Footer = (props) => {
  let Back, Feedback, Finish;
  if (props.showBack) {
    Back = (
      <div className="">
        <button type="button" className="btn btn-secondary thbtncol">
          Back
        </button>
      </div>
    );
  }
  if (props.showFeedback) {
    Feedback = (
      <button
        type="button"
        className="btn btn-secondary thbtncol"
        href="#thirdModalCenter"
        data-dismiss="modal"
        data-toggle="modal"
        data-target="#thirdModalCenter"
      >
        Share Your Feedback
      </button>
    );
  }
  if (props.showFinish) {
    Finish = (
      <button
        type="button"
        className="btn btn-secondary thbtncol"
        data-dismiss="modal"
      >
        Finish
      </button>
    );
  }
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">{Back}</div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
          <div className="text-right">
            {Feedback}
            {Finish}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
