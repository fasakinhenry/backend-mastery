const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

let books = [
  {
    id: '1',
    title: 'Book 1',
  },
  {
    id: '2',
    title: 'Book 2',
  },
];

// Index route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our Bookstore API' });
});

// GET /books - Retrieve all books
app.get('/books', (req, res) => {
  res.json(books);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
