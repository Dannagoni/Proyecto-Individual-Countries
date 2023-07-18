const { Country, Activity } = require ('../db')

const getAllCountries = async () => {
    const findAllCountry = await Country.findAll({
        include: {
            model: Activity,
            atrributes:["name","difficulty","duration","season"],
            through: {
                atrributes: [],
            }
        }
    })
    return findAllCountry;
}

module.exports = getAllCountries;