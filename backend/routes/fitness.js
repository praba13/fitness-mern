const express = require('express');
//const Fitness = require('../models/FitnessModel');
const {
  createFitness,
  getAllFitness,
  getFitness,
  deleteFitness,
  updateFitness
} = require('../controllers/fintnessController');

const router = express.Router();

//Get all
router.get('/', getAllFitness);

//Get a single document
router.get('/:id', getFitness);

//Post a new document
router.post('/', createFitness);

//Delete a single document
router.delete('/:id', deleteFitness);

//Update a document
router.patch('/:id', updateFitness);

module.exports = router;
