const express = require("express");
const adminRouter = express.Router();
const {
  getAdoptionRequests,
  getAdoptionRequest,
  createAdoptionRequest,
  updateAdoptionRequest,
  deleteAdoptionRequest,
} = require("../controllers/adminController");

adminRouter.get("/adoptionRequests", getAdoptionRequests);
adminRouter.get("/adoptionRequests/:id", getAdoptionRequest);
adminRouter.post("/adoptionRequests", createAdoptionRequest);
adminRouter.patch("/adoptionRequests/:id", updateAdoptionRequest);
adminRouter.delete("/adoptionRequests/:id", deleteAdoptionRequest);

module.exports = adminRouter;
