const { Router } = require('express');
const router = Router();
const psyRoutes = require('./service');


router.get('/api/psy', psyRoutes.getAllPsy);
router.post('/api/psy/new', psyRoutes.newPsy);


module.exports = router;
