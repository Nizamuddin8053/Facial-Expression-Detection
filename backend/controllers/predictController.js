const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

exports.predictExpression = (req, res) => {
  const base64Data = req.body.image.replace(/^data:image\/jpeg;base64,/, "");

  const filePath = path.join(__dirname, "../uploads/image.jpg");

  fs.writeFileSync(filePath, base64Data, "base64");

  exec(
    `python python/predict.py "${filePath}"`,
    (error, stdout, stderr) => {
      if (error) {
        return res.json({ expression: "Error" });
      }

      const lines = stdout.trim().split("\n");
      console.log("lines are:",lines)
      const prediction = lines[lines.length-1];
      console.log("prediction is:",prediction)
      res.json({ expression: prediction });
    }
  );
};