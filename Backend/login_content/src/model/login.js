const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    type: String,
    // require,
  },
  number: {
    type: Number,
    // require,
  },
  email: {
    type: String,
    require,
    // unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    // unique: true,
    require: [true, "Password is require"],
  },
});

const userSchema = mongoose.model("login", User); // loginform is collection name
module.exports = userSchema;
