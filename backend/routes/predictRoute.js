const express = require("express");
const router = express.Router();
const predictController = require("../controllers/predictController");

router.post("/predict", predictController.predictExpression);

module.exports = router;