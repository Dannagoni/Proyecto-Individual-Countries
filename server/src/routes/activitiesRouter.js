const { Router } = require("express");
const handlergetAllActivities = require('../handlers/handlerGetAllActivities')
const handlerPostActivities = require('../handlers/handlerPostActivities')

const activitiesRouter = Router();

activitiesRouter.post('/activities', handlerPostActivities )

activitiesRouter.get('/activities', handlergetAllActivities)

module.exports = activitiesRouter;