const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  token: {
    type: String,
    require: true,
  },
  cartData: {
    type: Array,
    require: true,
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user",
  // },
  // quantity: {
  //   type: Number,
  //   min: 1,
  // },
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
