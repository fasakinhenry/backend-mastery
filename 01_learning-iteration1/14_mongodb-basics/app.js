const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://fasakinhenry_db_user:fasakinhenry_db_user2025@cluster0.xp73zwy.mongodb.net/'
  )
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection failed:', err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

async function runQueryExamples() {
  try {
    const newUser = await User.create({
      name: 'Fasakin Henry',
      email: 'fasakinhenry@gmail.com',
      age: 18,
      isActive: true,
      tags: ['developer', 'designer', 'CEO'],
    });
    // const newUser = new User({
    //   name: 'Adedoyin Emmanuel',
    //   email: 'adedoyin.emmanuel@gmail.com',
    //   age: 19,
    //   isActive: true,
    //   tags: ['developer', 'designer', 'manager'],
    // });
    // await newUser.save();
    console.log('Created new user', newUser);
  } catch (error) {
    console.log('Error', error);
  } finally {
    mongoose.connection.close();
  }
}

runQueryExamples();
