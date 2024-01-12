const express = require("express");
const { getShow } = require("../controllers/categoriControllers");

const categoriRouter = express.Router();

categoriRouter.get("/show", getShow);

module.exports = categoriRouter;
