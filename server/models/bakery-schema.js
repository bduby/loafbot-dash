const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const bakery = mongoose.Schema({
    userId: reqString,
    name: reqString,
    ovens: [Object],
    stats: {
        bakeryName: String,
        maxOvens: Number,
        registerSize: Number,
        bakeryLevel: Number
    }
},
{
    versionKey: false
})

module.exports = mongoose.model('bakeries', bakery)