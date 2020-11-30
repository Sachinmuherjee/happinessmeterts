import React from "react";
//import Improve from "../ThirdPage/Improve";
import { connect } from "react-redux";

const Footer = (props) => {
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
        style={{ backgroundColor: props.color }}
        onClick={() => showBackClickHandle()}
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
        style={{ backgroundColor: props.color }}
        onClick={() => onFinishHandler()}
      >
        Finish
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUpdateAnsList: (anslist) =>
//       dispatch({ type: "UPDATEANSLIST", value: anslist }),
//   };
// };

export default connect(mapStateToProps)(Footer);
