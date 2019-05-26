'use strict'
const express = require("express");
const api = express.Router();
const userRoute = require("./Routes/userRoute")
// const trainRoute = require("./Routes/userRoute")
// const userRoute = require("./Routes/userRoute")

api.use("/users", userRoute);
// api.use("/trains", trainRoute);
// api.use("/purchases", purchaseRoute);


module.exports =  api;