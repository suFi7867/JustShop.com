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
    let exists = await Cart.findOne({ token: req.body.token });
    console.log(req.body);
    if (exists) {
      // console.log("hgfasd");
      // let h = await Cart.update(
      //   { token: req.body.token },
      //   { $set: { cartData: req.body.data } }
      // );
      let newData = await Cart.find({ token: req.body.token });
      console.log(newData);
      let h = await Cart.findOneAndUpdate(
        { token: req.body.token },
        { $set: { cartData: [...newData[0].cartData, req.body.data] } }
      );
    } else {
      let newData = { token: req.body.token, cartData: req.body.data };
      let data = await Cart.create(newData);
      console.log(564);
    }

    res.send(data);
  } catch (e) {
    res.send(e.massage);
  }
});

app.delete("/", async (req, res) => {
  try {
    let exists = await Cart.findOne({ token: req.body.token });

    let newData = exists.cartData.filter((el) => el.id != req.body.id);
    // console.log(newData);
    let h = await Cart.findOneAndUpdate(
      { token: req.body.token },
      { $set: { cartData: newData } }
    );

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
