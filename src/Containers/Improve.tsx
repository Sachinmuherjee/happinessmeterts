import React from "react";
import Footer from "./Footer";

const Improve = () => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="feedtitle">What Can We Improve?</div>
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
                    placeholder="Tell us more..."
                    rows={6}
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="phone"
                    className="form-control "
                    id="telephone"
                    placeholder="Your Mobile Number (optional)"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer showBack={true} showFinish={true} showFeedback={false}></Footer>
      </div>
    </div>
  );
};
export default Improve;
