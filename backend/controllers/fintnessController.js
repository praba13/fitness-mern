const Fitness = require('../models/FitnessModel');
const mongoose = require('mongoose');

//GET ALL DOCUMENT
const getAllFitness = async (req, res) => {
  //const fitness = await Fitness.find({20})
  const fitness = await Fitness.find({}).sort({ createdAt: -1 });
  res.status(200).json(fitness);
};

// GET SINGGLE DOCUMENT
const getFitness = async (req, res) => {
  const { id } = req.params;

  //Falls das ID not vaild (no 12 digital string)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Fitness' });
  }

  const fitness = await Fitness.findById(id); //falls exi.

  if (!fitness) {
    return res.status(404).json({ error: 'No such Fitness' }); // return wichtig
  }

  res.status(200).json(fitness);
};

// CREATE A DOCUMENT

const createFitness = async (req, res) => {
  const { title, load, reps } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push('title');
  }
  if (!load) {
    emptyFields.push('load');
  }
  if (!reps) {
    emptyFields.push('reps');
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill all fields', emptyFields });
  }

  // add to the database
  try {
    const fitness = await Fitness.create({ title, load, reps });
    res.status(200).json(fitness);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A SINGLE DOCUMENT

const deleteFitness = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such Fitness' });
  }

  const fitness = await Fitness.findOneAndDelete({ _id: id });

  if (!fitness) {
    return res.status(400).json({ error: 'No such Fitness' });
  }

  //res.status(200).json({ message: 'Document Deleted' });
  res.status(200).json(fitness);
};

//UPDATE A SINGLE DOCUMENT

const updateFitness = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such Fiteness' });
  }

  const fitness = await Fitness.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!fitness) {
    return res.status(400).json({ error: 'No such Fitness' });
  }

  res.status(200).json(fitness);
};

module.exports = {
  createFitness,
  getAllFitness,
  getFitness,
  deleteFitness,
  updateFitness
};
