const mongoose = require("mongoose");
const listingSchema = require("./listingModel");

const lostPetListingSchema = new mongoose.Schema({
  ...listingSchema.obj,
  lostDate: {
    type: Date,
    required: true,
  },
  lostLocation: {
    type: String,
    required: true,
  },
  found: {
    type: Boolean,
    required: true,
  },
  findingReports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FindingReport",
    },
  ],
});

module.exports = mongoose.model("LostPetListing", lostPetListingSchema);
