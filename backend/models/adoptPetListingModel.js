const mongoose = require("mongoose");
const listingSchema = require("./listingModel");

const adoptPetListingSchema = new mongoose.Schema({
  ...listingSchema.obj,
  adoptRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AdoptionRequest",
    },
  ],
});

module.exports = mongoose.model("AdoptPetListing", adoptPetListingSchema);
