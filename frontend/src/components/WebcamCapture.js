import React, { useRef } from "react";
import Webcam from "react-webcam";
import { predictExpression } from "../services/api";

const WebcamCapture = ({ setExpression }) => {
  const webcamRef = useRef(null);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const result = await predictExpression(imageSrc);
    setExpression(result.expression);
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Detect Expression</button>
    </div>
  );
};

export default WebcamCapture;