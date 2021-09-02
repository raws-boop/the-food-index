const mongoose = require('mongoose');

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  image: {
    type: String,
    required: true,
    trim: true
  }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;