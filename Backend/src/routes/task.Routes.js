
const express = require("express") 
const router = express.Router()
const taskController = require('../controller/task.Controller')

router.post('/', taskController.createTask )
router.patch('/:id', taskController.updateTask)
router.delete('/:id', taskController.deleteTask )

module.exports = router