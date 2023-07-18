const getCountryByName = require('../controllers/getCountryByName')

const handlerGetCountryByName = async (req, res) => {
    const { name } = req.query

    try {
        const countryNameFound = await getCountryByName(name)
        console.log(countryNameFound)
        if(!countryNameFound.length) throw Error(`No existe el pais ${name}`)

        return res.status(200).json(countryNameFound)

    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = handlerGetCountryByName;
