const { Router } = require('express');
const router = Router();
const patientRoutes = require('./service');


router.post('/api/patient/new', patientRoutes.newPatient);


module.exports = router;
