'use strict'
const mongoose = require('mongoose');
const userSchema = require("../DBSchema/userSchema");
const trainSchema = require("../DBSchema/trainSchema");
const purchaseSchema = require("../DBSchema/purchaseSchema");



mongoose.connect('mongodb://127.0.0.1:27017/Users', (error) => {
    if (error) {
        console.log(error);
        process.exit(-1);
    }
    console.log("Connected to Users Database");
});

mongoose.model('User', userSchema);
mongoose.model('Train', trainSchema);
mongoose.model('Purchase', purchaseSchema);

module.exports = mongoose;