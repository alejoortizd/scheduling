const { Router } = require('express');
const router = Router();
const sessionRoutes = require('./service');


router.post('/api/session/newReserva', sessionRoutes.newReserva)

module.exports = router;
