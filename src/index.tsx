import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/FirstPage/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Assets/css/dist/pop_style.css";
import { createStore } from "redux";
import Reducer from "./store/reducer";
import { Provider } from "react-redux";

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
