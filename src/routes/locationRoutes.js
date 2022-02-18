const locationRoute = require('express').Router();

const { getLogByDate } = require('../controller/locationController');

locationRoute.get('/location', getLogByDate);

module.exports = locationRoute;
