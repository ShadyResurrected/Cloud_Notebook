const connectToMongo = require("./db");
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

mongoose.set("strictQuery", true);
connectToMongo();

const app = express();
const port = 5000;

app.use(express.json()) // To get the request body we use this middleware

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
