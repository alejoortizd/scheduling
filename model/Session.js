const { Schema, model } = require('mongoose');


const sessionsSchema = new Schema({
  start_time: {
    type: Date,
    required: 'El dia de inicio es necesario',
  },
  duration: {
    type: Number,
    required: 'La duracion en minutos es necesaria'
  },
  end_time: {
    type: Date,
  },
  psy: {
    type: Schema.Types.ObjectId,
    ref: 'Psys',
    required: true
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patients',
    required: true
  }
});

module.exports = model('Sessions', sessionsSchema);
