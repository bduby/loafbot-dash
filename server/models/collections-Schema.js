const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const collectionsSchema = mongoose.Schema({
    userId: reqString,
    name: reqString,
    collections: []
})

module.exports = mongoose.model('collections', collectionsSchema)