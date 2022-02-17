const locationRoute = require('express').Router();

const locationController = require('../controllers/locationController');

locationRoute.get('/location', locationController);

module.exports = locationRoute;
