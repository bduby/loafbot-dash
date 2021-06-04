const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const reqInt = {
    type: Number,
    required: true
}

const inventorySchema = mongoose.Schema({
    userId: reqString,
    name: reqString,
    inventory: [Object]
},
{
    versionKey: false
})

module.exports = mongoose.model('inventories', inventorySchema)