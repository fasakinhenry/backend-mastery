require('dotenv').config();
const express = require('express');
const connectTODB = require('./database/db');

const app = express();

const PORT = process.env.PORT || 3000;

// Connect to a database
connectTODB();

// Middleware to parse JSON requests
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
