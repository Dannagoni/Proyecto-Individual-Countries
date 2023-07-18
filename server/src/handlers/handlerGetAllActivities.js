const getAllActivities = require('../controllers/getAllActivities')

const handlergetAllActivities = async(req, res) => {
    try {
        const allActivities = await getAllActivities()
        res.status(200).json(allActivities)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = handlergetAllActivities;