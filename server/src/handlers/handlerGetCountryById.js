const getCountryById = require('../controllers/getCountryById')

const handlerGetCountryById = async(req, res) => {
    const { id } = req.params
    try {
        const idCountry = await getCountryById(id)
        
        if(!idCountry) throw Error(`ID: ${id} Not Found`)

        
        return res.status(200).json(idCountry)
    } catch (error) {
        res.status(404).send({error: error.message, id})
    }
}
module.exports = handlerGetCountryById;