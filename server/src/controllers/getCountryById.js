const { Country, Activity } = require ('../db')

const getCountryById = async(id) => {
    const countryById = await Country.findByPk(id,{
        include: {
            model: Activity,
            atributtes: ["name", "difficulty", "duration", "season"],
            through: {
                atributtes: []
            }
        }
    })
    return countryById;
}
//findOne
module.exports= getCountryById;