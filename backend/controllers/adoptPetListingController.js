const mongoose = require("mongoose");
const adoptPetListing = require("../models/adoptPetListingModel");

exports.getAdoptPetListings = async (req, res) => {
  try {
    const adoptPetListings = await adoptPetListing.find();
    res.status(200).json(adoptPetListings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getAdoptPetListing = async (req, res) => {
  const { id } = req.params;
  try {
    const adoptPetListing = await adoptPetListing.findById(id);
    res.status(200).json(adoptPetListing);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createAdoptPetListing = async (req, res) => {
  const adoptPetListing = req.body;
  const newAdoptPetListing = new adoptPetListing(adoptPetListing);
  try {
    await newAdoptPetListing.save();
    res.status(201).json(newAdoptPetListing);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateAdoptPetListing = async (req, res) => {
  const { id } = req.params;
  const adoptPetListing = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No adoptPetListing with that id");
  const updatedAdoptPetListing = await adoptPetListing.findByIdAndUpdate(
    id,
    { ...adoptPetListing, id },
    { new: true }
  );
  res.json(updatedAdoptPetListing);
};

exports.deleteAdoptPetListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No adoptPetListing with that id");
  await adoptPetListing.findByIdAndRemove(id);
  res.json({ message: "AdoptPetListing deleted successfully" });
};
