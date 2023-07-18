import {
    GET_ALL_COUNTRIES,
    SEARCH_NAME,
    GET_COUNTRY_DETAIL,
    SELECT_CONTINENT,
    ORDER_COUNTRIES,
}from './actions-type'


const initialState = { // default store: estado inicial de mi almacenamiento global.
    countries: [],
    filteredCountries: [],
    countryDetail: [],
    selectedContinent: 'AllCountries',
}
const primeraIteracion = { // Obtengo todos los paises
    countries: [250], // array de 250 objetos
    filteredCountries: [],
    countryDetail: [],
    selectedContinent: 'AllCountries',
}
const segundaIteracion = { // Obtengo selectedContinent
    countries: [250], // array de 250 objetos
    filteredCountries: [50], // array de 50 (paises europeos): guardamos los paises filtrados porque cuando queramos filtrar por segunda vez, Argentina no va a aparecer en los paises europeos
    countryDetail: [],
    selectedContinent: 'Europe',
}
const terceraIteracion = { // Obtengo paises filtrados by selectedContinent (filteredCountries)
    countries: [250], // array de 250 objetos
    filteredCountries: [50], // array de 50 (paises europeos): guardamos los paises filtrados porque cuando queramos filtrar por segunda vez, Argentina no va a aparecer en los paises europeos
    countryDetail: [],
    selectedContinent: 'Europe',
}

const reducer = (state = initialState, action) => { // action = {type, payload}
    console.log(action)
    switch(action.type){

        case GET_ALL_COUNTRIES:
            return {...state, countries: action.payload}
        case SEARCH_NAME:
            return {
                ...state,
                countries: action.payload,
                // filteredCountries: action.payload,
            }
        case GET_COUNTRY_DETAIL:
            console.log(action)
            return {
                ...state,
                countryDetail: action.payload,
            }
        case SELECT_CONTINENT:
            // const countries = [...state.countries]
            
            // const countriesFilter = action.payload === "AllCountries" ? countries : countries.filter(country => country.continent === action.payload)
            return {
                ...state,
                // allActivitiesFilter: [],
                selectedContinent:action.payload
                // filteredCountries: countriesFilter
            }
        case ORDER_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
            
        
        
        default:
            return {...state}
    }
    
}

export default reducer;