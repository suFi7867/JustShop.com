const express = require("express");
const app = express.Router();
const Men = require("./mens.model");

app.get("/", async (req, res) => {
//   const { limit = 10, page = 1 } = req.query;

  try {
    let data = await Men.find()
    //   .limit(limit)
    //   .skip((page - 1) * limit);

    res.send(data);
  } catch (e) {
    res.send(e.massage);
  }
});

module.exports = app;
