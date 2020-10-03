const { Schema, model } = require('mongoose');

const psysSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  rol: {
    type: String,
    default: 'psy'
  }
});

module.exports = model('Psys', psysSchema);
