const express = require("express");
const app = express.Router();
const Electronic = require("./electronics.model");

app.get("/", async (req, res) => {
  //   const { limit = 10, page = 1 } = req.query;

  try {
    let data = await Electronic.find();
    //   .limit(limit)
    //   .skip((page - 1) * limit);

    res.send(data);
  } catch (e) {
    res.send(e.massage);
  }
});

app.delete("/", async (req, res) => {
  try {
    let exists = await Electronic.findOneAndDelete({
      id: req.body.id,
      name: req.body.name,
    });
    console.log(exists, req.body.id, req.body.name);

    res.status(200).send("Product deleted successfully");
  } catch (e) {
    res.send(e.massage);
  }
});

app.post("/", async (req, res) => {
  let s = req.body.data.area.split(",");
  console.log(s.length);
  res.send("SS");
  try {
    let ele = await Electronic.create({
      id: s[0],
      name: s[1],
      quantity: s[2],
      defaultImage: s[3],
      hoverImage: s[4],
      price: s[5],
      strikePrice: s[6],
      firstImages: [],
      secondImages: [],
      thirdImages: [],
    });

    res.status(200).send("Data Added Successfully");
  } catch (e) {
    res.status(404).send(e.massage);
  }
});

module.exports = app;
