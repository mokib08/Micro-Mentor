const mongoose = require("mongoose")


const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
    countery: String
})

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
        type : String
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
        role: {
            type: String,
            enum: ['student', 'teacher'],
            default: 'student'
        },
        addresses: {
            addressSchema
        }
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;