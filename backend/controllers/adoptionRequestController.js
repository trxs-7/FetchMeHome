const mongoose = require("mongoose");
const adoptionRequest = require("../models/adoptionRequestModel");

exports.createAdoptionRequest = async (req, res) => {
  const adoptionRequest = req.body;
  const newAdoptionRequest = new adoptionRequest(adoptionRequest);
  try {
    await newAdoptionRequest.save();
    res.status(201).json(newAdoptionRequest);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.getAdoptionRequests = async (req, res) => {
  try {
    const adoptionRequests = await adoptionRequest.find();
    res.status(200).json(adoptionRequests);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getAdoptionRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const adoptionRequest = await adoption;
    Request.findById(id);
    res.status(200).json(adoptionRequest);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateAdoptionRequest = async (req, res) => {
  const { id } = req.params;
  const adoptionRequest = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No adoptionRequest with that id");
  const updatedAdoptionRequest = await adoptionRequest.findByIdAndUpdate(
    id,
    { ...adoptionRequest, id },
    { new: true }
  );
  res.json(updatedAdoptionRequest);
};

exports.deleteAdoptionRequest = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No adoptionRequest with that id");
  await adoptionRequest.findByIdAndRemove(id);
  res.json({ message: "AdoptionRequest deleted successfully" });
};
