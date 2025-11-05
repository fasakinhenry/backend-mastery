require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db');
const authRoutes = require('./routes/auth-routes');

const app = express();

app.use(express.json());

// All routes
app.use('/api/auth', authRoutes);

// Connect to database
connectToDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
