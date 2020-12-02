import React from "react";

import { connect } from "react-redux";
import axios from "../../axios";
const Footer = (props) => {
  let tagText = props.obj.location.state.tagTexts;
  const backClickHandler = () => {
    props.obj.history.goBack();
  };
  const showBackClickHandle = () => {
    props.obj.history.push({
      pathname: "/improve",
      state: { ...props.obj.location.state },
    });
  };
  const onFinishHandler = () => {
    console.log(props.reviewData);
    let reviews = props.reviewData;
    let review = {
      serviceId: reviews.serviceId,
      faceId: reviews.faceId,
      userComment: reviews.userComment,
      mobile: reviews.mobile,
    };
    let ans = reviews.answerList;
    const data = {
      publicHmsData: JSON.stringify(review),
      publichmquestion: JSON.stringify(ans),
    };
    axios.post("/public-hmdata", data).then((response) => {
      let isInserted = response.data.isInserted;
      if (isInserted) {
        props.obj.history.push({
          pathname: "/thankyou",
          state: { ...props.obj.location.state },
        });
      }
    });
  };
  let Back, Feedback, Finish;
  if (props.showBack) {
    Back = (
      <div className="">
        <button
          type="button"
          className="btn btn-secondary thbtncol"
          style={{ backgroundColor: props.color }}
          onClick={() => backClickHandler()}
        >
          {tagText["hm_back"]}
        </button>
      </div>
    );
  }
  if (props.showFeedback) {
    Feedback = (
      <button
        type="button"
        className="btn btn-secondary thbtncol"
        //href="#thirdModalCenter"
        data-dismiss="modal"
        data-toggle="modal"
        data-target="#thirdModalCenter"
        style={{ backgroundColor: props.color }}
        onClick={() => showBackClickHandle()}
      >
        {tagText["hm_shareyourfeed"]}
      </button>
    );
  }
  if (props.showFinish) {
    Finish = (
      <button
        type="button"
        className="btn btn-secondary thbtncol"
        data-dismiss="modal"
        style={{ backgroundColor: props.color }}
        onClick={() => onFinishHandler()}
      >
        {tagText["hm_finish"]}
      </button>
    );
  }
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">{Back}</div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
          <div className="text-right">
            {Feedback}
            {Finish}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    reviewData: state.reviewData,
  };
};

export default connect(mapStateToProps)(Footer);
