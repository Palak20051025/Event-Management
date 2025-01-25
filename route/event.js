const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const upload=require('../config/multer');
const Event=require('../models/Event');

router.post('/upcoming',async(req, res)=>{
    try {
        const currentDateTime = new Date()
        const result = await Event.deleteMany({
          createdAt: { $lt: currentDateTime }, 
        });

        const records = await Event.find({
            createdAt: { $gte: currentDateTime }
          });
          res.json(records);

      } catch (err) {
        console.error('Error deleting old records:', err);
      }
})

module.exports = router;