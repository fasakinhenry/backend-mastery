const Book = require('../models/book');

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: 'List of Books retrieved successfully',
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'No books found',
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again',
      error: error.message,
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (book) {
      res.status(200).json({
        success: true,
        message: 'Book retrieved successfully',
        data: book,
      });
    } else {
      res.status(404).json({
        success: false,
        message:
          'Book with the current ID is not found! Please try with a different ID',
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again',
      error: error.message,
    });
  }
};

const addNewbook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);

    if (newBookFormData) {
      res.status(201).json({
        success: true,
        message: 'Book added successfully',
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, updatedBookFormData, {
      new: true,
    });
    if (updatedBook) {
      res.status(200).json({
        success: true,
        message: 'Book updated successfully',
        data: updatedBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message:
          'Book with the current ID is not found! Please try with a different ID',
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again',
      error: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (deletedBook) {
      res.status(200).json({
        success: true,
        message: 'Book deleted successfully',
        data: deletedBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message:
          'Book with the current ID is not found! Please try with a different ID',
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again',
      error: error.message,
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewbook,
  updateBook,
  deleteBook,
};
