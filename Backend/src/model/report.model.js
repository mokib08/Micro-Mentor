const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  weekStart: {
    type: Date,
    required: true,
  },
  weekEnd: {
    type: Date,
    required: true,
  },
  goalsSnapShot: [
    {
      goalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Goal",
      },
      title: String,
      status: String,
      createdAt: Date,
      completedAt: Date,
    },
    ],
    stats: {
        totalGoalsAdded: Number,
        totalGoalsCompleted: Number,
        avgComplitionHours: Number,
        pointsEarned: Number,
        streakAtEnd: Number,
        bedgesAwarded: [String]
    },
    prompt: String,
    aiResponseRaw: mongoose.Schema.Types.Mixed,
    summary: String,
    generatedAt: Date,
    status: {
        type: String,
        enum: ["pending", 'generated', 'failed'],
        default: 'pending'
    }
},{timestamps: true});

const reportModel = mongoose.model('report', reportSchema )

module.exports = reportModel;
