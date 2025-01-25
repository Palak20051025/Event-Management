const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const upload=require('../config/multer');
const Event=require('../models/Event');

router.post('/upload', upload.single('photo'), async (req, res) => {
  const { name, event, description, location, contact, privacy } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null; // Get the file path

  // Create new event entry
  try {
    const newEvent = new Event({
      name,
      event_name: event,
      description,
      location,
      contact,
      privacy,
      photo
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating event', error: err });
  }
});

module.exports = router;
