const express = require("express");
const app = express.Router();
const Women = require("./womens.model");

app.get("/", async (req, res) => {
//   const { limit = 10, page = 1 } = req.query;

  try {
    let data = await Women.find()
    //   .limit(limit)
    //   .skip((page - 1) * limit);

    res.send(data);
  } catch (e) {
    res.send(e.massage);
  }
});

module.exports = app;
