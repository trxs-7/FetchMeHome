const mongoose = require("mongoose");
const userFlag = require("../models/userFlagModel");

exports.getAllUserFlags = async (req, res) => {
  try {
    const userFlags = await userFlag.find();
    res.status(200).json(userFlags);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getUserFlag = async (req, res) => {
  const { id } = req.params;
  try {
    const userFlag = await userFlag.findById(id);
    res.status(200).json(userFlag);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createUserFlag = async (req, res) => {
  const userFlag = req.body;
  const newUserFlag = new userFlag(userFlag);
  try {
    await newUserFlag.save();
    res.status(201).json(newUserFlag);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateUserFlag = async (req, res) => {
  const { id } = req.params;
  const userFlag = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No userFlag with that id");
  const updatedUserFlag = await userFlag.findByIdAndUpdate(
    id,
    { ...userFlag, id },
    { new: true }
  );
  res.json(updatedUserFlag);
};

exports.deleteUserFlag = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No userFlag with that id");
  await userFlag.findByIdAndRemove(id);
  res.json({ message: "UserFlag deleted successfully" });
};
