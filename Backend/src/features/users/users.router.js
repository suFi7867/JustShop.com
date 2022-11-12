const express = require("express");
const app = express.Router();
const Users = require("./users.model");
app.get("/", async (req, res) => {
  try {
    let data = await Users.find();

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
