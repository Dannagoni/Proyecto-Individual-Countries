const { Router } = require("express");
const handlerGetCountries = require('../handlers/handlerGetCountries')
const handlerGetCountryById = require('../handlers/handlerGetCountryById')
const handlerGetCountryByName = require('../handlers/handlerGetCountryByName')

const countriesRouter = Router();

countriesRouter.get('/countries', handlerGetCountries);//TODOS LOS PAISES

// countriesRouter.get('/countries/name', handlerGetCountryByName);

countriesRouter.get('/countries/:id', handlerGetCountryById);


module.exports = countriesRouter;