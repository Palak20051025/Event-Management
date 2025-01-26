const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const upload=require('../config/multer');
const Event=require('../models/Event');

app.get('/current_user', (req, res) => {
    if (req.isAuthenticated()) {
      res.json({ loggedIn: true, username: req.user.username });
    } else {
      res.json({ loggedIn: false });
    }
  });

  module.exports =app;