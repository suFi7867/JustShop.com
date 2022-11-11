const express = require("express");
const app = express.Router();
const User = require("./user.model");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.send({
          token: `${email}#${password}`,
        });
      } else {
        res.status(401).send(`password is not match`);
      }
    } else {
      res.status(404).send("user not found");
    }
  } catch (e) {
    res.status(404).send(e.massage);
  }
});

app.post("/signup", async (req, res) => {
  const { name, surname, email, password } = req.body;

  try {
    let existUser = await User.findOne({ email });

    if (existUser) {
      res.status(404).send("email id already exist try another email");
    } else {
      let user = await User.create({
        name,
        surname,
        email,
        password,
      });

      res.send({
        token: `${email}#${password}`,
      });
    }
  } catch (e) {
    res.status(404).send(e.massage);
  }
});

module.exports = app;
