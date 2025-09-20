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
        bedge: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bedge"
        },
        awardedAt: {
            type: Date,
            default: Date.now
        } 
    }]
}, {timestamps : true})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;