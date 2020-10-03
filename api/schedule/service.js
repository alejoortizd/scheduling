const Schedule = require('../../model/Schedule');
const {obtenerHorario, obtenerDia, obtenerHoraInicio, obtenerHoraFinal, obtenerFecha} = require('../../utils');

async function newSchedule(req, res, next) {
  const { body: data} = req;
  const start = new Date(data.start);
  const end = new Date(data.end);
  const horario = obtenerHorario(data);
  const dia = obtenerDia(data);
  const date = obtenerFecha(data)
  try {
    const schedule = new Schedule(data);
    schedule.dayOfWeek = dia;
    schedule.workingPlan.start = obtenerHoraInicio(start);
    schedule.workingPlan.end = obtenerHoraFinal(end);
    schedule.hours = horario;
    schedule.psy = data.user._id;
    schedule.date = date

    const newSchedule = await schedule.save();
    if (newSchedule) {
      res.status(201).send({
        message: 'Horario creado exitosamente',
        horario: newSchedule
      })
    }
  } catch (error) {
    next(error)
  }
}

async function newRest(req, res) {
  const { body: data} = req;
  const newRest = {
    start: data.rest.start,
    end: data.rest.end
  }

  try {
    const schedulePsy = await Schedule.findOne({psy: data.user._id})
    if (schedulePsy) {
      const date = await Schedule.findOne({date: data.date});
      if (date) {
        let repetido = false;
        for(let i = 0; i < schedulePsy.rest.length; i++) {
          if (schedulePsy.rest[i].start == data.rest.start){
            repetido = true
          }
        }
        if(!repetido) {
          schedulePsy.rest.push(newRest);
          schedulePsy.hours.splice(schedulePsy.hours.indexOf(data.rest.start),2)
          await schedulePsy.save();
          res.status(201).json({
            message: "Creado exitosamente",
            info: schedulePsy.rest
          })
        } 
        else {
          res.status(400).send({
            message: 'Eror: Informacion duplicada'
          })
        }
      } else {
        res.status(400).send(`La agenda para el dia ${data.date} no ha sido abierta`);
      }
    }
  } catch (error) {
    res.status(400).send('El psy no existe');
  }
}

async function getSchedule(req, res, next){
  const {body: data} = req;

  try {
    const psyId = await Schedule.findOne({psy: data.psy});
    if (psyId) {
      const date = await Schedule.findOne({date: data.date});
      if (date) {
        res.status(200).send({
          hours: date.hours
        })
      } else {
        res.status(400).send(`La agenda para el dia ${data.date} no ha sido abierta`);
      }
    }
  } catch (error) {
    res.status(400).send('El psy no existe');
  }
}

module.exports = {
  newSchedule,
  newRest,
  getSchedule
}
