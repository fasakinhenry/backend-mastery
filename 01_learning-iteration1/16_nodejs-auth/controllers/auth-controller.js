const User = require('../models/User');

// Register controller
const registerUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again',
    });
  }
};

// Login controller
const loginUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again',
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
