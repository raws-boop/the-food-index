const mongoose = require('mongoose');

const { Schema } = mongoose;

const resturauntSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Resturaunt = mongoose.model('Resturaunt', resturauntSchema);

module.exports = Resturaunt;