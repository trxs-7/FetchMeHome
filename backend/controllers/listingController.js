const mongoose = require("mongoose");
const listing = require("../models/listingModel");

exports.getListings = async (req, res) => {
  try {
    const listings = await listing.find();
    res.status(200).json(listings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getListing = async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await listing.findById(id);
    res.status(200).json(listing);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createListing = async (req, res) => {
  const listing = req.body;
  const newListing = new listing(listing);
  try {
    await newListing.save();
    res.status(201).json(newListing);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const listing = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No listing with that id");
  const updatedListing = await listing.findByIdAndUpdate(
    id,
    { ...listing, id },
    { new: true }
  );
  res.json(updatedListing);
};

exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No listing with that id");
  await listing.findByIdAndRemove(id);
  res.json({ message: "Listing deleted successfully" });
};
