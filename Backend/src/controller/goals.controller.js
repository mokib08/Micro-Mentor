const goalModel = require("../model/goals.Model")
const generateGoal = require('../service/ai.service')


// GET /api/goals
const getGoals = async(req, res) => {

    const goalId = req.body

    const goal = await goalModel.find({
        userId: goalId
    })

    res.status(200).json({
        message: 'get presemt goal',
        goal
    })
}

// POST /api/goals (manually create)
const createGoal = async(req, res) => {
    const {title, description, deadline} = req.body;

    const goal = await goalModel.create({
        // userId: req.user.id,
        title,
        description,
        deadline,
    })

    res.status(201).json({
        message: 'goal create successfully',
        goal
    })
}


// POST /api/goals/generate (Gemini micro-goals)
const generateGoals = async(req, res) =>{
    const {mainGoal} = req.body

     // service call
    const microGoals = await generateGoal(mainGoal)
    
    // Save to DB for user
    const saveGoals = await goalModel.insertMany(
        microGoals.map((g) => ({
            userId: req.user.id,
            title: g.title,
            description: g.description,
            deadline: g.deadline,
            generated: true,
        }))
    );

    res.status(201).json({
        message: 'microGoal successfully saved',
        saveGoals
    })
}


// PATCH /api/goals/:id (update status or anything)
const updateGoal = async(req, res) => {
    const goalId = req.params.id
    const {title, description} = req.body

    const goal = await goalModel.findOneAndUpdate({
        _id: goalId,
        // userId: req.user.id 
    },{
        title: title,
        description: description
    })

    if(!goal){
        return res.status(404).json({
            message: 'Goals not found'
        })
    }

    res.status(201).json({
        message: 'Goal update successfully',
        goal
    })

}


// DELETE /api/goals/:id
const deletedGoal = async(req, res) =>{
    const goalId = req.params.id;

    const goalDel = await goalModel.findOneAndDelete({
        _id: goalId
    })

    if(!goalDel){
        return res.status(404).json({
            message: 'Goal not found'
        })
    }

    res.status(201).json({
        message: 'Goal deleted !'
    })
}

module.exports = {
    getGoals,
    createGoal,
    generateGoals,
    updateGoal,
    deletedGoal
}