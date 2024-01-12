const express = require("express");
const {
  getAll,
  getAudio,
  getNewAudio,
} = require("../controllers/audioControllers");
const audioRouter = express.Router();

audioRouter.get("/", getAll);
audioRouter.get("/new", getNewAudio);
audioRouter.get("/:slug", getAudio);

module.exports = audioRouter;
