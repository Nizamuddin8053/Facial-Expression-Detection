import React, { useState } from "react";
import WebcamCapture from "./components/WebcamCapture";
import ExpressionResult from "./components/ExpressionResult";

function App() {
  const [expression, setExpression] = useState("");

  return (
    <div>
      <h1>Facial Expression Detector (ML)</h1>
      <WebcamCapture setExpression={setExpression} />
      <ExpressionResult expression={expression} />
    </div>
  );
}

export default App;