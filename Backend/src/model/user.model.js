const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
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
    fullName: {
        firstName: {
            type: String,
            required : true
        },
        lastName: {
            type: String,
            required: true
        },
    },
    badges: [{
        type: String
    }]
}, {timestamps : true})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;