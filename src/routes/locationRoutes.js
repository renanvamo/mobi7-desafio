const locationRoute = require('express').Router();

const { getLog } = require('../controller/locationController');

locationRoute.get('/location', getLog);

module.exports = locationRoute;
