const Patient = require('../../model/Patient');
const Schedule = require('../../model/Schedule');
const Session = require('../../model/Session');
const { obtenerFechaN, obtenerHoraInicio } = require('../../utils');


async function newReserva(req, res) {
  const { body: data} = req;
  const start = new Date(data.start_time);
  const finalTime = new Date(data.start_time);
  const minutes = data.duration;
  finalTime.setMinutes(finalTime.getMinutes() + minutes);
  const date = obtenerFechaN(data);

  try {
    const patient = await Patient.findOne({_id: data.user._id});   
  } catch (error) {
    res.status(400).send({
      message: 'El paciente no existe'
    })
  }

  if(start.getMinutes() > 0) {
    res.status(400).send({
      message: 'Por favor seleciona una hora en punto'
    })
  }

  try {
    const psyId = await Schedule.findOne({psy: data.psy});
    if(psyId) {
      const fecha = await Schedule.findOne({date: date});
      if (fecha) {
        const hora = obtenerHoraInicio(start)
        if(fecha.hours.indexOf(hora) === -1) {
          res.status(400).send({
            message: 'Error la hora no esta disponible'
          })
        } else {
          const reserva = new Session(data);
          reserva.start_time = start;
          reserva.end_time = finalTime;
          reserva.duration = minutes;
          reserva.psy = data.psy;
          reserva.patient = data.user._id;
          fecha.hours.splice(fecha.hours.indexOf(hora),2);
          const newReserva = await reserva.save();
          if (newReserva) {
            res.status(201).send({
              data: newReserva
            })
          }
          await fecha.save()
        }
      } else {
        res.status(400).send(`La agenda para el dia ${date} no ha sido abierta`);
      }
    }
  } catch (error) {
    res.status(400).send({
      message: 'El psy no existe'
    })
  }
}


module.exports = {
  newReserva
}
