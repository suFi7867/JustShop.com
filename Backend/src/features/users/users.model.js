const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  // surname: {
  //   type: Array,
  //   require: true,
  // },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user",
  // },
  // quantity: {
  //   type: Number,
  //   min: 1,
  // },
});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
