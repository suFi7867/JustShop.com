const express = require("express");
const app = express.Router();
const Women = require("./womens.model");

app.get("/", async (req, res) => {
  //   const { limit = 10, page = 1 } = req.query;

  try {
    let data = await Women.find();
    //   .limit(limit)
    //   .skip((page - 1) * limit);

    res.send(data);
  } catch (e) {
    res.send(e.massage);
  }
});

app.delete("/", async (req, res) => {
  try {

    let exists = await Women.findOneAndDelete({
      id: +req.body.id,
    });
    console.log(exists,typeof +req.body.id, req.body.name);

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
    let women = await Women.create({
      id: +s[0],
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

//55,Sparx Womens Walking Shoes,1,https://i.ibb.co/Qrrkx8m/81-Og-N4zwd-L-UX695.jpg,https://i.ibb.co/rG6F4S4/71s-Hcj-OLbu-L-SX695-SX-UX-SY-UY.jpg,799,1090
//https://static.wixstatic.com/media/deebc7_a49ba8d3b72e42159fbcfe0b5c2cc432~mv2.gif