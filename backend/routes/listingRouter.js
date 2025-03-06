const express = require("express");
const listingRouter = express.Router();
const {
  getListings,
  getListing,
  createListing,
  updateListing,
  deleteListing,
} = require("../controllers/listingController");

listingRouter.get("/", getListings);
listingRouter.get("/:id", getListing);
listingRouter.post("/", createListing);
listingRouter.patch("/:id", updateListing);
listingRouter.delete("/:id", deleteListing);

module.exports = listingRouter;
