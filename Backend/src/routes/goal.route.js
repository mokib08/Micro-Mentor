
const express = require('express')
const router = express.Router()
const goalController = require('../controller/goals.controller')
const middleware = require('../middlewares/auth.middleware')

router.get('/', middleware.authMiddleware, goalController.getGoals)
router.post('/', middleware.authMiddleware, goalController.createGoal );
router.post('/generate', middleware.authMiddleware, goalController.generateGoals)
router.patch('/:id', middleware.authMiddleware, goalController.updateGoal)
router.delete('/:id', middleware.authMiddleware, goalController.deletedGoal)


module.exports = router