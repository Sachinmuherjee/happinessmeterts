import Smiley from "./smiley";
import Questions from "../SecondPage/Questions";
import Improve from "../ThirdPage/Improve";
import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      </Switch>
    </BrowserRouter>
  );
};

export default App;
