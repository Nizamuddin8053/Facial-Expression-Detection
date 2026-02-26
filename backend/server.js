const express = require("express");
const cors = require("cors");

const predictRoute = require("./routes/predictRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", predictRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});