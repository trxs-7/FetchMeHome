const mongoose = require("mongoose");
const listingFlag = require("../models/listingFlagModel");

exports.getListingFlags = async (req, res) => {
  try {
    const listingFlags = await listingFlag.find();
    res.status(200).json(listingFlags);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getListingFlag = async (req, res) => {
  const { id } = req.params;
  try {
    const listingFlag = await listingFlag.findById(id);
    res.status(200).json(listingFlag);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createListingFlag = async (req, res) => {
  const listingFlag = req.body;
  const newListingFlag = new listingFlag(listingFlag);
  try {
    await newListingFlag.save();
    res.status(201).json(newListingFlag);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateListingFlag = async (req, res) => {
  const { id } = req.params;
  const listingFlag = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No listingFlag with that id");
  const updatedListingFlag = await listingFlag.findByIdAndUpdate(
    id,
    { ...listingFlag, id },
    { new: true }
  );
  res.json(updatedListingFlag);
};

exports.deleteListingFlag = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No listingFlag with that id");
  await listingFlag.findByIdAndRemove(id);
  res.json({ message: "ListingFlag deleted successfully" });
};
