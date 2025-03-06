const mongoose = require("mongoose");
const findingRequest = require("../models/findingRequestModel");

exports.getFindingRequests = async (req, res) => {
  try {
    const findingRequests = await findingRequest.find();
    res.status(200).json(findingRequests);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getFindingRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const findingRequest = await findingRequest.findById(id);
    res.status(200).json(findingRequest);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createFindingRequest = async (req, res) => {
  const findingRequest = req.body;
  const newFindingRequest = new findingRequest(findingRequest);
  try {
    await newFindingRequest.save();
    res.status(201).json(newFindingRequest);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateFindingRequest = async (req, res) => {
  const { id } = req.params;
  const findingRequest = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No findingRequest with that id");
  const updatedFindingRequest = await findingRequest.findByIdAndUpdate(
    id,
    { ...findingRequest, id },
    { new: true }
  );
  res.json(updatedFindingRequest);
};

exports.deleteFindingRequest = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No findingRequest with that id");
  await findingRequest.findByIdAndRemove(id);
  res.json({ message: "FindingRequest deleted successfully" });
};
