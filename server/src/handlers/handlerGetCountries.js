const getAllCountries = require('../controllers/getAllCountries')

const handlerGetCountries = async (req, res) => {
    // const { name } = req.query

    try {
    //     if(name) {
    //     const countryName = await getCountryByName(name)

    //     if(!countryName.length) {
    //         throw Error(`${name} no representa ningun pais`)
    //     }else {
    //         return res.status(200).json(countryName)
    //     }
    // } else {
        const allCountries = await getAllCountries();
            return res.status(200).json(allCountries)
        
    }
     catch (error) {
        res.status(404).json({error: error.message})
    }

}

module.exports= handlerGetCountries;