const express = require("express")
const reviewController = require('../controller/review.controller')
const authMiddleware = require("../middlewares/auth.middleware")

const router = express.Router();

router.get("/weekly", authMiddleware.authMiddleware, reviewController.getWeeklyReview)



module.exports = router;