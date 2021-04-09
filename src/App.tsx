import React from "react";
import "./App.css";
import {
  VisualiserProvider,
  MetApi,
  SsbBefolkning,
} from "data-visualisation-platform";

function App() {
  return (
    <VisualiserProvider>
      <div className="App">
        <h1>Hi guys, check out our epic package library!</h1>
        <h2>Weather for the next days:</h2>
        <MetApi.Threshold width={800} height={300} />
        <h2>Population of somewhere</h2>
        <SsbBefolkning.Line
          width={800}
          height={300}
          strokeColor={"red"}
          colorBottom={"aqua"}
        />
        <h2>
          Read more about how to use this project{" "}
          <a href="https://github.com/IT2901-SINTEF01/frontend/wiki/%22data-visualisation-platform%22">
            here
          </a>
        </h2>
      </div>
    </VisualiserProvider>
  );
}

export default App;
