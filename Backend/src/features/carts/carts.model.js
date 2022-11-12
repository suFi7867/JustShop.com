const mongoose = require("mongoose");

const cartsSchema = new mongoose.Schema({
  token: {
    type: String,
    require: true,
  },
  cartData: {
    type: Array
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

const Carts = mongoose.model("carts", cartsSchema);

module.exports = Carts;
