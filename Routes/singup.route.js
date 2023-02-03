const express = require("express");
const SignupRoute = express.Router();
const { UserModel } = require("../model/user.model");
const { signupcheck } = require("../middlewares/signupCheck");
const bcrypt = require("bcrypt");

SignupRoute.post("/", signupcheck,async(req,res)=>{
   const { email, password} = req.body;
  const hashedPass = await bcrypt.hash(password, 6);
  const newUser = new UserModel({ email, password: hashedPass});
  await newUser.save();
  res.send({ msg: "User created successfull" });
})
module.exports={SignupRoute}