'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({

    trainId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = purchaseSchema;