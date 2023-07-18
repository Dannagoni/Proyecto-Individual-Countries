const { Country } = require ('../db')
const { Op } = require('sequelize')

const getCountryByName = async(name) => {
    const countryName = await Country.findAll({
        where: {
            name:{
                [Op.iLike]: `%${name}%`
        }}
    })
    
        return countryName
}

module.exports = getCountryByName;