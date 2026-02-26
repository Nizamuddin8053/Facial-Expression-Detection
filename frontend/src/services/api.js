import axios from "axios";

export const predictExpression = async (imageSrc) => {
  const response = await axios.post(
    "http://localhost:5000/api/predict",
    { image: imageSrc }
  );

  console.log("response is:",response)
  return response.data;
};