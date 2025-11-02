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
    // const allUsers = await User.find({});

    // console.log('All Users:', allUsers);

    // const getUserOfActiveFalse = await User.find({ isActive: false });
    // console.log(getUserOfActiveFalse);

    // const getJohnDoeUser = await User.findOne({ name: 'John Doe' });
    // console.log(getJohnDoeUser);

    // const getLastCreatedUser = await User.findById(newUser._id);
    // console.log(getLastCreatedUser);

    // const selectedFields = await User.find().select('name email -_id');
    // console.log(selectedFields)

    // const limitedUser = await User.find().limit(3).skip(1);
    // console.log(limitedUser);

    // const sortedUsers = await User.find().sort({ age: -1 });
    // console.log(sortedUsers);

    // const countDocuments = await User.countDocuments({ isActive: true });
    // console.log('Count of active users:', countDocuments);

    // const deletedUser = await User.findByIdAndDelete(newUser._id);
    // console.log('Deleted User:', deletedUser);

    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: 'mentor' },
      },
      { new: true }
    );
    console.log('Updated User:', updatedUser);
  } catch (error) {
    console.log('Error', error);
  } finally {
    mongoose.connection.close();
  }
}

runQueryExamples();
