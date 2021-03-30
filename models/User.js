const mongoose = require('mongoose');
const { Schema } = mongoose;

//user schema
const userSchema = new Schema({
  googleId: String,
});

//Model class with new collection users
mongoose.model('users', userSchema);
