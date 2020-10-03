const { Router } = require('express');
const router = Router();
const psyRoutes = require('./service');


router.get('/api/psicologos', psyRoutes.getAllPsy);
router.post('/api/psicologos/new', psyRoutes.newPsy);


module.exports = router;
