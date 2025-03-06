const mongoose = require("mongoose");

const userFlagSchema = new mongoose.Schema(
  {
    flagId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    flaggedBy: {
      type: String,
      required: true,
    },
    flagReason: {
      type: String,
      required: true,
    },
    flagDate: {
      type: Date,
      required: true,
    },
    flagStatus: {
      type: String,
      required: true,
    },
    reviewed: {
      type: Boolean,
      required: true,
    },
    reviewedBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserFlag", userFlagSchema);
