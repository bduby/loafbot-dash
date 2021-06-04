const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const reqInt = {
    type: Number,
    required: true
}

const bankSchema = mongoose.Schema({
    userId: reqString,
    name: reqString,
    wallet: reqInt,
    bank: reqInt
})

module.exports = mongoose.model('bank', bankSchema)