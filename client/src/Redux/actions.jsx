import axios from 'axios'
import {
    GET_ALL_COUNTRIES,
    SEARCH_NAME,
    GET_COUNTRY_DETAIL,
    GET_ACTIVITIES,
} from './actions-type'

export const getAllCountries = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/countries')

           return dispatch({ type: GET_ALL_COUNTRIES, payload: data })

        } catch (error) {
            console.log(error)
        }
    }
}
export const searchName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries?name=${name}`)
            console.log('data', data)
            return dispatch({ type: SEARCH_NAME, payload: data })
        } catch (error) {
            if(error.response.status === 404) {
                alert("There's no country found with that name")
            }
        }
    }
}
export const getCountryDetail = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({ type: GET_COUNTRY_DETAIL, payload: data })

        } catch (error) {
            console.log(error)
        }
    }
}
// payload contiene el valor del continente por el cual deseas filtrar los países (por ej ascendente)

export const addActivity = (activitiesData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post("http://localhost:3001/activities", activitiesData)

            // return dispatch({ type: ADD_ACTIVITY, payload: data })

        } catch (error) {
            console.log(error)
        }
    }
}

export const getActivities = () => {
    return (dispatch) => {
        axios.get("http://localhost:3001/activities")
        .then(response => {return dispatch({ type: GET_ACTIVITIES, payload: response.data })})
        .catch (error =>{console.log(error)} )
    }
}
export const filterCountries = (payload) => { // payload = { ...selectedFilters, [property]: value}
    return async (dispatch) => {
        const { continent, activityId, orderAlphabetic, orderByPopulation } = payload
        console.log('payload', payload)
        const queryParameters = {}; // {continent: 'Europe', activityId: 1, orderAlphabetic: 'ASC'}
        if (continent) {
            queryParameters.continent = continent
        }
        if (activityId) {
            queryParameters.activityId = activityId
        }
        if (orderAlphabetic) {
            queryParameters.orderAlphabetic = orderAlphabetic
        }
        if (orderByPopulation) {
            queryParameters.orderByPopulation = orderByPopulation
        }
        try {
            const { data } = await axios.get('http://localhost:3001/countries', {
                params: queryParameters,
            })
            // Es un objeto que contiene las opciones de configuración para la solicitud
            console.log('action data', data)
          
                return dispatch({ type: GET_ALL_COUNTRIES, payload: data })
            

        } catch (error) {
            console.log(error)
        }
    }
}


//selecciono todos los continentes
//cuando yo toco la opcion ascendente se me ordena por orden alfabetico de la a-z
//cuando yo toco la opcion descendente se me ordena por orden alfabetico de la z-a