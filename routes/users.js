const express = require("express");
const userRouter = express.Router();
const datas = require("../data.json");

function middleware1(req, res, next) {
  console.log("hello from middleware1");
  next();
}
function middleware2(req, res, next) {
  console.log("hello from middleware2");
  next();
}
userRouter.get("/get-data", [middleware2, middleware1], (req, res) => {
  console.log("this is from userRouter");
  res.json(datas.users);
});

module.exports = userRouter;
