const express = require("express");
const lostPetListingRouter = express.Router();
const {
  getLostPetListings,
  getLostPetListing,
  createLostPetListing,
  updateLostPetListing,
  deleteLostPetListing,
} = require("../controllers/lostPetListingController");

lostPetListingRouter.get("/", getLostPetListings);
lostPetListingRouter.get("/:id", getLostPetListing);
lostPetListingRouter.post("/", createLostPetListing);
lostPetListingRouter.patch("/:id", updateLostPetListing);
lostPetListingRouter.delete("/:id", deleteLostPetListing);

module.exports = lostPetListingRouter;
