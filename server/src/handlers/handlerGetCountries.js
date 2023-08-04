const getAllCountries = require('../controllers/getAllCountries')
const getCountryByName = require('../controllers/getCountryByName')

const handlerGetCountries = async (req, res) => {
    const { name, continent, orderAlphabetic, orderByPopulation, activityId } = req.query
    console.log('req', req.query)
    // Posibles queries a recibir: name, orderAlphabetic, orderByPopulation, continent, activity, allCountries
    try {
        if(name) {
            const countryName = await getCountryByName(name)
            
            if(!countryName.length) {
                throw Error(`${name} no representa ningun pais`)
            }else {
                return res.status(200).json(countryName)
            }

        } else {
            const allCountries = await getAllCountries(continent, orderAlphabetic, orderByPopulation, activityId);
            return res.status(200).json(allCountries)
        }
    }
    catch (error) {
        res.status(404).json({error: error.message})
    }

}

module.exports= handlerGetCountries;

// const getAllCountries = require('../controllers/getAllCountries')

// const handlerGetCountries = async (req, res) => {
//     // const { name } = req.query

//     try {
//     //     if(name) {
//     //     const countryName = await getCountryByName(name)

//     //     if(!countryName.length) {
//     //         throw Error(`${name} no representa ningun pais`)
//     //     }else {
//     //         return res.status(200).json(countryName)
//     //     }
//     // } else {
//         const allCountries = await getAllCountries();
//             return res.status(200).json(allCountries)
        
//     }
//      catch (error) {
//         res.status(404).json({error: error.message})
//     }

// }

// module.exports= handlerGetCountries;