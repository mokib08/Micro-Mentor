const mongoose = require("mongoose");

const bedgeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    key: {
      type: String,
      required: true,
      unique: true, // for insuring no duplicate bedges
      lowercase: true,
    },
    description: {
      type: String,
    },
    iconUrl: {
      type: String,
    },
    criteriaType: {
      type: String,
      enum: ["streak", "total_complited", "custom"],
      required: true,
    },
    criteriaValue: {
      type: mongoose.Schema.Types.Mixed, // can be number or object
      required: true,
    },
    pointsAwarded: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdminOnly: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const bedgeModel = mongoose.model("bedge", bedgeSchema);

module.exports = bedgeModel;
