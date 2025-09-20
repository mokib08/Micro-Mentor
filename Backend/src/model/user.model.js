const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        select: false
    },
    badges: [{
        type: String
    }]
}, {timestamps : true})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;