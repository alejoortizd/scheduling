const { Schema, model } = require('mongoose');

const schedulesSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  dayOfWeek: {
    type: String,
    required: true
  },
  workingPlan: {
    start: {
      type: String,
      require: true
    },
    end: {
      type: String,
      require: true
    }
  },
  rest: [],
  // TODO cambiar nombre variable
  hours: [String],
  psy: {
    type: Schema.Types.ObjectId,
    ref: 'Psys',
    required: true
  }
})


module.exports = model('Schedules', schedulesSchema);
