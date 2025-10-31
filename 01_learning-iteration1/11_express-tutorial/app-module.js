const express = require('express');

// Creates an express application
const app = express();

// Application level settings
app.set('view engine', 'ejs');

// Basic routing
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.post('/api/data', (req, res) => {
  res.json({
    message: 'Data received',
    data: req.body,
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something went wrong');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
