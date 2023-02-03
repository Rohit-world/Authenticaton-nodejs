const express = require("express");
const LoginRoute = express.Router();
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

LoginRoute.post("/",async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) res.send({ msg: "wrong creadentials" });
    const user = await UserModel.findOne({ email: email });
    if (!user) return res.send({ msg: "wrong creadentials" });
    const isValidUser = await bcrypt.compare(password, user.password);
    if (!isValidUser) return res.send({ msg: "wrong creadentials" });
    var token = await jwt.sign({ userID: user._id }, "rohituthen");
    res.send({"token":token})
  });

  module.exports={LoginRoute}