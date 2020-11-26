import React, { useEffect, useState } from "react";
import Header from "../Shared/Header";
import { Route, Link, Switch } from "react-router-dom";
import Questions from "../SecondPage/Questions";
import axios from "../../axios";

const Smiley = (props) => {
  const paramsData = props.match.params;
  const [hmData, sethmData] = useState({
    hmServiceData: null,
    tagTexts: null,
    hmServiceQuestion: null,
  });
  const [param] = useState({
    servicekey: paramsData.servicekey,
    lang: paramsData.lang,
    mobile: paramsData.mobile,
  });
  useEffect(() => {
    axios
      .get("/public-hmdata", {
        params: {
          serviceKey: param.servicekey,
          lang: param.lang,
        },
      })
      .then((response) => {
        let publicHmsKey = response.data.publicHmsKey;
        sethmData({
          hmServiceData: publicHmsKey.hmKeyServiceKeydto,
          tagTexts: publicHmsKey.tagText,
          hmServiceQuestion: publicHmsKey.hmQuestionAnswer,
        });
      });
  }, [param]);
  return (
    <div className="container-fluid">
      <Header></Header>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4 col-md-4  text-center">
            <div>
              <Link
                to={{
                  pathname: "/questions",
                }}
                id="clikbnicon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="166.675"
                  height="166.675"
                  viewBox="0 0 166.675 166.675"
                >
                  <path
                    data-name="Path 1"
                    d="M99.338,16a83.338,83.338,0,1,0,83.338,83.338A83.583,83.583,0,0,0,99.338,16Zm0,156.871a73.533,73.533,0,1,1,73.533-73.533A73.749,73.749,0,0,1,99.338,172.871Z"
                    transform="translate(-16 -16)"
                    fill="#830823"
                  />
                  <path
                    data-name="Path 2"
                    d="M37.471,63.384a4.853,4.853,0,1,1,6.863-6.863,36.987,36.987,0,0,0,51.963,0,4.739,4.739,0,0,1,6.863,0,4.739,4.739,0,0,1,0,6.863A46.452,46.452,0,0,1,37.471,63.384Z"
                    transform="translate(13.022 45.568)"
                    fill="#830823"
                  />
                  <path
                    data-name="Path 7"
                    d="M40.58,54.591a1.274,1.274,0,0,0,2.124,0,32.649,32.649,0,0,1,5.159-5.31c3.641-2.883,9.255-5.765,7.283-12.592-1.517-5.31-8.648-7.737-13.5-3.034-4.855-4.7-11.986-2.276-13.5,3.034-1.972,6.827,3.641,9.861,7.283,12.592A33.3,33.3,0,0,1,40.58,54.591Z"
                    transform="translate(19.205 20.806)"
                    fill="#830823"
                  />
                  <path
                    data-name="Path 8"
                    d="M67.844,33.555c-4.856-4.7-11.987-2.276-13.5,3.035-1.973,6.828,3.642,9.863,7.283,12.594a32.654,32.654,0,0,1,5.159,5.311,1.274,1.274,0,0,0,2.124,0,32.654,32.654,0,0,1,5.159-5.311c3.642-2.883,9.256-5.766,7.283-12.594C79.831,31.279,72.7,28.851,67.844,33.555Z"
                    transform="translate(38.513 20.347)"
                    fill="#830823"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4  text-center">
            <div>
              <Link to="/questions" id="clikbnicon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="166.675"
                  height="166.675"
                  viewBox="0 0 166.675 166.675"
                >
                  <path
                    data-name="Path 1"
                    d="M99.338,16a83.338,83.338,0,1,0,83.338,83.338A83.583,83.583,0,0,0,99.338,16Zm0,156.871a73.533,73.533,0,1,1,73.533-73.533A73.749,73.749,0,0,1,99.338,172.871Z"
                    transform="translate(-16 -16)"
                    fill="#830823"
                  />
                  <path
                    data-name="Path 2"
                    d="M37.471,68.654a4.853,4.853,0,0,0,6.863,6.863,36.987,36.987,0,0,1,51.963,0,4.739,4.739,0,0,0,6.863,0,4.739,4.739,0,0,0,0-6.863A46.452,46.452,0,0,0,37.471,68.654Z"
                    transform="translate(13.022 40.666)"
                    fill="#830823"
                  />
                  <circle
                    data-name="Ellipse 2"
                    cx="12.203"
                    cy="12.203"
                    r="12.203"
                    transform="translate(46.519 51.212)"
                    fill="#830823"
                  />
                  <circle
                    data-name="Ellipse 3"
                    cx="12.203"
                    cy="12.203"
                    r="12.203"
                    transform="translate(95.332 51.212)"
                    fill="#830823"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <div>
              {" "}
              <Link to="/questions" id="clikbnicon3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="166.675"
                  height="166.675"
                  viewBox="0 0 166.675 166.675"
                >
                  <path
                    data-name="Path 1"
                    d="M99.338,16a83.338,83.338,0,1,0,83.338,83.338A83.583,83.583,0,0,0,99.338,16Zm0,156.871a73.533,73.533,0,1,1,73.533-73.533A73.749,73.749,0,0,1,99.338,172.871Z"
                    transform="translate(-16 -16)"
                    fill="#89223a"
                  />
                  <circle
                    data-name="Ellipse 2"
                    cx="12.203"
                    cy="12.203"
                    r="12.203"
                    transform="translate(46.519 51.212)"
                    fill="#89223a"
                  />
                  <circle
                    data-name="Ellipse 3"
                    cx="12.203"
                    cy="12.203"
                    r="12.203"
                    transform="translate(95.332 51.212)"
                    fill="#89223a"
                  />
                  <rect
                    data-name="Rectangle 4"
                    width="73.22"
                    height="10.326"
                    rx="5.163"
                    transform="translate(46.519 102.842)"
                    fill="#89223a"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-12 col-md-12">
            <div className="hapmetexthds text-center">
              How was your experience?
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/questions" component={Questions}></Route>
      </Switch>
    </div>
  );
};

export default Smiley;
