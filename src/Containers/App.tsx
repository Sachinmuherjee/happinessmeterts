import React, { useEffect, useState } from "react";
import Smiley from "./smiley";
import Questions from "./Questions";
import Improve from "./Improve";
import axios from "../axios";

const App = () => {
  const [hmData, sethmData] = useState({
    hmServiceData: null,
    tagTexts: null,
    hmServiceQuestion: null,
  });
  useEffect(() => {
    axios
      .get("/public-hmdata", {
        params: {
          serviceKey: "srrov02l",
          lang: "en",
        },
      })
      .then((response) => {
        //console.log(response);
        let publicHmsKey = response.data.publicHmsKey;
        sethmData({
          hmServiceData: publicHmsKey.hmKeyServiceKeydto,
          tagTexts: publicHmsKey.tagText,
          hmServiceQuestion: publicHmsKey.hmQuestionAnswer,
        });
        console.log(hmData);
      });
  }, []);
  return (
    <div>
      <Smiley></Smiley>
      <Questions></Questions>
      <Improve></Improve>
    </div>
  );
};

export default App;
