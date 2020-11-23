import Header from "./Header";
import Question from "./Question";

const Questions = (props) => {
  return (
    <div>
      {/* <Header></Header> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
