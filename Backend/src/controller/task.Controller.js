
const TaskModel = require("../model/Task.Model");
const googleCalendarService = require('../service/googleCalendar.service')

const getTasks = async (req, res) => {

    const userId = req.body;
    try{
        const tasks = await TaskModel.find({
        userId: userId
        });

        console.log(tasks);
        
        res.json(tasks);
    } catch(err) {
        res.status(500).json({
           error: err.message
        })
    }
}

const createTask = async (req, res) => {
    const {title, description, startDate, dueDate} = req.body;

    try {
        const newTask = await TaskModel.create({
            title,
            description,
            startDate,
            dueDate
        })

        const taskDetails = {
            title: newTask.title,
            description: newTask.description,
            startDate: newTask.startDate,
            dueDate : newTask.dueDate
        };

        await googleCalendarService.createEvent(req.user.id, taskDetails);


        res.status(201).json({
            message: 'task create successfully',
            newTask
        })
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }

}


const updateTask = async(req, res) => {

    const taskId = req.params.id
    const {title, description} = req.body

    const task = await TaskModel.findOneAndUpdate({
        _id: taskId,
        // userId: req.user.id
    },{
        title: title,
        description: description
    })

    if(!task){
        return res.status(404).json({
            message: 'Task not found'
        })
    }

    res.status(201).json({
        message: 'Task update successfully',
        task
    })
}

const deleteTask = async(req, res) => {
    const taskId = req.params.id

    const taskDel = await TaskModel.findOneAndDelete({
        _id: taskId,
        // userId: req.user.id 
    })

    if(!taskDel){
        return res.status(404).json({
            message: 'Task not found'
        })
    }

    res.status(201).json({
        message: 'Task deleted !'
    })
}





module.exports ={
    getTasks,
    createTask,
    updateTask,
    deleteTask
}