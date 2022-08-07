const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const fitnessRoutes = require('./routes/fitness');

const app = express();
app.use(express.json());
dotenv.config();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/fitness', fitnessRoutes);

const PORT = process.env.PORT || 4001;

mongoose
  .connect(process.env.MONGO_UI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
