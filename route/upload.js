const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const upload=require('../config/multer');
const Event=require('../models/Event');
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; 
    next(); 
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};


router.post('/upload',upload.single('photo'), async (req, res) => {
  const { name, event, description, location, contact, privacy,date } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null; // Get the file path
 
  try {
    const targetDate = new Date(date).getTime();
    const newEvent = new Event({
      name: name,
      event_name: event,
      description: description,
      location: location,
      contact: contact,
      privacy: privacy,
      photo: photo,
      date: targetDate,
    });

    await newEvent.save();
  


    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating event', error: err });
  }
});

module.exports = router;
