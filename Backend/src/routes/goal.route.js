
const express = require('express')
const router = express.Router()
const {
    // getGoals,
    createGoal,
    generateGoals,
    updateGoal,
    deletedGoal
} = require('../controller/goals.controller')


// router.get('/', getGoals)
router.post('/', createGoal );
router.post('/generate', generateGoals)
router.patch('/:id', updateGoal)
router.delete('/:id', deletedGoal)


module.exports = router