const mongoose = require("mongoose");

const findingReportSchema = new mongoose.Schema(
  {
    reportId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    reportDate: {
      type: Date,
      required: true,
    },
    reportLocation: {
      type: String,
      required: true,
    },
    reportStatus: {
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

module.exports = mongoose.model("FindingReport", findingReportSchema);
