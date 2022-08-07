const express = require('express');

const router = express.Router();

//Get all
router.get('/', (req, res) => {
  res.json({ mssg: 'Get All documents' });
});

//Get a single document
router.get('/:id', (req, res) => {
  res.json({ mssg: 'Get single document' });
});

//Post a new document
router.post('/', (req, res) => {
  res.json({ mssg: 'Post new document' });
});

//Delete a single document
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'Delete single document' });
});

//Update a document
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'Update a document' });
});

module.exports = router;
