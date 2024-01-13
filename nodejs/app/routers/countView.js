const express = require("express");
const {
  getDayViews,
  addViews,
  getMonthView,
  getYearView,
  getAllView,
} = require("../controllers/countVIewsControllers");

const countviewRouter = express.Router();

countviewRouter.get("/add", addViews);
countviewRouter.get("/top-day", getDayViews);
countviewRouter.get("/top-month", getMonthView);
countviewRouter.get("/top-year", getYearView);
countviewRouter.get("/nghe-nhieu", getAllView);
module.exports = countviewRouter;
