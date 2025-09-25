const aiService = require("../service/ai.service")
const reportModel = require("../model/report.model")
const goalsModel = require("../model/goals.Model")

async function getWeeklyReview(req, res) {
    try {
        const goals = await goalsModel.find({ user: req.user._id })
        
        const reviewSummary = await aiService.generateWeeklyReview(goals)

        res.json({success: true, review: reviewSummary})

    } catch (err) {
        console.error("Review error", err)
        return res.status(500).json({success: false, message: "Error generating review"})
    }
}

async function generateWeeklyReview(req, res) {
    return res.json({message: "weekly review route working"})
}

module.exports = {
    getWeeklyReview,
    generateWeeklyReview
}