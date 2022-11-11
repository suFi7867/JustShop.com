const express = require("express");
const app = express.Router();
const Cart = require("./cart.model");
app.get("/", async (req, res) => {
  try {
    let data = await Cart.find();

    res.send(data);
  } catch (e) {
    res.send(e.massage);
  }
});
app.post("/", async (req, res) => {
  try {
    let data = await Cart.create(req.body);

    res.send(data);
  } catch (e) {
    res.send(e.massage);
  }
});

module.exports = app;
