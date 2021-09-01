const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  }
});

const MenuItem = mongoose.model('Menu', menuItemSchema);

module.exports = MenuItem;
