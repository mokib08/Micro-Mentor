
const mongoose = require('mongoose')


const goalSchema = new mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user',
    //     required: true,
    // },
    title:{
        type: String,
        required: true
    },
    description: String,
    status:{
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    },
     deadline: Date,
     generated: {
        type: Boolean,
        default: false
     }
}, {timestamps: true})


const goalModel = mongoose.model('goal', goalSchema)

module.exports = goalModel



