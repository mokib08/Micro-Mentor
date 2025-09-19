const TaskModel = require("../model/Task.Model")

const getTasks = async (req, res) => {
    try{
        const tasks = await TaskModel.find({
        userId: req.user.id
        });

        res.json(tasks);
    } catch(err) {
        res.status(500).json({
           error: err.message
        })
    }


}

module.exports ={
    getTasks
}