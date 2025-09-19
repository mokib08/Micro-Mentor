const TaskModel = require("../model/Task.Model")

// const getTasks = async (req, res) => {
//     try{
//         const tasks = await TaskModel.find({
//         userId: req.user.id
//         });

//         res.json(tasks);
//     } catch(err) {
//         res.status(500).json({
//            error: err.message
//         })
//     }


// }

const createTask = async (req, res) => {
    const {title, description, startDate, dueDate} = req.body;

    try {
        const newTask = await TaskModel.create({
            title,
            description,
            startDate,
            dueDate
        })

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


module.exports ={
    // getTasks
    createTask
}