const express = require("express");
const userFlagRouter = express.Router();
const {
  getUserFlags,
  getUserFlag,
  createUserFlag,
  updateUserFlag,
  deleteUserFlag,
} = require("../controllers/userFlagController");

userFlagRouter.get("/", getUserFlags);
userFlagRouter.get("/:id", getUserFlag);
userFlagRouter.post("/", createUserFlag);
userFlagRouter.patch("/:id", updateUserFlag);
userFlagRouter.delete("/:id", deleteUserFlag);

module.exports = userFlagRouter;
