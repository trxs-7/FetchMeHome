const express = require("express");
const adoptionRequestRouter = express.Router();
const {
  getAdoptionRequests,
  getAdoptionRequest,
  createAdoptionRequest,
  updateAdoptionRequest,
  deleteAdoptionRequest,
} = require("../controllers/adoptionRequestController");

adoptionRequestRouter.get("/", getAdoptionRequests);
adoptionRequestRouter.get("/:id", getAdoptionRequest);
adoptionRequestRouter.post("/", createAdoptionRequest);
adoptionRequestRouter.patch("/:id", updateAdoptionRequest);
adoptionRequestRouter.delete("/:id", deleteAdoptionRequest);

module.exports = adoptionRequestRouter;
