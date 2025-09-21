
const express = require("express") 
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')
const taskController = require('../controller/task.Controller')


router.get('/', authMiddleware.authMiddleware, taskController.getTasks)
router.post('/', authMiddleware.authMiddleware, taskController.createTask )
router.patch('/:id', authMiddleware.authMiddleware, taskController.updateTask)
router.delete('/:id', authMiddleware.authMiddleware, taskController.deleteTask )

module.exports = router