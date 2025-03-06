const express = require("express");
const listingFlagRouter = express.Router();
const {
  getListingFlags,
  getListingFlag,
  createListingFlag,
  updateListingFlag,
  deleteListingFlag,
} = require("../controllers/listingFlagController");

listingFlagRouter.get("/", getListingFlags);
listingFlagRouter.get("/:id", getListingFlag);
listingFlagRouter.post("/", createListingFlag);
listingFlagRouter.patch("/:id", updateListingFlag);
listingFlagRouter.delete("/:id", deleteListingFlag);

module.exports = listingFlagRouter;
