const express = require("express");
const audioRouter = require("./routerAudio");
const userRouter = require("./routerUser");
const categoriRouter = require("./routerCategori");
const router = express.Router();

router.use("/audios", audioRouter);
router.use("/users", userRouter);
router.use("/categories", categoriRouter);
module.exports = router;
