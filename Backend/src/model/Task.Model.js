const mongoose  = require('mongoose');

const TaskSchema = new mongoose.Schema({
    // userId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    title: {
        type: String,
        required: true
    },
    description: String,
    StartDate: Date,
    dueDate: Date,
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    }
}, { timestamps: true });


const TaskModel = mongoose.model('task', TaskSchema);

module.exports = TaskModel;

