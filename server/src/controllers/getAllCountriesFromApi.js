const axios = require('axios');
const { Country } = require('../../src/db')
const URL = 'http://localhost:5000/countries';

const getAllCountriesFromApi = async () => {
    try {
        const getApi = await axios.get(URL)
        const mapCountry= getApi.data.map(country => ({
                id: country.cca3,
                name: country.name.common,
                flag: country.flags.png,//svg
                continent: country.continents[0],
                capital:country.capital ? country.capital[0] : "No tiene",
                subregion: country.subregion ? country.subregion: "No tiene",
                area: country.area,
                population: country.population,
            })
        )
        for (let i = 0; i < mapCountry.length; i++) {
            await Country.findOrCreate({ 
              where: {name: mapCountry[i].name}, 
              defaults: mapCountry[i],
            })
          }
        //te crea las tablas con toda la info q le pasas
        
    } catch (error) {
        console.error(error)
    }
}

module.exports= getAllCountriesFromApi;