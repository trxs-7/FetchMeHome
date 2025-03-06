const mongoose = require("mongoose");

const adoptionRequestSchema = new mongoose.Schema(
  {
    requestId: {
      type: String,
      required: true,
    },
    listingId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
    requestDate: {
      type: Date,
      required: true,
    },
    requestStatus: {
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
