const locationRoute = require('express').Router();
const validations = require('../middlewares/validations')

const { getLogsByPlateAndDate, getLogsByPlate } = require('../controller/locationController');

locationRoute.get('/location', validations.plate, getLogsByPlate);
locationRoute.get('/location/:date', validations.dateAndPlate, getLogsByPlateAndDate);

module.exports = locationRoute;
