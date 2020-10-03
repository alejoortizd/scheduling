const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const patientsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'El nombre es necesario'
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: 'El correo es necesario'
  },
  rol: {
    type: String,
    default: 'patient'
  }
});

// Encrypt password
patientsSchema.methods.encryptPassword = async password => {
  return await bcrypt.hash(password, 12);
};

// Decrypt password
patientsSchema.methods.matchPassword = async password => {
  return await bcrypt.compare(password, this.password);
};

module.exports = model('Patients', patientsSchema);
