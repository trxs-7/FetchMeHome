const express = require("express");
const adoptPetListingRouter = express.Router();
const {
  getAdoptPetListings,
  getAdoptPetListing,
  createAdoptPetListing,
  updateAdoptPetListing,
  deleteAdoptPetListing,
} = require("../controllers/adoptPetListingController");

adoptPetListingRouter.get("/", getAdoptPetListings);
adoptPetListingRouter.get("/:id", getAdoptPetListing);
adoptPetListingRouter.post("/", createAdoptPetListing);
adoptPetListingRouter.patch("/:id", updateAdoptPetListing);
adoptPetListingRouter.delete("/:id", deleteAdoptPetListing);

module.exports = adoptPetListingRouter;
