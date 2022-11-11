const mongoose = require("mongoose");

const womenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Women = mongoose.model("women", womenSchema);

module.exports = Women;
