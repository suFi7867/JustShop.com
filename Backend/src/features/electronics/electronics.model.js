const mongoose = require("mongoose");

const electronicSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  name: { type: String },
  quantity: { type: String },
  defaultImage: { type: String },
  hoverImage: { type: String },
  price: { type: String },
  strikePrice: { type: String },
  firstImages: { type: Array },
  secondImages: { type: Array },
  thirdImages: { type: Array },
});

const Electronic = mongoose.model("electronic", electronicSchema);

module.exports = Electronic;
