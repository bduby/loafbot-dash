const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const reqInt = {
    type: Number,
    required: true
}

const crumbsSchema = mongoose.Schema({
    userId: reqString,
    name: reqString,
    crumbs: reqInt
})

module.exports = mongoose.model('crumbs', crumbsSchema)