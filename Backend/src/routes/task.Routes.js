
const express = require("express") 
const router = express.Router()
const taskController = require('../controller/taskController')

router.post('/', taskController.getTasks )


module.exports = router