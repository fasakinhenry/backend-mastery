require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db')

const app = express();

app.use(express.json());

// Connect to database
connectToDB()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
