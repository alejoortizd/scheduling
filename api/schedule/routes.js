const { Router } = require('express');
const router = Router();
const scheduleRoutes = require('./service')


router.get('/api/schedule', scheduleRoutes.getSchedule);
router.post('/api/schedule/newSchedule', scheduleRoutes.newSchedule);
router.post('/api/schedule/newRest', scheduleRoutes.newRest);

module.exports = router;
