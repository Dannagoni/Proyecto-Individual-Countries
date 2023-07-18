import {
    GET_ALL_COUNTRIES,
    SEARCH_NAME,
    GET_COUNTRY_DETAIL,
    FILTER_BY,
    GET_ACTIVITIES,
} from './actions-type'


const initialState = { // default store: estado inicial de mi almacenamiento global.
    countries: [],
    filteredCountries: [],
    countryDetails: [],
    allActivities: [],
}

const reducer = (state = initialState, action) => { // action = {type, payload}

    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return { ...state,
                countries: action.payload,
                filteredCountries: action.payload
            }
        case SEARCH_NAME:
            return {
                ...state,
                countries: action.payload,
                filteredCountries: action.payload,
            }
        case GET_COUNTRY_DETAIL:
            console.log(action)
            return {
                ...state,
                countryDetails: action.payload,
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload,
            }
        case FILTER_BY:
            const countries = [...state.countries]
            const payloadOrder = action.payload.order
            const payloadContinent = action.payload.continent
            const countriesByContinent = countries.filter(country => payloadContinent === 'AllCountries' || country.continent === payloadContinent)

            const payloadActivityId = action.payload.activityId
            const selectedActivity = state.allActivities.find(activity => activity.id === Number(payloadActivityId))
            const countriesIdsFromActivity = selectedActivity ? selectedActivity?.Countries?.map(country => country.id) : []
            
            let finalCountries;
            if (payloadContinent && payloadActivityId) {
                finalCountries = countriesByContinent.filter(country => countriesIdsFromActivity.includes(country.id))
            } else if (payloadContinent) {
                finalCountries = countriesByContinent
            } else {
                finalCountries = countries.filter(country => countriesIdsFromActivity.includes(country.id))
            }
            return { ...state, filteredCountries: finalCountries.sort((a, b) => {
                if (payloadOrder === "Ascendente") {
                    return a.name.localeCompare(b.name)
                }
                if (payloadOrder === "Descendente") {
                    return b.name.localeCompare(a.name)
                }
                if (payloadOrder === "Ascendente de poblacion") {
                    return a.population - b.population
                }
                if (payloadOrder === "Descendente de poblacion") {
                    return b.population - a.population
                }
            }) }
        default:
            return { ...state }
    }
    // const finalCountries = [...state.countries].filter(country => countriesIdsFromActivity.includes(country.id) && (country.continent === selectedContinent || selectedContinent === 'AllCountries'))

}

export default reducer;