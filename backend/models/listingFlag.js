const mongoose = require("mongoose");

const listingFlagSchema = new mongoose.Schema(
  {
    flagId: {
      type: String,
      required: true,
    },
    listingId: {
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

module.exports = mongoose.model("ListingFlag", listingFlagSchema);
