const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tripSchema = new Schema({
  deviceId: {
    type: String,
    required: true
  },
  location: {
    type: [Number],
    required: true
  },
  altitude: {
    type: Number,
    required: false
  },
  speed: {
    type: Number,
    required: false
  },
  direction: {
    type: Number,
    required: false
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Créer un index géospatial sur le champ location.coordinates
tripSchema.index({ 'location': '2dsphere' });

module.exports = mongoose.model('Trip', tripSchema);