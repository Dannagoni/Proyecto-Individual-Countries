const { Country, Activity } = require('../db')

const getAllCountries = async ( continent, orderAlphabetic, orderByPopulation, activityId) => {
    const filters = {} // { continent: 'Europe'}
    const order = [] // [['population', orderByPopulation], ['name', orderAlphabetic]]

    // if (name) {
    //     filters.name = {
    //         [Op.iLike]: `%${name}%`
    //     }
    // }

    if (continent && continent !== 'AllCountries') {
        filters.continent = continent
    }

    if (orderByPopulation) {
        order.push(['population', orderByPopulation]) // CHANGE ORDER VALUE Ascendente => ASC
    }

    if (orderAlphabetic) {
        order.push(['name', orderAlphabetic]) // CHANGE ORDER VALUE Ascendente => ASC
    }


    let countries

    const findAllCountry = await Country.findAll({
        include: {
            model: Activity,
            atrributes: ["name", "difficulty", "duration", "season"],
            through: {
                atrributes: [],
            }
        },
        where: filters, // { continent: 'Europe', name: 'Spain'}
        order: order  // [['population', orderByPopulation], ['name', orderAlphabetic]]
    })

    if (activityId) {
        countries = findAllCountry.filter(country => !!country.Activities.find(activity => activity.id === Number(activityId)))
        console.log(countries)
    } else {
        countries = findAllCountry
    }
    return countries;
}

module.exports = getAllCountries;