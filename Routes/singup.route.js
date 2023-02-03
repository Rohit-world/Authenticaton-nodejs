const express = require("express");
const SignupRoute = express.Router();
const { UserModel } = require("../model/user.model");
const { signupcheck } = require("../middlewares/signupCheck");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");