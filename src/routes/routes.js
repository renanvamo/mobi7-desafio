const router = require('express').Router();
const locationRoute = require('./locationRoutes')

router.use(locationRoute);

module.exports = router;