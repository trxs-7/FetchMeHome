const mongoose = require("mongoose");
const lostPetListing = require("../models/lostPetListingModel");

exports.getLostPetListings = async (req, res) => {
  try {
    const lostPetListings = await lostPetListing.find();
    res.status(200).json(lostPetListings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getLostPetListing = async (req, res) => {
  const { id } = req.params;
  try {
    const lostPetListing = await lostPetListing.findById(id);
    res.status(200).json(lostPetListing);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createLostPetListing = async (req, res) => {
  const lostPetListing = req.body;
  const newLostPetListing = new lostPetListing(lostPetListing);
  try {
    await newLostPetListing.save();
    res.status(201).json(newLostPetListing);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateLostPetListing = async (req, res) => {
  const { id } = req.params;
  const lostPetListing = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No lostPetListing with that id");
  const updatedLostPetListing = await lostPetListing.findByIdAndUpdate(
    id,
    { ...lostPetListing, id },
    { new: true }
  );
  res.json(updatedLostPetListing);
};

exports.deleteLostPetListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No lostPetListing with that id");
  await lostPetListing.findByIdAndRemove(id);
  res.json({ message: "LostPetListing deleted successfully" });
};
