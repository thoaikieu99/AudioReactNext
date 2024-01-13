const express = require("express");
const { getDayViews } = require("../controllers/countVIewsControllers");

const countviewRouter = express.Router();

countviewRouter.get("/add", getDayViews);

module.exports = countviewRouter;
