const express = require("express");
require("../config/login.js");
const userSchema = require("../model/login.js");
const jwtToken = require("jsonwebtoken");
const jwtKey = "userSchema";
const createUser = express();

createUser.post("/api/register", async (req, res) => {
  console.log(req.body);
  let dataBase = new userSchema(req.body);
  let data = await dataBase.save(req.body);
  data = data.toObject();
  delete data.password;
  jwtToken.sign({ data }, jwtKey, { expiresIn: "10h" }, (err, token) => {
    res.send({ data, auth: token });
  });
});
module.exports = createUser;
