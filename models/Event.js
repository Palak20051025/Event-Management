
const mongoose = require('mongoose');
const { model } = mongoose; 

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    //
    event_name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    contact: {
      type: String,
      required: true
    },
    privacy: {
      type: String,
      enum: ['public', 'private'],
      default: 'public'
    },
    photo: {
      type: String,
      required: true
    }
  },
  { timestamps: true } 
);

module.exports = mongoose.model('Event', eventSchema);
