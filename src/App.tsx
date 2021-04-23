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
        <h2>Weather for Trondheim in the coming days:</h2>
        <MetApi.Line width={600} height={200} lat={63} lon={10} />
        <h2>Population growth of Bærum kommune</h2>
        <SsbBefolkning.Threshold
          width={600}
          height={200}
          yLabel={"Population"}
          aboveThresholdColor={"#00BFFF"}
          municipalities={["K-3024"]}
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
