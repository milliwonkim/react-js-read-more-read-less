import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App 
      text={
        `Focused, hard work is the real key
        to success. Keep your eyes on the goal, 
        and just keep taking the next step 
        towards completing it.`
      }
      maxLength={35} 
    />
  </React.StrictMode>,
  rootElement
);
