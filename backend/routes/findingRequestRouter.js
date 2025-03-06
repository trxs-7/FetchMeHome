const express = require("express");
const findingRequestRouter = express.Router();
const {
  getFindingRequests,
  getFindingRequest,
  createFindingRequest,
  updateFindingRequest,
  deleteFindingRequest,
} = require("../controllers/findingRequestController");

findingRequestRouter.get("/", getFindingRequests);
findingRequestRouter.get("/:id", getFindingRequest);
findingRequestRouter.post("/", createFindingRequest);
findingRequestRouter.patch("/:id", updateFindingRequest);
findingRequestRouter.delete("/:id", deleteFindingRequest);

module.exports = findingRequestRouter;
