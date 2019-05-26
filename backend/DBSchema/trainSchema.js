'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    ticketsAvailable: {
        type: Number,
        required: true
    },
    dateTime: {
        type: Number,
        required: true
    }
});

module.exports = trainSchema;