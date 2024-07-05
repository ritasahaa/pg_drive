const express = require("express");
require("../config/login.js");
const userSchema = require("../model/login.js");
const jwtToken = require("jsonwebtoken");
const jwtKey = "userSchema";
const loginUser = express();

loginUser.post("/api/login", async (req, res) => {
  console.log("data", req.body);
  if (req.body.email && req.body.password) {
    let data = await userSchema.findOne(req.body).select("-password"); // it is use for hide password in database
    {
      data
        ? jwtToken.sign(
            { data },
            jwtKey,
            { expiresIn: "10h" },
            (err, token) => {
              res.send({ data, auth: token });
            }
          )
        : res.send("email or password not match");
    }
  } else {
    res.send("user not found");
  }
});

module.exports = loginUser;
