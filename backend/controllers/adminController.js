const mongoose = require("mongoose");
const admin = require("../models/adminModel");

exports.getAdmins = async (req, res) => {
  try {
    const admins = await admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await admin.findById(id);
    res.status(200).json(admin);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createAdmin = async (req, res) => {
  const admin = req.body;
  const newAdmin = new admin(admin);
  try {
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateAdmin = async (req, res) => {
  const { id } = req.params;
  const admin = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No admin with that id");
  const updatedAdmin = await admin.findByIdAndUpdate(
    id,
    { ...admin, id },
    { new: true }
  );
  res.json(updatedAdmin);
};

exports.deleteAdmin = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No admin with that id");
  await admin.findByIdAndRemove(id);
  res.json({ message: "Admin deleted successfully" });
};
