const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const getAllCountriesFromApi = require('./src/controllers/getAllCountriesFromApi')
const PORT = 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    const dbCountries = Country.findAll()
    if (!dbCountries.length) {
      getAllCountriesFromApi()
    }
  })
}).catch(error => console.error(error))
