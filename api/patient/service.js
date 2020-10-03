const Patient = require('../../model/Patient');

async function newPatient(req, res) {
  const { body: data } = req;

  try {
    const patient = new Patient(data);
    const newPatient = await patient.save();

    if (newPatient) {
      res.status(201).json({
        message: 'New Patient created successfuly',
        info: newPatient
      })
    }
  } catch (error) {
    res.status(500).json({
      error: 'Error'
    })
  }
}

module.exports = {
  newPatient
}
