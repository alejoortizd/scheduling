# Terapify

## Challenge
---
Build a REST service that allow know the different available schedules of a psychologist, taking into account the data and being able to create and appointment in the slot that user choose ensuring that this slot will be available when make a booking

## Installation
---
Install via NPM

    npm install

You will also need a working [Mongo](https://www.mongodb.com/) database (v3) to point it to.

# Endpoints
For this project we create the following endpoints:

Endpoint | Method | Description
-- | -- | --
/api/psy | GET | List all psy from the DB
/api/patient/new | POST | Create a new patient and save at DB
/api/psy/new | POST | Create a new psy and save at DB
/api/schedule | GET | Show an specific schedule
/api/schedule/newSchedule | POST | Create and asing a new schedule
/api/schedule/newRest | POST | Create and asing a new rest
/api/session/newReserva | POST | Create and asing a new session

---

## Usages
Example of usages of the diferents endpoints

1. /api/psy
  <img src="https://imgur.com/OTMrHOy.png">
2. /api/patient/new
  <img src="https://imgur.com/g67HVc8.png">
3. /api/psy/new
  <img src="https://imgur.com/D6RNt2B.png">
4. /api/schedule |
  <img src="https://imgur.com/ZaRpclk.png">
5. /api/schedule/newSchedule
  <img src="https://imgur.com/CaASA6b.png">
6. /api/schedule/newRest
  <img src="https://imgur.com/tdoVvdw.png">
7. /api/session/newReserva
  <img src="https://imgur.com/CqOZ5Hk.png">

Finally you can visit the follow postman [link](https://documenter.getpostman.com/view/11548428/TVReer21)
to check how works the REST!


## License

[![License](https://img.shields.io/npm/l/mi)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
