import Smiley from "./smiley";
import Questions from "../SecondPage/Questions";
import Improve from "../ThirdPage/Improve";
import ThankYou from "../FourthPage/ThankYou";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/:servicekey/:lang/:mobile"
          exact
          component={Smiley}
        ></Route>
        <Route path="/questions" component={Questions}></Route>
        <Route path="/improve" component={Improve}></Route>
        <Route path="/thankyou" component={ThankYou}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
