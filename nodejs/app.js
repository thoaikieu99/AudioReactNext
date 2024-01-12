const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
var cors = require("cors");

const express = require("express");
const app = express();
app.use(express.json());

const router = require("./app/routers");
const AppError = require("./app/ultils/appErrors");
const globalError = require("./app/controllers/erroeControllers");

app.use(cors());
app.options("*", cors());
app.use("/api/v1", router);

app.get("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on server! `, 404));
});

app.use(globalError);

const serve = app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/api/v1`);
});

const { sequelize } = require("./app/model");

sequelize.sync({ alter: true });

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  serve.close(() => {
    process.exit(1);
  });
});
