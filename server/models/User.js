const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    UserID: { type: String, required: true },
    username: { type: String, required: true },
    tag: { type: Number, required: true },
    locale: { type: String, required: true },
    avatar: { type: String, required: false }
})

const DiscordUser = module.exports = mongoose.model('websiteUsers', UserSchema)