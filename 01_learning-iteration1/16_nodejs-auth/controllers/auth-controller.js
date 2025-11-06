const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register controller
const registerUser = async (req, res) => {
  try {
    // Extract user information from our request body
    const { username, email, password, role } = req.body;
    // Validate the request body
    // Check if username or email exists
    const checkExisingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (checkExisingUser) {
      return res.status(400).send({
        success: false,
        message:
          'User with same username or email exists. Please try with a different username or email',
      });
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPasssword = await bcrypt.hash(password, salt);
    // Add user to database
    const newUser = new User({
      username,
      email,
      password: hashedPasssword,
      role: role || 'user',
    });

    await newUser.save();

    if (newUser) {
      res.status(201).json({
        success: true,
        message: 'User registered successfully!',
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Unable to register user. Please try again',
      });
    }
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
    // Collect username and password
    const { username, password } = req.body;

    // Find if the current user exists in database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: `User doesn't exist`,
      });
    }

    // Check if password is correct or not
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials!',
      });
    }

    // Create a token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '15m',
      }
    );

    res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      accessToken,
    });
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
