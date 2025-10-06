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
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
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
    }],


    googleAccessToken: { type: String },
    googleRefreshToken: { type: String },
    googleTokenExpiry: { type: Date }


}, {timestamps : true})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;