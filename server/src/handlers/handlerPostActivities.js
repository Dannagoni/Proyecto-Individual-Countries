const postActivities = require('../controllers/postActivities')

const handlerPostActivities = async (req, res) => {
    
    const {name, difficulty, duration, season, countriesIds } = req.body
    try {
        if(!name || !difficulty || !season || !countriesIds )
        throw Error('Falta información para crear la actividad')

        const data = {name, difficulty, duration, season, countriesIds}
        const activity = await postActivities(data, countriesIds)
        res.status(200).json(activity);
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = handlerPostActivities;