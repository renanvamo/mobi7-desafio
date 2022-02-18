const locationRoute = require('express').Router();

const { getLogsByPlateAndDate, getLogsByPlate } = require('../controller/locationController');

locationRoute.get('/location', getLogsByPlate);
locationRoute.get('/location/:date', getLogsByPlateAndDate);

module.exports = locationRoute;
