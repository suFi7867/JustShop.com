const express = require("express");
const Carts = require("./carts.model");
const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let data = await Carts.find();

    res.send(data);
  } catch (e) {
    res.send(e.massage);
  }
});

module.exports = app;

// {
//   token:"sufi@gmail.com#123456",
//   cartData:[{},{}]
// }
