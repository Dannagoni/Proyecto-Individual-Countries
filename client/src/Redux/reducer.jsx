import {
    GET_ALL_COUNTRIES,
    SEARCH_NAME,
    GET_COUNTRY_DETAIL,
    GET_ACTIVITIES,
} from './actions-type'


const initialState = { // default store: estado inicial de mi almacenamiento global.
    countries: [],
    countryDetails: [],
    allActivities: [],
}

const reducer = (state = initialState, action) => { // action = {type, payload}

    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return { ...state,
                countries: action.payload,
            }
        case SEARCH_NAME:
            return {
                ...state,
                countries: action.payload,
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetails: action.payload,
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload,
            }
        default:
            return { ...state }
    }
    // const finalCountries = [...state.countries].filter(country => countriesIdsFromActivity.includes(country.id) && (country.continent === selectedContinent || selectedContinent === 'AllCountries'))

}

export default reducer;