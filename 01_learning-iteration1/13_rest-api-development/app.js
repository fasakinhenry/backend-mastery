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

// GET /books/:id - Retrieve a book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find((b) => b.id === req.params.id);
  if (book) {
    res.status(200).json(book);
  } else {
    res
      .status(404)
      .json({ message: 'Book not found! Please try with a different ID.' });
  }
});

// POST /books - Create a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };
  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: 'New book is added successfully',
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
