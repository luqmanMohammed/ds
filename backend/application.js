'use strict'

const express = require("express");
const application = express();
const bodyParser = require("body-parser");
// const cors = require('cors');

const api = require("./api");

application.listen(9500, "localhost", (error) => {
    if(error) {
        console.log(error);
        process.exit(-1);
    }
    console.log("Server is listening to port 9500");
});