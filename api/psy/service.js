const Psy = require('../../model/Psy');
const Schedule = require('../../model/Schedule');

async function getAllPsy(req, res, next) {
  try {
      const psy = await Psy.find({}, {name:1});

      res.status(200).send({
        psy,
        message: 'psychologists Listed'
      })
  } catch (error) {
      next(error);
  }
}

async function newPsy(req, res, next) {
  const { body: data } = req;

  try {
    const psy = new Psy(data);
    const newPsy = await psy.save();

    if (newPsy) {
      res.status(201).json({
        message: 'New Psy created successfuly',
        info: newPsy
      })
    }
  } catch (error) {
    res.status(500).json({
      error: 'Error'
    })
    next(error)
  }
}

module.exports = {
  getAllPsy,
  newPsy
}
