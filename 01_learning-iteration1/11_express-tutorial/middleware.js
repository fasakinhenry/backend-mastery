const express = require('express');

const app = express();

const myFirstMiddleware = (req, res, next) => {
  console.log('This first middleware will run on every request');
  next();
};

app.use(myFirstMiddleware);

// Create a simple get request to test middleware
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${3000}`);
});
