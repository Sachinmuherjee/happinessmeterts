import React from "react";
import Footer from "../Shared/Footer";
import { connect } from "react-redux";

const Improve = (props) => {
  let hmservicedata = props.location.state.hmServiceData;
  let tagtext = props.location.state.tagTexts;
  let color = hmservicedata.color;
  const userCommentChangeHandler = (evt) => {
    props.onUpdateUserComment(evt.target.value);
  };
  const mobileChangeHandler = (evt) => {
    props.onUpdateMobile(evt.target.value);
  };
  return (
    <div>
      <div className="row mt-5">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="feedtitle" style={{ color: color }}>
            {tagtext["hm_whatcanyouimp"]}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3 mb-3">
          <div className="col-lg-12 col-md-12">
            <div className="feedinner">
              <form>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder={tagtext["hm_tellusmore"]}
                    rows={6}
                    style={{ resize: "none" }}
                    value={props.reviewData.userComment ?? ""}
                    onChange={(evt) => userCommentChangeHandler(evt)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="phone"
                    className="form-control "
                    id="telephone"
                    placeholder={tagtext["hm_yourmobileopti"]}
                    value={props.reviewData.mobile}
                    onChange={(evt) => mobileChangeHandler(evt)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer
          showBack={true}
          showFinish={true}
          showFeedback={false}
          color={color}
          obj={{ ...props }}
        ></Footer>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    reviewData: state.reviewData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUserComment: (comment) => {
      dispatch({ type: "UPDATEUSERCOMMENT", value: comment });
    },
    onUpdateMobile: (mobile) => {
      dispatch({ type: "UPDATEMOBILE", value: mobile });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Improve);
