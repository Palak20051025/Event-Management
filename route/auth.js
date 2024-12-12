let mongoose= require('mongoose');
let express= require('express');
let bcrypt= require('bcrypt');
let jwt = require("jsonwebtoken");
let usermodels=require('../models/user');
let route= express();

require('dotenv').config();


route.post("/register", async (req, res) => {
  let { username, email, password,confirmpassword } = req.body;

  if (password!=confirmpassword) {
    return res.status(400).send("Password does not match");
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await usermodels.create({
      username,
      email,
      password: hash,
    });

    const token = jwt.sign({ username}, process.env.JWT_TOKEN);

    res.cookie("token", token, { httpOnly: true, secure: true });
    res.status(200).redirect("/");

  } catch (err) {
    console.error(err);
    return res.status(500).send("Error creating user");
  }
});

// login User
route.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await usermodels.findOne({ email: username});
    if (!user) {
      return res.status(404).send("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign(
      { username: user.username, password: user.password },
      process.env.JWT_TOKEN, 
      { expiresIn: "1h" }
    );
    res.cookie("token", token, { httpOnly: true });
    res.status(200).redirect("/");
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).send("An error occurred while processing your request");
  }
});

  module.exports = route;
